"use client";

import InfoCardList from "../components/InfoCardList";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MainContent() {
    const router = useRouter();

    const categories = [
        { key: "office", name: "사무직", img: "/images/cate1.png" },
        { key: "it", name: "IT", img: "/images/cate2.png" },
        { key: "design", name: "디자인", img: "/images/cate3.png" },
        { key: "food", name: "요식", img: "/images/cate4.png" },
        { key: "marketing", name: "마케팅", img: "/images/cate5.png" },
    ];

    const step = [
        { category: "면접 준비 | 취업", badge: "면접", title: "면접볼 때, 꼭! 준비해야 하는\n7가지 질문" },
        { category: "정부 지원금 | 청년", badge: "혜택", title: "놓치면 안되는 청년을 위한 혜택" },
        { category: "자기소개서 작성 | 취업", badge: "자기소개서", title: "합격하는 자소서 특징" },
        { category: "컴활 | 취업", badge: "자격증", title: "컴퓨터활용능력 2급 꿀팁!" },
    ]

    const handleClick = (index: number) => {
        router.push(`category/${categories[index].key}`);
    }
    
    const data = [
        {
            text: "“커리어틴 덕분에 남들보다 빨리 취업했어요!”",
            info: "5년차 중견기업 백엔드 개발자 | 박수*"
        },
        {
            text: "“커리어틴 덕분에 남들보다 빨리 취업했어요!”",
            info: "5년차 중견기업 백엔드 개발자 | 박수*"
        },
        {
            text: "“커리어틴 덕분에 남들보다 빨리 취업했어요!”",
            info: "5년차 중견기업 백엔드 개발자 | 박수*"
        },
        {
            text: "“커리어틴 덕분에 남들보다 빨리 취업했어요!”",
            info: "5년차 중견기업 백엔드 개발자 | 박수*"
        },
    ]

    const reviewImg = ['/images/review/icon1.png', '/images/review/icon2.png', '/images/review/icon3.png', '/images/review/icon4.png'];

    return (
        <div className="font-Paperlogy font-medium overflow-auto bg-[#F5F6FA] mt-[15px]">
            <InfoCardList />
            <div className="w-[90%] mx-auto mt-[85px] rounded-[12px] bg-[#E0E6F2] px-[20px] py-[14px] flex gap-[20px]">
                {categories.map((cate, idx) => (
                <div
                    key={idx}
                    className="flex-1 text-center flex flex-col gap-[10px] font-preendard font-medium text-[#2D4C67] text-[15px]"
                    onClick={() => handleClick(idx)}
                >
                    <div className="rounded-[50%] w-[47px] h-[47px] bg-white flex items-center justify-center mx-auto">
                    <Image
                        src={cate.img}
                        alt={cate.name}
                        width={33}
                        height={0}
                        style={{ height: "auto" }}
                    />
                    </div>
                    <p>{cate.name}</p>
                </div>
                ))}
            </div>
            <div className="mt-[89px] px-[23px] py-[74px] bg-white">
                <p className="text-[34px] font-paperlogy font-medium leading-[130%] mb-[17px]">취업 하기 전<br/>가장 중요한 단계</p>
                <p className="text-[16px] text-[#888] font-preendard mb-[35px]">취업하기 전 이 내용을 확인하고 모두합격하시길 바랍니다!</p>
                <div className="flex flex-col gap-[20px]">
                {
                    step.map((item, idx) => (
                    <div
                        key={idx}
                        className="rounded-[8px] border border-[#CCC] bg-white px-[20px] py-[18px] flex flex-col relative transition-shadow duration-300 hover:shadow-[0.548px_2.193px_5.482px_0px_rgba(0,0,0,0.10)]"
                    >
                        <div className="flex items-center relative mb-[61px]">
                        <span className="text-[#888] font-preendard text-[16px]">{item.category}</span>
                        <button className="flex justify-center items-center rounded-[4px] px-[10px] py-[3px] bg-[#FD7272] text-[#FFF] font-preendard text-[16px] absolute right-0">
                            {item.badge}
                        </button>
                        </div>
                        <p className="absolute top-[75px] transform -translate-y-1/2 font-preendard text-[20px] whitespace-pre-line">
                        {item.title}
                        </p>
                    </div>
                    ))
                }
                </div>
            </div>

            <div className="bg-[#E0E6F2] flex flex-col mb-[98px]">
                <span className="font-paperlogy font-medium text-[24px] mt-[100px] mx-auto mb-[46px]">커리어틴을 사용한 선배들의 후기</span>
                <div className="horizontalScroll flex gap-[15px] mb-[46px] overflow-x-auto whitespace-nowrap px-[24px]">
                    {data?.map((review, idx) => {
                        if(idx < 2) {
                            return (
                                <div
                                    className="relative bg-white pl-[32px] pt-[36px] pb-[27px] pr-[100px] rounded-[12px]"
                                    key={idx} >
                                    <p className="font-preendard font-semibold text-[18px] w-[200px] whitespace-normal mb-[80px]">
                                        {review.text}
                                    </p>
                                    <p className="text-[12px] text-[#888]">
                                        {review.info}
                                    </p>
                                    <Image
                                        src={reviewImg[idx]}
                                        alt="후기 캐릭터 이미지"
                                        width={124}
                                        height={144}
                                        className="w-[124px] h-[144px] object-cover absolute bottom-[19px] right-[14px]"/>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="horizontalScroll flex gap-[15px] mb-[46px] overflow-x-auto whitespace-nowrap px-[24px]">
                    {data?.map((review, idx) => {
                        if(idx >= 2) {
                            return (
                                <div
                                    className="relative bg-white pl-[32px] pt-[36px] pb-[27px] pr-[100px] rounded-[12px]"
                                    key={idx} >
                                    <p className="font-preendard font-semibold text-[18px] w-[200px] whitespace-normal mb-[80px]">
                                        {review.text}
                                    </p>
                                    <p className="text-[12px] text-[#888]">
                                        {review.info}
                                    </p>
                                    <Image
                                        src={reviewImg[idx]}
                                        alt="후기 캐릭터 이미지"
                                        width={124}
                                        height={144}
                                        className="w-[124px] h-[144px] object-cover absolute bottom-[19px] right-[14px]"/>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>        
        </div>
    )
}
