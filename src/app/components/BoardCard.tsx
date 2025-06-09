import Image from "next/image"

interface BaordProps {
  title: string,
  date: string,
  category: string,
  imgUrl: string
}

export default function BoardCard(board: BaordProps) {
    return (
        <div className="flex flex-col gap-[18px]">
            <div className="w-[180px] h-[146px] relative overflow-hidden">
                <Image
                    src={board.imgUrl}
                    alt="게시글 이미지"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-[6px] border border-[#DADADA]"
                />
            </div>
            <div>
                <div className="flex gap-[15px] mb-[13px] items-center">
                    <span className="font-medium text-[#888] text-[17px]">{board.category}</span>
                    <span className="text-[#999] text-[15px]">{board.date}</span>
                </div>
                <p className="font-medium text-[20px] line-clamp-2">{board.title}</p>
            </div>
        </div>
    )
}