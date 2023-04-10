export const GetNickName = (email: string) => {
  const name = email.slice(0, email.indexOf("@"));
  return `@${name}`;
};
export const ConvertDate = (timestamp: number) => {
  const date = new Date(timestamp).toLocaleTimeString();
  return date;
};
export const LoginErrorHandler = (error: string) => {
  switch (error) {
    case "Firebase: Error (auth/wrong-password).":
      return "Wrong password.Try again.";
    case "Firebase: Error (auth/user-not-found).":
      return "User not found.";

    case "Firebase: Error (auth/email-already-in-use).":
      return "Email already in use.";
  }
};
