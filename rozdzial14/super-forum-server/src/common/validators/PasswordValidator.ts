export interface PasswordTestResult {
  message: string;
  isValid: boolean;
}

export const isPasswordValid = (password: string): PasswordTestResult => {
  const passwordTestResult: PasswordTestResult = {
    message: "",
    isValid: true,
  };

  if (password.length < 8) {
    passwordTestResult.message = "Hasło musi mieć co najmniej 8 znaków.";
    passwordTestResult.isValid = false;
    return passwordTestResult;
  }

  const strongPassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (!strongPassword.test(password)) {
    passwordTestResult.message =
      "Hasło musi zawierać przynajmniej jeden znak specjalny, jedną dużą literę i jedną cyfrę.";
    passwordTestResult.isValid = false;
  }

  return passwordTestResult;
};
