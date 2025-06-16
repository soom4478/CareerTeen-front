import Image from "next/image";
import JoinSequenceBox from "./JoinSequenceBox";
interface StepCardProps {
    onBack: () => void;
    onClose: () => void;
}

export default function JoinCard5({ onBack, onClose }: StepCardProps) {
    return (
        <div className="w-full h-full absolute z-20 px-[5%] overflow-hidden flex items-center backdrop-blur-[3px]"
            style={{ backgroundColor: 'rgba(2, 9, 17, 0.8)' }}>
            <form className="bg-white w-full pt-[95px] px-[20px] pb-[40px] rounded-[12px] relative">
                <JoinSequenceBox num={[1, 2, 3, 4, 5]} />
                <p className="font-semibold text-[20px] text-center mb-[40px]">역할을 선택해주세요</p>
                <div className="flex gap-[11px] mb-[50px] w-full">
                    <div className="flex flex-col gap-[12px] flex-1">
                        <div className="bg-[#EEE] rounded-[8px] w-full h-[130px] relative">
                        <Image
                            src="/images/join/menti.png"
                            alt="멘티 이미지"
                            fill
                            style={{ objectFit: "contain" }}
                            className="py-[8px]"
                        />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[12px] flex-1">
                        <div className="bg-[#EEE] rounded-[8px] w-full h-[130px] relative">
                        <Image
                            src="/images/join/mento.png"
                            alt="멘토 이미지"
                            fill
                            style={{ objectFit: "contain" }}
                            className="py-[8px]"
                        />
                        </div>
                    </div>
                </div>
                <div className="flex gap-[12px]">
                    <button onClick={onBack} className="py-[17px] rounded-[8px] bg-[#EEE] font-medium text-[#555] text-[19px] w-full">뒤로가기</button>
                    <button onClick={onClose} className="py-[17px] rounded-[8px] bg-[#276FE2] font-medium text-white text-[19px] w-full">다음</button>
                </div>
            </form>
        </div>
    )
}