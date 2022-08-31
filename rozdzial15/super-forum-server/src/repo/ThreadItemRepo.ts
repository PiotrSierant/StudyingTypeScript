import { isThreadBodyValid } from "../common/validators/ThreadValidators";
import { QueryArrayResult, QueryOneResult } from "./QueryArrayResult";
import { ThreadItem } from "./ThreadItem";
import { User } from "./User";
import { Thread } from "./Thread";

export const createThreadItem = async (
  userId: string | undefined | null,
  threadId: string,
  body: string
): Promise<QueryOneResult<ThreadItem>> => {
  const bodyMsg = isThreadBodyValid(body);
  if (bodyMsg) {
    return {
      messages: [bodyMsg],
    };
  }

  // Użytkownik musi być zalogowany
  if (!userId) {
    return {
      messages: ["Użytkownik nie jest zalogowany."],
    };
  }
  const user = await User.findOne({
    id: userId,
  });

  const thread = await Thread.findOne({
    id: threadId,
  });
  if (!thread) {
    return {
      messages: ["Nie znaleziono wątku."],
    };
  }
  const threadItem = await ThreadItem.create({
    body,
    user,
    thread,
  }).save();
  if (!threadItem) {
    return {
      messages: ["Nie udało się utworzyć odpowiedzi (ThreadItem)."],
    };
  }

  return {
    messages: [`${threadItem.id}`],
  };
};

export const getThreadItemsByThreadId = async (
  threadId: string
): Promise<QueryArrayResult<ThreadItem>> => {
  const threadItems = await ThreadItem.createQueryBuilder("ti")
    .where(`ti."threadId" = :threadId`, { threadId })
    .leftJoinAndSelect("ti.thread", "thread")
    .orderBy("ti.createdOn", "DESC")
    .getMany();

  if (!threadItems) {
    return {
      messages: ["Nie znaleziono odpowiedzi (ThreadItem) do wątku."],
    };
  }
  console.log(threadItems);
  return {
    entities: threadItems,
  };
};
