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
export type MessageType = {
  id: string;
  avatar: string;
  content: string;
  name: string;
  timestamp: number;
};
