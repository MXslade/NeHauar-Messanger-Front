import React from "react";
import { Message } from "./Message";
import { IMessage } from "../../utils/types";

interface Props {
  chat: IMessage[];
}

export const ChatWindow: React.FC<Props> = ({ chat }) => {
  const generatedChat = chat.map((chatItem) => (
    <Message key={Date.now() * Math.random()} message={chatItem} />
  ));

  return <>{generatedChat}</>;
};
