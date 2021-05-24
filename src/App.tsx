import React, { useEffect, useState } from "react";
import { ChatContainer } from "./components/chat/ChatContainer";
import { Sidebar } from "./components/sidebar/Sidebar";
import { IChat, IUser } from "./utils/types";
import { dummyChats } from "./utils/dummyData";
import { jwtTokenKey } from "./utils/contants";
import { AuthApi } from "./utils/api";
import { Modal } from "./components/ui/Modal";
import { Button } from "./components/ui/Button";
import { SignInModal } from "./components/Auth/SignInModal";
import { SingUpModal } from "./components/Auth/SingUpModal";

interface ISharedDataContext {
  chats: IChat[];
  isCollapsedVersion: boolean;
  chosenWindow: "sidebar" | "chat";
  setChosenWindow: React.Dispatch<React.SetStateAction<"sidebar" | "chat">>;
  chosenChat: IChat | null;
  setChosenChat: React.Dispatch<React.SetStateAction<IChat | null>>;
}

interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: IUser | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const SharedDataContext = React.createContext<ISharedDataContext>({
  chats: dummyChats,
  isCollapsedVersion: false,
  chosenWindow: "chat",
  setChosenWindow: () => {},
  chosenChat: null,
  setChosenChat: () => {},
});

export const AuthContext = React.createContext<IAuthContext>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  currentUser: null,
  setCurrentUser: () => {},
});

const App: React.FC = () => {
  const [isCollapsedVersion, setIsCollapsedVersion] = useState<boolean>(false);
  const [chosenWindow, setChosenWindow] = useState<"sidebar" | "chat">("chat");
  const [chosenChat, setChosenChat] = useState<IChat | null>(dummyChats[0]);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [showSignInModal, setShowSignInModal] = useState<boolean>(false);
  const [showSingUpModal, setShowSignUpModal] = useState<boolean>(false);

  const handleResize = (event: any) => {
    const windowWidth: number = event.target.innerWidth;
    setIsCollapsedVersion(windowWidth <= 600);
  };

  const getCurrentUserData = () => {
    AuthApi.getCurrentUserData()
      .then((response) => {
        console.log(response);
        setIsAuthenticated(true);
        setCurrentUser(response.data);
      })
      .catch((error) => {
        localStorage.removeItem(jwtTokenKey);
        setShowSignInModal(true);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem(jwtTokenKey);
    if (token) {
      getCurrentUserData();
    } else {
      setShowSignInModal(true);
    }

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
      <AuthContext.Provider
        value={{
          currentUser,
          isAuthenticated,
          setCurrentUser,
          setIsAuthenticated,
        }}
      >
        <div className="w-full h-screen flex relative overflow-hidden">
          <Sidebar />
          <ChatContainer />
        </div>
        <SignInModal
          visible={showSignInModal}
          onClose={() => setShowSignInModal(false)}
          showSignUpModal={() => {
            setShowSignInModal(false);
            setShowSignUpModal(true);
          }}
        />
        <SingUpModal
          visible={showSingUpModal}
          onClose={() => setShowSignUpModal(false)}
          showSignInModal={() => {
            setShowSignUpModal(false);
            setShowSignInModal(true);
          }}
        />
      </AuthContext.Provider>
    </SharedDataContext.Provider>
  );
};

export default App;
