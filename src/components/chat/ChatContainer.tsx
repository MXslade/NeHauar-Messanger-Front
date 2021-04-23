import React, { useContext } from "react";
import { SharedDataContext } from "../../App";

export const ChatContainer: React.FC = () => {
  const { isCollapsedVersion, chosenWindow } = useContext(SharedDataContext);

  const standardClassName = "h-full w-2/3 border-2 border-green-400";
  const collapsedClassName = `h-full w-full border-2 border-green-400 absolute ${
    chosenWindow === "sidebar" ? "transform translate-x-full" : ""
  }`;

  return (
    <div
      className={isCollapsedVersion ? collapsedClassName : standardClassName}
    >
      Chat
    </div>
  );
};
