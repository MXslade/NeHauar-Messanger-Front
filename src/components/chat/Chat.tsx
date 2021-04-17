import React, { useEffect, useRef, useState } from "react";
import {
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState,
} from "@microsoft/signalr";
import { ChatWindow } from "./ChatWindow";
import { ChatInput } from "./ChatInput";
import { IMessage } from "../../utils/types";

export const Chat: React.FC = () => {
  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [chat, setChat] = useState<IMessage[]>([]);
  const latestChat = useRef<IMessage[] | null>(null);

  latestChat.current = chat;

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:5001/hubs/chat")
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
            if (latestChat.current) {
              const updatedChat = [...latestChat.current];
              updatedChat.push(message);

              setChat(updatedChat);
            }
          });
        })
        .catch((e) => console.log("Connection failed: ", e));
    }
  }, [connection]);

  const sendMessage = async (user: string, message: string) => {
    const chatMessage: IMessage = {
      user,
      message,
    };

    if (connection?.state === HubConnectionState.Connected) {
      try {
        await connection.send("SendMessage", chatMessage);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("No connection to server yet");
    }
  };

  return (
    <div>
      <ChatInput sendMessage={sendMessage} />
      <hr />
      <ChatWindow chat={chat} />
    </div>
  );
};
