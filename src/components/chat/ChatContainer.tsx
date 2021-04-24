import React, { useContext } from "react";
import { SharedDataContext } from "../../App";
import { Chat } from "./Chat";
import { ChatInputPanel } from "./ChatInputPanel";
import { ChatNavigation } from "./ChatNavigation";

export const ChatContainer: React.FC = () => {
  const { isCollapsedVersion, chosenWindow } = useContext(SharedDataContext);

  const standardClassName = "h-full w-2/3";
  const collapsedClassName = `h-full w-full absolute ${
    chosenWindow === "sidebar" ? "transform translate-x-full" : ""
  }`;

  return (
    <div
      className={isCollapsedVersion ? collapsedClassName : standardClassName}
    >
      <ChatNavigation />
      <div
        className="bg-secondary"
        style={{ height: "calc(100vh - 6.25rem)" }}
      ></div>
      <ChatInputPanel />
    </div>
  );
};
