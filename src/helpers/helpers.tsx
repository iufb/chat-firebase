export const GetNickName = (email: string) => {
  const name = email.slice(0, email.indexOf("@"));
  return `@${name}`;
};
