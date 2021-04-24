import React, { useContext } from "react";
import { SharedDataContext } from "../../App";
import { ChatItem } from "./ChatItem";

export const ChatList: React.FC = () => {
  const { chats } = useContext(SharedDataContext);

  return (
    <div
      className="bg-main"
      style={{ height: "calc(100vh - 3.5rem)", overflow: "overlay" }}
    >
      {chats.map((chatItem) => (
        <ChatItem key={chatItem.id} chat={chatItem} />
      ))}
    </div>
  );
};
