import Image from "next/image";
import React from "react";

type Props = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: Props) {
    const { id } = params;

    const commentData = [
        {
            commentId: 1,
            imgUrl: "/images/example.png",
            userName: "이자연",
            boardId: 1,
            content: "좋네여",
        },
        {
            commentId: 2,
            imgUrl: "/images/example.png",
            userName: "박지영",
            boardId: 1,
            content: "좋네여",
        },
    ]

    const boardData = {
        title: "내 진로가 흔들릴 때",
        date: "2025.03.04",
        content: "안녕하세요. 오늘은 누구나 한 번쯤 겪는 고민, 진로가 흔들릴 때에 대해 이야기해보려 합니다. 요즘 들어 마음이 복잡하진 않나요? 내가 선택한 길이 맞는 걸까, 이걸 계속해도 괜찮을까, 혹시 다른 걸 선택했어야 했던 건 아닐까? 이런 생각이 머릿속을 맴돌 때가 있을 거예요. 하지만 이런 고민은 오히려 자연스러운 과정입니다. 진로에 대해 고민하고 있다는 것 자체가 성장을 위한 시작이니까요."
    }

    return (
        <div>
            <div className="px-[5%] mt-[42px]">
                <div className="bg-[#1AA462] rounded-[10px] relative w-full py-[20.5px] text-white">
                    <p className="text-center font-semibold text-[24px]">{boardData.title}</p>
                    <span className="absolute bottom-[11px] right-[18px] text-[15px]">{boardData.date}</span>
                </div>
                <div className="text-[#111] leading-[170%] text-[18px] mt-[61px]">{boardData.content}</div>
            </div>
            <div className="mt-[105px] px-[5%] pt-[38px] pb-[137px]">
                <p className="font-medium text-[20px]">댓글</p>
                <div className="mt-[24px] mb-[56px] flex gap-[10px] px-[20px] py-[25px] bg-white border border-[#CCC] rounded-[15px]">
                    <input
                        type="text"
                        placeholder="댓글을 작성해주세요"
                        className="w-full text-[18px] outline-none"></input>
                    <div className="w-[36px] h-[36px] relative overflow-hidden">
                        <Image
                            src="/images/sendImg.png"
                            alt="보내기"
                            fill
                            style={{ objectFit: "cover" }} />
                    </div>
                </div>
                <div className="flex flex-col">
                    {
                        commentData.map((comment, idx) => (
                            <React.Fragment key={idx}>
                                <div className="flex items-center gap-[12px] py-[12px]">
                                <Image
                                    src={comment.imgUrl}
                                    alt="댓글 프로필"
                                    width={46}
                                    height={46}
                                    className="rounded-full w-[46px] h-[46px] object-cover"
                                />
                                <div className="flex flex-col gap-[10px]">
                                    <p className="font-semibold text-[17px]">{comment.userName}</p>
                                    <p className="text-[17px] leading-[140%]">{comment.content}</p>
                                </div>
                                </div>

                                {idx !== commentData.length - 1 && (
                                    <hr className="border-[#D9D9D9] my-[26px]" />
                                )}
                            </React.Fragment>
                        ))
                    }  
                </div>
            </div>
        </div>
    )
}