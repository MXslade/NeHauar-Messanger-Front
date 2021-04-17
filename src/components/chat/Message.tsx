import React from "react";
import { IMessage } from "../../utils/types";

interface Props {
  message: IMessage;
}

export const Message: React.FC<Props> = ({ message }) => {
  return (
    <div className="border rounded-md border-black px-3 py-2">
      <p>
        <span className="font-bold">{message.user}</span> says:
      </p>
      <p>{message.message}</p>
    </div>
  );
};
