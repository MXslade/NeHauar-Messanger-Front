import React, { useContext } from "react";
import { IChat } from "../../utils/types";
import { Avatar } from "../ui/Avatar";
import { SharedDataContext } from "../../App";
import { AuthContext } from "../../App";
import { getChatName } from "../../utils/functions";

interface Props {
  chat: IChat;
}

export const ChatItem: React.FC<Props> = ({ chat }) => {
  const { chosenChat, setChosenChat, setChosenWindow } =
    useContext(SharedDataContext);
  const { currentUser } = useContext(AuthContext);

  const getLastMessage = (): React.ReactNode => {
    const message = { user: "Wolf", message: "Auuuu" }; // Dummy data, need to be removed
    return (
      <div className="text-xs">
        <span
          className={
            chosenChat?.id === chat.id ? "text-white" : "text-blue-300"
          }
        >
          {message.user}:
        </span>{" "}
        <span
          className={
            chosenChat?.id === chat.id ? "text-white" : "text-text-secondary"
          }
        >
          {message.message}
        </span>
      </div>
    );
  };

  const handleClick = () => {
    setChosenChat(chat);
    setChosenWindow("chat");
  };

  return (
    <div
      className={`w-full flex items-center py-2 pointer ${
        chosenChat?.id === chat.id ? "bg-highlighted" : ""
      }`}
      onClick={handleClick}
    >
      <div className="pl-2 pr-1.5">
        <Avatar
          src={
            "https://image.shutterstock.com/image-vector/wolf-howling-moon-eps-10-260nw-114579703.jpg"
          }
          size="large"
          alt="avatar"
        />
      </div>
      <div className="flex flex-col w-full pl-1.5 pr-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-white ">
            {currentUser && getChatName(chat, currentUser)}
          </span>
          <span
            className={
              chosenChat?.id === chat.id ? "text-white" : "text-text-secondary"
            }
          >
            12:12
          </span>
        </div>
        {getLastMessage()}
      </div>
    </div>
  );
};
