export default function ChatBox() {
    return (
        <div className="h-[630px] overflow-auto flex flex-col bg-[#F5F6F8] px-[5%] py-[10px]">
            <div>
                <span className="inline-flex bg-white px-[30px] py-[15px] rounded-b-[16px] rounded-r-[16px]">안녕하세요.</span>
            </div>
            <div className="flex justify-end">
                <span className="inline-flex bg-[#3C98E9] text-white px-[30px] py-[15px] rounded-b-[16px] rounded-l-[16px]">안녕하세요.</span>
            </div>
        </div>
    )
}