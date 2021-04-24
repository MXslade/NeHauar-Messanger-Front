import React, { useState } from "react";
import { IMessage } from "../../utils/types";

interface Props {
  message: IMessage;
}

export const Message: React.FC<Props> = ({ message }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="rounded-md px-3 py-2 bg-message flex flex-col text-sm m-2"
      style={{ maxWidth: "80%" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="flex w-full items-center justify-between">
        <span className="font-semibold text-blue-300">{message.user}</span>
        {isHovered && (
          <span className="text-gray-500 cursor-pointer hover:underline">
            Reply
          </span>
        )}
      </p>
      <p className="flex text-white">{message.message}</p>
    </div>
  );
};
