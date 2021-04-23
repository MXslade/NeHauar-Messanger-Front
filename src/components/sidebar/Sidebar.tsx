import React, { useContext } from "react";
import { ChatList } from "../ChatList/ChatList";
import { SidebarNavigation } from "./SidebarNavigation";
import { SharedDataContext } from "../../App";

export const Sidebar: React.FC = () => {
  const { isCollapsedVersion, chosenWindow } = useContext(SharedDataContext);

  const standardClassName = "h-full w-1/3";
  const collapsedClassName = `h-full w-full absolute ${
    chosenWindow === "chat" ? "transform -translate-x-full" : ""
  }`;

  return (
    <>
      <div
        className={isCollapsedVersion ? collapsedClassName : standardClassName}
      >
        <SidebarNavigation />
        <ChatList />
      </div>
    </>
  );
};
