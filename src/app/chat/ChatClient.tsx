'use client';

import { useState } from "react";
import { useSearchParams } from "next/navigation"; 
import MentoChatPropile from "../components/MentoChatPropile";
import ChatBox from "../components/ChatBox";

type Message = {
  id: number;
  content: string;
  sender: "me" | "other";
};

type Mento = {
  id: number;
  name: string;
  img: string;
};

export default function ChatClient() {
  const searchParams = useSearchParams();

  const mentoData: Mento[] = [
    { id: 1, name: "김지민", img: "/images/example.png" },
    { id: 2, name: "박지영", img: "/images/example.png" },
    { id: 3, name: "최수민", img: "/images/example.png" },
  ];

  const mentoMessages: Record<number, Message[]> = {
    1: [
      { id: 1, content: "안녕하세요, 김지민입니다.", sender: "other" },
      { id: 2, content: "안녕하세요!", sender: "me" },
    ],
    2: [
      { id: 1, content: "안녕하세요, 박지영입니다. 궁금한 점 있으신가요?", sender: "other" },
      { id: 2, content: "안녕하세요! 몇 가지 여쭤보고 싶은 게 있어요.", sender: "me" },
      { id: 3, content: "네, 편하게 질문해주세요.", sender: "other" },
      { id: 4, content: "감사합니다! 첫 번째로는요...", sender: "me" }
    ],
    3: [
      { id: 1, content: "멘토 최수민입니다.", sender: "other" },
    ],
  };
  
  const queryId = searchParams.get("mentoId");
  const parsedId = queryId ? parseInt(queryId, 10) : null;

  const validId = parsedId && mentoData.some((mento) => mento.id === parsedId) ? parsedId : mentoData[0].id;

  const [selectedMentoId, setSelectedMentoId] = useState<number>(validId);

  const handleMentoClick = (id: number) => {
    setSelectedMentoId(id);
  };

  return (
    <div className="mt-[37px] flex flex-col md:flex-row md:gap-[27px] md:px-[10%] overflow-hidden">
      <div
        className="
          horizontalScroll flex md:flex-col md:overflow-y-auto md:border-gray-300
          gap-[10px] px-[5%] md:px-0 overflow-x-auto
        "
      >
        {mentoData.map((mento) => (
          <div key={mento.id} onClick={() => handleMentoClick(mento.id)}>
            <MentoChatPropile
              name={mento.name}
              imgUrl={mento.img}
              selected={selectedMentoId === mento.id}
            />
          </div>
        ))}
      </div>

      <div
        className="
          w-full flex flex-col flex-1 bg-white md:relative fixed bottom-0 left-0 right-0
          md:top-auto md:left-auto md:right-auto md:bottom-auto
        "
      >
        <ChatBox messages={mentoMessages[selectedMentoId] || []} />
      </div>
    </div>
  );
}