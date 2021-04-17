import React, { useState } from "react";

interface Props {
  sendMessage: (user: string, message: string) => void;
}

export const ChatInput: React.FC<Props> = ({ sendMessage }) => {
  const [user, setUser] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSendMessageClick = () => {
    const isUserProvided = user && user.length;
    const isMessageProvided = message && message.length;

    if (isUserProvided && isMessageProvided) {
      sendMessage(user, message);
    } else {
      alert("Input an user and a message!");
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col">
        <label>User:</label>
        <input
          className="border border-black"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label>Message:</label>
        <input
          className="border border-black"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <button
        className="border border-black px-3 py-2"
        onClick={handleSendMessageClick}
      >
        Send Message
      </button>
    </div>
  );
};
