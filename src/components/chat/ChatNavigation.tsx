import React, { useContext } from "react";
import {
  faSearch,
  faColumns,
  faEllipsisV,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/Button";
import { SharedDataContext } from "../../App";
import { AuthContext } from "../../App";
import { Avatar } from "../ui/Avatar";
import { getChatName } from "../../utils/functions";

export const ChatNavigation: React.FC = () => {
  const { chosenChat, isCollapsedVersion, setChosenWindow, setChosenChat } =
    useContext(SharedDataContext);
  const { currentUser } = useContext(AuthContext);

  const handleBackClick = () => {
    setChosenChat(null);
    setChosenWindow("sidebar");
  };

  return (
    <div className="h-14 w-full flex align-center justify-between py-3 bg-main border-l border-black">
      {chosenChat && (
        <>
          <div className="flex items-center pl-4">
            {isCollapsedVersion && (
              <div className="flex items-center mr-2">
                <Button
                  icon={faArrowLeft}
                  className="w-6 mr-4"
                  onClick={handleBackClick}
                />
                <Avatar
                  src={
                    chosenChat.imageSrc
                      ? chosenChat.imageSrc
                      : "https://image.shutterstock.com/image-vector/wolf-howling-moon-eps-10-260nw-114579703.jpg"
                  }
                  size="large"
                  alt="avatar"
                />
              </div>
            )}
            <div className="flex flex-col text-sm leading-4 ">
              <span className="text-white">
                {currentUser && getChatName(chosenChat, currentUser)}
              </span>
              <span className="text-text-secondary">Private messages</span>
            </div>
          </div>
          <div className="flex items-center">
            <Button icon={faSearch} className="w-12" />
            <Button icon={faColumns} className="w-12" />
            <Button icon={faEllipsisV} className="w-12" />
          </div>
        </>
      )}
    </div>
  );
};
