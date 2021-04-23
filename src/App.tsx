import React, { useEffect, useState } from "react";
import { ChatContainer } from "./components/chat/ChatContainer";
import { Sidebar } from "./components/sidebar/Sidebar";

const App: React.FC = () => {
  const [isCollapsedVersion, setIsCollapsedVersion] = useState<boolean>(false);
  const [chosenWindow, setChosenWindow] = useState<"sidebar" | "chat">("chat");

  const handleResize = (event: any) => {
    const windowWidth: number = event.target.innerWidth;
    setIsCollapsedVersion(windowWidth <= 600);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-screen border-4 border-red-500 flex relative">
      <Sidebar isCollapsed={isCollapsedVersion} chosenWindow={chosenWindow} />
      <ChatContainer
        isCollapsed={isCollapsedVersion}
        chosenWindow={chosenWindow}
      />
    </div>
  );
};

export default App;
