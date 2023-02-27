export const GetNickName = (email: string) => {
  const name = email.slice(0, email.indexOf("@"));
  return `@${name}`;
};
export const ConvertDate = (timestamp: number) => {
  const date = new Date(timestamp).toLocaleTimeString();
  return date;
};
