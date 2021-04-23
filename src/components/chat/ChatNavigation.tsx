import React, { useContext } from "react";
import {
  faSearch,
  faColumns,
  faEllipsisV,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/Button";
import { SharedDataContext } from "../../App";
import { Avatar } from "../ui/Avatar";

export const ChatNavigation: React.FC = () => {
  const {
    chosenChat,
    isCollapsedVersion,
    setChosenWindow,
    setChosenChat,
  } = useContext(SharedDataContext);

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
                <Avatar src={chosenChat.imageSrc} size="large" alt="avatar" />
              </div>
            )}
            <div className="flex flex-col text-sm leading-4 ">
              <span className="text-white">{chosenChat.name}</span>
              <span className="text-text-secondary">6 members</span>
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
