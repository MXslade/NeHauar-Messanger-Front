import { IChat, IUser } from "./types";

export const getChatName = (chat: IChat, currentUser: IUser): string => {
  if (chat.firstUserId === currentUser.id) {
    return chat.secondUser.firstName + " " + chat.secondUser.lastName;
  }
  return chat.firstUser.firstName + " " + chat.firstUser.lastName;
};
