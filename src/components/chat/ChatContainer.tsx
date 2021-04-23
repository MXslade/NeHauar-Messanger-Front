import React from "react";

interface Props {
  isCollapsed: boolean;
  chosenWindow: "sidebar" | "chat";
}

export const ChatContainer: React.FC<Props> = ({
  isCollapsed,
  chosenWindow,
}) => {
  const standardClassName = "h-full w-2/3 border-2 border-green-400";
  const collapsedClassName = `h-full w-full border-2 border-green-400 absolute ${
    chosenWindow === "sidebar" ? "transform translate-x-full" : ""
  }`;

  return (
    <div className={isCollapsed ? collapsedClassName : standardClassName}>
      Chat
    </div>
  );
};
