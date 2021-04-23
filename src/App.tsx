import React, { useEffect, useState } from "react";
import { ChatContainer } from "./components/chat/ChatContainer";
import { Sidebar } from "./components/sidebar/Sidebar";
import { IChat } from "./utils/types";
import { dummyChats } from "./utils/dummyData";

interface ISharedDataContext {
  chats: IChat[];
  isCollapsedVersion: boolean;
  chosenWindow: "sidebar" | "chat";
  setChosenWindow: React.Dispatch<React.SetStateAction<"sidebar" | "chat">>;
  chosenChat: IChat | null;
  setChosenChat: React.Dispatch<React.SetStateAction<IChat | null>>;
}

export const SharedDataContext = React.createContext<ISharedDataContext>({
  chats: dummyChats,
  isCollapsedVersion: false,
  chosenWindow: "chat",
  setChosenWindow: () => {},
  chosenChat: null,
  setChosenChat: () => {},
});

const App: React.FC = () => {
  const [isCollapsedVersion, setIsCollapsedVersion] = useState<boolean>(false);
  const [chosenWindow, setChosenWindow] = useState<"sidebar" | "chat">("chat");
  const [chosenChat, setChosenChat] = useState<IChat | null>(null);

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
    <SharedDataContext.Provider
      value={{
        chats: dummyChats,
        isCollapsedVersion: isCollapsedVersion,
        chosenWindow: chosenWindow,
        setChosenWindow: setChosenWindow,
        chosenChat: chosenChat,
        setChosenChat: setChosenChat,
      }}
    >
      <div className="w-full h-screen flex relative">
        <Sidebar />
        <ChatContainer />
      </div>
    </SharedDataContext.Provider>
  );
};

export default App;
