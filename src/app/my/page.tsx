"use client";

import Image from "next/image";
import MyContentBox from "../components/MyContentBox";
import MyMentoBox from "../components/MyMentoBox";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function() {
    const router = useRouter();

    const modifyButtonClick = () => {
        router.push('/my/modify');
    }

    const [selectedBoard, setBoard] = useState(Number);

    const myClub = [
        {
            name: "LG TWINS 팬들 모여라~",
            date: "2025.03.11"
        },
        {
            name: "독서토론 모임",
            date: "2025.04.25"
        },
    ]

    const myBoard = [
        {
            id: 1,
            title: "좋은 포트폴리오",
            date: "2025.04.25"
        }
    ]

    const myMento = [
        {
            imgUrl: "data:image/jpeg;base64,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",
            name: "강지민",
            job: "인사팀",
            age: 27
        },
        {
            imgUrl: "data:image/jpeg;base64,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",
            name: "ㅇㅇㅇ",
            job: "디자이너",
            age: 30
        },
    ]

    return (
        <div className="mt-[38px] mx-[5%] mb-[110px]">
            <div className="bg-[#F5F6F8] px-[20px] pt-[18px] pb-[20px]">
                <div className="flex justify-end">
                    <button onClick={modifyButtonClick} className="border border-[#CCC] bg-white rounded-[33px] px-[15px] py-[10px] text-[#555] text-[16px] mb-[15px]">프로필 수정</button>
                </div>
                <div className="flex gap-[19px]">
                    <div className="w-[100px] h-[100px] relative overflow-hidden">
                        <Image
                        src="/images/example.png"
                        alt="프로필 이미지"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-[50%]" />
                    </div>
                    <div className="flex flex-col justify-center gap-[23px]">
                        <p className="font-medium text-[18px]">"에이전시 취업을 목표로"</p>
                        <p className="text-[14px]">이자연  |  20세  | UIUX디자이너</p>
                    </div>
                </div>
            </div>
            <div className="mt-[62px] flex flex-col gap-[24px]">
                <p className="font-semibold text-[21px]">자기소개</p>
                <p className="font-light text-[17px] leading-[160%] text-[#454545]">안녕하세요. 고등학교에서 디자인을 전공하고 UI/UX 디자이너로서 첫걸음을 내딛는 예비 디자이너입니다. 아직 경력은 없지만, 사용자 경험에 대한 고민과 디자인 툴에 대한 꾸준한 학습으로 실력을 키워가고 있습니다. 관찰력과 문제 해결력, 그리고 빠르게 배우는 태도를 강점으로 삼고 있으며, 실무 속에서 더 크게 성장하고 싶습니다. 사용자에게 꼭 필요한 경험을 디자인하는 디자이너로 자리 잡는 것이 저의 목표입니다.</p>
            </div>
            <div className="mt-[76px] flex flex-col gap-[24px]">
                <p className="font-semibold text-[21px]">나의 모임</p>
                {
                    myClub.map((club, idx) => (
                        <MyContentBox title={club.name} date={club.date} key={idx} />
                    ))
                }
            </div>
            <div className="mt-[79px] flex flex-col gap-[24px]">
                <div className="flex justify-between">
                    <p className="font-semibold text-[21px]">작성한 글</p>
                    <div className="flex gap-[10px] text-[17px] text-[#555]">
                        <button className="px-[16px] py-[9.5px] border border-[#CCC] bg-[#EEE] rounded-[50px]">수정하기</button>
                        <button className="px-[16px] py-[9.5px] border border-[#CCC] rounded-[50px]">삭제하기</button>
                    </div>
                </div>
                {
                    myBoard.map((board, idx) => (
                        <MyContentBox
                            title={board.title}
                            date={board.date}
                            key={idx}
                            // 컴포넌트 변경 및 호버 추가
                            onClick={() => setBoard(board.id)}
                            className={`boardDetailBox cursor-pointer ${
                            board.id === selectedBoard ? 'bg-[#E7E7E7]' : null
                            }`} />
                    ))
                }
            </div>
            <div className="mt-[85px] px-[21px] pt-[26px] pb-[33px] border border-[#CCC] rounded-[10px]">
                <p className="mb-[31px] ml-[7px] font-medium text-[22px]">멘토</p>
                <div className="flex flex-col gap-[24px]">
                    {
                        myMento.map((mento, idx) => (
                            <MyMentoBox
                                imgUrl={mento.imgUrl}
                                name={mento.name}
                                job={mento.job}
                                age={mento.age}
                                key={idx} />
                        ))
                    }
                </div>
                <div className="flex gap-[10px] mt-[40px] items-end justify-end">
                    <button className="button1">해지하기</button>
                    <button className="button2">채팅하기</button>
                </div>
            </div>
        </div>
    )
}