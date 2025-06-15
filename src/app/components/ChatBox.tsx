import { useEffect, useRef } from "react";
import ChatInput from "./ChatInput";

type Message = {
  id: number;
  content: string;
  sender: "me" | "other";
};

type ChatBoxProps = {
  messages: Message[];
};

export default function ChatBox({ messages }: ChatBoxProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-[550px] md:h-[500px] bg-[#F5F6F8] px-[5%] pt-[65px] relative md:rounded-[15px]">
      <div
        ref={scrollRef}
        className="flex-1 overflow-auto space-y-3 pb-0">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <span
              className={`inline-flex px-[30px] py-[15px] rounded-b-[16px] ${
                msg.sender === "me"
                  ? "bg-[#3C98E9] text-white rounded-l-[16px]"
                  : "bg-white rounded-r-[16px]"
              }`}
            >
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      <div className="md:top-auto md:left-0 md:right-0 md:bottom-0 md:px-[28px] md:py-[19px]
                      md:flex md:items-center md:justify-between
                      fixed md:relative">
        <ChatInput />
      </div>
    </div>
  );
}
