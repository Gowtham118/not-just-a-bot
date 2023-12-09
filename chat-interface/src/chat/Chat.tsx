// src/ChatInterface.tsx

import React, { useEffect, useRef, useState } from "react";
import { Welcome } from "./Welcome";
import { ServerResponse } from "../server-response/ServerResponse";
import { UserMessage } from "./UserMessage";
import axios from "axios";

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      from: "server",
      message: "Hello! how can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    setMessages((p) => [
      ...p,
      {
        from: "user",
        message: inputValue,
      },
    ]);
    setInputValue("");
    const resp = await axios.post(
      "https://intent-natty.helpless-warthog-50.telebit.io/predict",
      {
        Text: inputValue,
      }
    );

    const data = resp.data;
    setMessages((p) => [
      ...p,
      {
        from: "server",
        message: JSON.stringify(data),
      },
    ]);
  };

  return (
    <div className="flex flex-col h-full justify-between w-4/5 mx-auto pt-6">
      <div
        className="overflow-scroll h-[80vh]"
        ref={messagesContainerRef}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {messages.length === 1 && <Welcome />}
        {messages.length > 0 &&
          messages.map((message, index) => {
            return message.from === "user" ? (
              <div key={index}>
                <UserMessage data={message.message} />
                <hr className="border-[#27272a] w-[90%] mx-auto m-4" />
              </div>
            ) : (
              <div key={index}>
                <ServerResponse data={message.message} />
                <hr className="border-[#27272a] w-[90%] mx-auto m-4" />
              </div>
            );
          })}
      </div>
      <div className="px-6 py-4 bg-black w-[80%] mx-auto border-[1px] border-[#27272a] rounded-xl">
        <div className="flex mx-auto w-[90%] border-[1px] border-[#27272a]  rounded-xl bg-black">
          <input
            placeholder="Type a message to send..."
            className="mt-auto p-6 rounded-xl bg-black outline-none text-white w-full"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />
          <button
            className="text-white px-6 rounded-xl border-[1px] border-[#27272a]"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
