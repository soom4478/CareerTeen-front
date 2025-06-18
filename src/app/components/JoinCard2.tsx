import { useState } from "react";
import JoinSequenceBox from "./JoinSequenceBox";

interface StepCardProps {
  onNext: () => void;
  onBack: () => void;
  setFormData: (data: { name: string; age: number }) => void;
}

export default function JoinCard2({ onNext, onBack, setFormData }: StepCardProps) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !age) {
      alert("이름과 나이를 모두 입력해주세요.");
      return;
    }

    const ageNumber = parseInt(age, 10);
    if (isNaN(ageNumber)) {
      alert("나이는 숫자로 입력해주세요.");
      return;
    }

    setFormData({ name, age: ageNumber });
    onNext();
  };

  return (
    <div className="w-full h-full absolute z-20 px-[5%] overflow-hidden flex items-center backdrop-blur-[3px]"
         style={{ backgroundColor: 'rgba(2, 9, 17, 0.8)' }}>
      <form
        className="bg-white w-full pt-[95px] px-[20px] pb-[40px] rounded-[12px] relative"
        onSubmit={handleNext}
      >
        <JoinSequenceBox num={[1, 2]} />
        <p className="font-semibold text-[20px] text-center mb-[40px]">인적사항을 작성해주세요</p>

        <div className="flex flex-col gap-[10px] mb-[24px]">
          <p className="text-[18px] font-medium text-[#222]">이름</p>
          <input
            type="text"
            placeholder="예. 홍길동"
            className="w-full px-[20px] py-[17px] rounded-[8px] border border-[#CCC] bg-[#F0F0F0]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-[10px] mb-[30px]">
          <p className="text-[18px] font-medium text-[#222]">나이</p>
          <input
            type="text"
            placeholder="예. 20세"
            className="w-full px-[20px] py-[17px] rounded-[8px] border border-[#CCC] bg-[#F0F0F0]"
            value={age}
            onChange={(e) => setAge(e.target.value)}
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
