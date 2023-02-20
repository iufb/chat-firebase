export type CurrentUser = {
  email: string | null;
  id: string;
  name: string | null;
  avatar: string | null;
};
export type ConversationType = {
  id: string;
  creatorId: string;
  recipientId: string;
};
