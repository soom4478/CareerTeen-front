import { useState } from "react";
import JoinSequenceBox from "./JoinSequenceBox";

interface StepCardProps {
    onNext: () => void;
    setFormData: (data: { username: string; password: string }) => void;
}

export default function JoinCard({ onNext, setFormData }: StepCardProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData({ username, password });
        onNext();
    };

    return (
        <div className="w-full h-full absolute z-20 px-[5%] overflow-hidden flex items-center backdrop-blur-[3px]"
            style={{ backgroundColor: 'rgba(2, 9, 17, 0.8)' }}>
            <form
                className="bg-white w-full pt-[95px] px-[20px] pb-[40px] rounded-[12px] relative"
                onSubmit={handleNext}
            >
                <JoinSequenceBox num={[1]} />
                <p className="font-semibold text-[20px] text-center mb-[40px]">아이디와 비밀번호를 설정해주세요</p>

                <div className="flex flex-col gap-[10px] mb-[24px]">
                    <p className="text-[18px] font-medium text-[#222]">아이디</p>
                    <input
                        type="text"
                        className="w-full px-[20px] py-[17px] rounded-[8px] border border-[#CCC] bg-[#F0F0F0]"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-[10px] mb-[30px]">
                    <p className="text-[18px] font-medium text-[#222]">비밀번호</p>
                    <input
                        type="password"
                        className="w-full px-[20px] py-[17px] rounded-[8px] border border-[#CCC] bg-[#F0F0F0]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="py-[17px] rounded-[8px] bg-[#276FE2] font-medium text-white text-[19px] w-full"
                >
                    다음
                </button>
            </form>
        </div>
    );
}
