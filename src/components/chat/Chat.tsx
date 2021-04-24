import React from "react";
import { IMessage } from "../../utils/types";
import { Message } from "./Message";

interface Props {
  messages: IMessage[];
}

export const Chat: React.FC<Props> = ({ messages }) => {
  return (
    <div
      className="bg-secondary overflow-y-scroll w-full"
      style={{ height: "calc(100vh - 6.25rem)" }}
    >
      {messages.map((messageItem, index) => (
        <Message message={messageItem} key={index} />
      ))}
    </div>
  );
};
