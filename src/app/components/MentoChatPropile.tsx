import Image from "next/image";

interface MentoProps {
  name: string;
  imgUrl: string;
  selected?: boolean;
}

export default function MentoChatProfile({ name, imgUrl, selected = false }: MentoProps) {
  return (
    <div
      className={`w-[193px] flex items-center gap-4 px-4 py-3 rounded-[10px] transition-colors ${
        selected ? "bg-[#414E59] text-white" : "bg-[#F5F6F8] text-black"
      }`}
    >
      <div className="w-[66px] h-[66px] relative overflow-hidden rounded-full">
        <Image
          src={imgUrl}
          alt="멘토 이미지"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <p className="text-sm">멘토</p>
        <p className="font-semibold">{name}</p>
      </div>
    </div>
  );
}
