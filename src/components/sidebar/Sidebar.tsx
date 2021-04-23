import React from "react";
import { SidebarNavigation } from "./SidebarNavigation";

interface Props {
  isCollapsed: boolean;
  chosenWindow: "sidebar" | "chat";
}

export const Sidebar: React.FC<Props> = ({ isCollapsed, chosenWindow }) => {
  const standardClassName = "h-full w-1/3";
  const collapsedClassName = `h-full w-full absolute ${
    chosenWindow === "chat" ? "transform -translate-x-full" : ""
  }`;

  return (
    <>
      <div className={isCollapsed ? collapsedClassName : standardClassName}>
        <SidebarNavigation />
      </div>
    </>
  );
};
