import JoinSequenceBox from "./JoinSequenceBox";

export default function JoinCard3() {
    return (
        <div className="w-full h-full absolute z-20 px-[5%] overflow-hidden flex items-center backdrop-blur-[3px]"
            style={{ backgroundColor: 'rgba(2, 9, 17, 0.8)' }}>
            <form className="bg-white w-full pt-[95px] px-[20px] pb-[40px] rounded-[12px] relative">
                <JoinSequenceBox num={[1, 2, 3]} />
                <p className="font-semibold text-[20px] text-center mb-[40px]">희망직업을 작성해주세요</p>
                <div className="flex flex-col gap-[10px] mb-[24px]">
                    <input type="text" placeholder="예. UI/UX 디자이너" className="w-full px-[20px] py-[17px] rounded-[8px] border border-[#CCC] bg-[#F0F0F0]"></input>
                </div>
                <div className="flex gap-[12px]">
                    <button className="py-[17px] rounded-[8px] bg-[#EEE] font-medium text-[#555] text-[19px] w-full">뒤로가기</button>
                    <button className="py-[17px] rounded-[8px] bg-[#276FE2] font-medium text-white text-[19px] w-full">다음</button>
                </div>
            </form>
        </div>
    )
}