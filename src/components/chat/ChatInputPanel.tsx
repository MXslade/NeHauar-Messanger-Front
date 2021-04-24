import React, { useState } from "react";
import {
  faPaperclip,
  faMicrophone,
  faSmile,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/Button";

export const ChatInputPanel: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  return (
    <div className="h-12 w-full flex align-center py-3 bg-main border-l border-black">
      <Button icon={faPaperclip} className="w-12" />
      <input
        className="w-full focus:outline-none bg-transparent text-white text-sm"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Write a message..."
      />
      <Button icon={faSmile} className="w-12" />
      <Button icon={message ? faPaperPlane : faMicrophone} className="w-11" />
    </div>
  );
};
