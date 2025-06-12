interface boardProps {
    title: string;
    date: string;
}

export default function MyBoard(content: boardProps) {
    return (
        <div className="bg-[#F5F5F5] rounded-[8px] px-[18px] py-[20px] flex justify-between items-center">
            <span className="font-medium text-[18px] text-[#222]">{content.title}</span>
            <div className="text-[14px]">
                <span className="text-[#888] mr-[7px]">가입날짜</span>
                <span className="text-[#555]">{content.date}</span>
            </div>
        </div>
    )
}