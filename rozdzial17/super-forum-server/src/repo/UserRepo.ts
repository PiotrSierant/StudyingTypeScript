import { User } from "./User";
import bcrypt from "bcryptjs";
import { isPasswordValid } from "../common/validators/PasswordValidator";
import { isEmailValid } from "../common/validators/EmailValidator";

const saltRounds = 10;

export class UserResult {
  constructor(public messages?: Array<string>, public user?: User) {}
}

export const register = async (
  email: string,
  userName: string,
  password: string
): Promise<UserResult> => {
  const result = isPasswordValid(password);
  if (!result.isValid) {
    return {
      messages: [
        "Hasło musi mieć co najmniej 8 znaków i zawierać 1 dużą literę, 1 cyfrę i 1 symbol.",
      ],
    };
  }

  const trimmedEmail = email.trim().toLowerCase();
  const emailErrorMsg = isEmailValid(trimmedEmail);
  if (emailErrorMsg) {
    return {
      messages: [emailErrorMsg],
    };
  }

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userEntity = await User.create({
    email: trimmedEmail,
    userName,
    password: hashedPassword,
  }).save();

  userEntity.password = ""; // Hasło puste, ze względów bezpieczeństwa
  return {
    user: userEntity,
  };
};

export const login = async (
  userName: string,
  password: string
): Promise<UserResult> => {
  const user = await User.findOne({
    where: { userName },
  });
  if (!user) {
    return {
      messages: [userNotFound(userName)],
    };
  }

  if (!user.confirmed) {
    return {
      messages: ["Użytkownik jeszcze nie potwierdził swojego adresu e-mail."],
    };
  }

  const passwordMatch = await bcrypt.compare(password, user?.password);
  if (!passwordMatch) {
    return {
      messages: ["Hasło jest nieprawidłowe."],
    };
  }

  return {
    user: user,
  };
};

export const logout = async (userName: string): Promise<string> => {
  const user = await User.findOne({
    where: { userName },
  });

  if (!user) {
    return userNotFound(userName);
  }

  return "Użytkownik został wylogowany.";
};

export const me = async (id: string): Promise<UserResult> => {
  const user = await User.findOne({
    where: { id },
    relations: [
      "threads",
      "threads.threadItems",
      "threadItems",
      "threadItems.thread",
    ],
  });

  if (!user) {
    return {
      messages: ["Nie znaleziono użytkownika."],
    };
  }

  if (!user.confirmed) {
    return {
      messages: ["Użytkownik jeszcze nie potwierdził swojego adresu e-mail."],
    };
  }

  user.password = "";
  return {
    user: user,
  };
};

export const changePassword = async (
  id: string,
  newPassword: string
): Promise<string> => {
  const user = await User.findOne({
    where: { id },
  });

  if (!user) {
    return "Nie znaleziono użytkownika.";
  }

  if (!user.confirmed) {
    return "Użytkownik jeszcze nie potwierdził swojego adresu e-mail.";
  }

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(newPassword, salt);
  user.password = hashedPassword;
  user.save();
  return "Hasło zostało prawidłowo zmienione.";
};

function userNotFound(userName: string) {
  return `Nie udało się znaleźć użytkownika o nazwie "${userName}".`;
}
