import MentoChatPropile from "../components/MentoChatPropile";
import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";

export default function Page() {
  const mentoData = [
    { id: 1, name: "김지민", img: "/images/example.png" },
    { id: 2, name: "박지영", img: "/images/example.png" },
    { id: 3, name: "박지영", img: "/images/example.png" },
  ];

  return (
    <div className="flex flex-col pt-[37px] box-border">
      <div className="horizontalScroll gap-[10px] flex overflow-auto px-[5%]">
        {mentoData.map((mento) => (
          <MentoChatPropile
            name={mento.name}
            imgUrl={mento.img}
            key={mento.id}
          />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white z-10">
        <ChatBox />
        <ChatInput />
      </div>
    </div>
  );
}
