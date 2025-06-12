import Image from "next/image";

export default function ChatInput() {
    return (
        <div className="flex gap-[10px] px-[28px] py-[19px] bg-white border border-[#CCC] rounded-[15px]
                        fixed bottom-[59px] translate-x-[5%] z-20 w-[90%]">
            <input
                type="text"
                placeholder="메시지를 입력해주세요"
                className="w-full text-[18px] outline-none"></input>
            <div className="w-[36px] h-[36px] relative overflow-hidden">
                <Image
                    src="/images/sendImg.png"
                    alt="보내기"
                    fill
                    style={{ objectFit: "cover" }} />
            </div>
        </div>
    )
}