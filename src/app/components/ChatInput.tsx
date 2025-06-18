'use client';

import { useState } from "react";
import Image from "next/image";

export default function ChatInput() {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      console.log("전송 준비: ", inputValue);
      setInputValue("");
    }
  };

  const handleSendClick = () => {
    if (inputValue.trim() !== "") {
      console.log("전송 아이콘 클릭: ", inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <div className="fixed left-1/2 transform -translate-x-1/2 bottom-[59px] w-[90%] px-5 py-4 bg-white border border-[#CCC] rounded-[15px] flex gap-2 z-20 md:hidden">
        <input
          type="text"
          placeholder="메시지를 입력해주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full text-[18px] outline-none"
        />
        <div
          className="w-9 h-9 relative overflow-hidden cursor-pointer"
          onClick={handleSendClick}
        >
          <Image
            src="/images/sendImg.png"
            alt="보내기"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* PC*/}
      <div className="hidden md:flex gap-2 px-7 py-4 bg-white border border-[#CCC] rounded-[15px] w-full">
        <input
          type="text"
          placeholder="메시지를 입력해주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full text-[18px] outline-none"
        />
        <div
          className="w-9 h-9 relative overflow-hidden cursor-pointer"
          onClick={handleSendClick}
        >
          <Image
            src="/images/sendImg.png"
            alt="보내기"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
