import { useState } from "react";
import JoinSequenceBox from "./JoinSequenceBox";

interface StepCardProps {
    onNext: () => void;
    onBack: () => void;
    setFormData: (data: { job: string }) => void;
}

export default function JoinCard3({ onNext, onBack, setFormData }: StepCardProps) {
    const [job, setJob] = useState("");

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        if (!job) {
            alert("희망 직업을 입력해주세요.");
            return;
        }

        setFormData({ job });
        onNext();
    };

    return (
        <div className="w-full h-full absolute z-20 px-[5%] overflow-hidden flex items-center backdrop-blur-[3px]"
            style={{ backgroundColor: 'rgba(2, 9, 17, 0.8)' }}>
            <form
                className="bg-white w-full pt-[95px] px-[20px] pb-[40px] rounded-[12px] relative"
                onSubmit={handleNext}
            >
                <JoinSequenceBox num={[1, 2, 3]} />
                <p className="font-semibold text-[20px] text-center mb-[40px]">희망직업을 작성해주세요</p>
                <div className="flex flex-col gap-[10px] mb-[24px]">
                    <input
                        type="text"
                        placeholder="예. UI/UX 디자이너"
                        className="w-full px-[20px] py-[17px] rounded-[8px] border border-[#CCC] bg-[#F0F0F0]"
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                    />
                </div>
                <div className="flex gap-[12px]">
                    <button
                        type="button"
                        onClick={onBack}
                        className="py-[17px] rounded-[8px] bg-[#EEE] font-medium text-[#555] text-[19px] w-full"
                    >
                        뒤로가기
                    </button>
                    <button
                        type="submit"
                        className="py-[17px] rounded-[8px] bg-[#276FE2] font-medium text-white text-[19px] w-full"
                    >
                        다음
                    </button>
                </div>
            </form>
        </div>
    );
}
