import { getManager } from "typeorm";
import { ThreadItem } from "./ThreadItem";
import { ThreadItemPoint } from "./ThreadItemPoint";
import { User } from "./User";

export const updateThreadItemPoint = async (
  userId: string,
  threadItemId: string,
  increment: boolean
): Promise<string> => {
  if (!userId || userId === "0") {
    return "Użytkownik nie został uwierzytelniony";
  }

  let message = "Nie udało się inkrementować liczby punktów wątku.";
  const threadItem = await ThreadItem.findOne({
    where: { id: threadItemId },
    relations: ["user"],
  });
  console.log(
    "threadItemId, userId, threadItem!.user!.id",
    threadItemId,
    userId,
    threadItem!.user!.id
  );
  if (threadItem!.user!.id === userId) {
    message = "Błąd: użytkownik nie może oceniać swojego wątku.";
    console.log("incThreadItemPoints", message);
    return message;
  }
  const user = await User.findOne({ where: { id: userId } });

  const existingPoint = await ThreadItemPoint.findOne({
    where: {
      threadItem: { id: threadItemId },
      user: { id: userId },
    },
    relations: ["threadItem"],
  });

  await getManager().transaction(async (transactionEntityManager) => {
    if (existingPoint) {
      if (increment) {
        if (existingPoint.isDecrement) {
          await ThreadItemPoint.remove(existingPoint);
          threadItem!.points = Number(threadItem!.points) + 1;
          threadItem!.lastModifiedOn = new Date();
          await threadItem!.save();
        }
      } else {
        if (!existingPoint.isDecrement) {
          await ThreadItemPoint.remove(existingPoint);
          threadItem!.points = Number(threadItem!.points) - 1;
          threadItem!.lastModifiedOn = new Date();
          await threadItem!.save();
        }
      }
    } else {
      await ThreadItemPoint.create({
        threadItem,
        isDecrement: !increment,
        user,
      }).save();
      if (increment) {
        threadItem!.points = Number(threadItem!.points) + 1;
      } else {
        threadItem!.points = Number(threadItem!.points) - 1;
      }
      threadItem!.lastModifiedOn = new Date();
      await threadItem!.save();
    }

    message = `Pomyślnie ${
      increment ? "dodano" : "usunięto"
    } punkt.`;
  });

  return message;
};
