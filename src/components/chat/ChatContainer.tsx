import React, { useContext, useEffect, useRef, useState } from "react";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

import { SharedDataContext } from "../../App";
import { IChat, IMessage } from "../../utils/types";
import { Chat } from "./Chat";
import { ChatInputPanel } from "./ChatInputPanel";
import { ChatNavigation } from "./ChatNavigation";

export const ChatContainer: React.FC = () => {
  const { isCollapsedVersion, chosenWindow, chosenChat } =
    useContext(SharedDataContext);

  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [messages, setMessages] = useState<IMessage[]>(
    chosenChat ? chosenChat.messages : []
  );
  const latestMessages = useRef<IMessage[] | null>(null);

  latestMessages.current = messages;

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("http://localhost:4000/hubs/chat")
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then((result) => {
          console.log("Connected");

          connection.on("ReceiveMessage", (message) => {
            console.log(message);
            if (latestMessages.current) {
              const updatedMessages = [...latestMessages.current];
              updatedMessages.push(message);

              setMessages(updatedMessages);
            }
          });
        })
        .catch((error) => {
          console.log("Connection Failed: ", error);
        });
    }
  }, [connection]);

  const sendMessage = async (user: string, message: string): Promise<void> => {
    const chatMessage: IMessage = {
      user,
      message,
    };

    if (connection && connection.connectionId) {
      try {
        await connection.send("SendMessage", chatMessage);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("No connection to server yet");
    }
  };

  const standardClassName = "h-full w-2/3";
  const collapsedClassName = `h-full w-full absolute ${
    chosenWindow === "sidebar" ? "transform translate-x-full" : ""
  }`;

  return (
    <>
      {chosenChat ? (
        <div
          className={
            isCollapsedVersion ? collapsedClassName : standardClassName
          }
        >
          <ChatNavigation />
          <Chat messages={messages} />
          <ChatInputPanel sendMessage={sendMessage} />
        </div>
      ) : (
        <div
          className="bg-secondary w-full flex items-center justify-center"
          style={{ height: "100vh" }}
        >
          <div className="bg-main rounded-lg px-4 py-2 text-white text-sm">
            Select a chat to start messaging
          </div>
        </div>
      )}
    </>
  );
};
