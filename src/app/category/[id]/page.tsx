"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const router = useRouter();

    const params = useParams();
    const selectedCategory = params.id;
    
    const categories = ['office', 'it', 'design', 'food', 'marketing'];

    const personalHistory = [
        {
            date: "2017.08",
            name: "7급 공무원 준비 시작",
        },
        {
            date: "2017.08",
            name: "7급 공무원 준비 시작",
        },
        {
            date: "2017.08",
            name: "7급 공무원 준비 시작",
        },
    ]

    const introduction = "인사 전문가로서 고졸 취업 준비생 여러분께 실질적인 취업 조언을 드리겠습니다. 저의 경험을 바탕으로 효과적인 취업 전략과 면접 준비 방법을 알려드리며, 현재의 직장에 입사하게 된 과정을 상세히 공유해드리겠습니다.";

    const impo = [
        {
            title: "사무실 빌런 유형 / 대처방법",
            detail: "어느 사무실에나 존재하는 빌런. 더 이상 피할 수 없을 때, 현명하게 대처하는 방법을 알아보자.",
        },
        {
            title: "사무실 빌런 유형 / 대처방법",
            detail: "어느 사무실에나 존재하는 빌런. 더 이상 피할 수 없을 때, 현명하게 대처하는 방법을 알아보자.",
        },
        {
            title: "사무실 빌런 유형 / 대처방법",
            detail: "어느 사무실에나 존재하는 빌런. 더 이상 피할 수 없을 때, 현명하게 대처하는 방법을 알아보자.",
        },
        {
            title: "사무실 빌런 유형 / 대처방법",
            detail: "어느 사무실에나 존재하는 빌런. 더 이상 피할 수 없을 때, 현명하게 대처하는 방법을 알아보자.",
        }
    ]

    const mentoData = [
        {
            name: "김주윤",
            impo: "4년차 | 회계사무원",
        },
        {
            name: "김주윤",
            impo: "4년차 | 회계사무원",
        },
        {
            name: "김주윤",
            impo: "4년차 | 회계사무원",
        },
        {
            name: "김주윤",
            impo: "4년차 | 회계사무원",
        },
        {
            name: "김주윤",
            impo: "4년차 | 회계사무원",
        },
    ]

    return (
        <div>
            <div className="w-[90%] mx-auto flex flex-col gap-[15px]">
                <p className="font-paperlogy font-medium text-[24px] mt-[35px] mb-[20px]">추천 멘토</p>
                <div className="relative flex magin gap-[15px]">
                    <Image
                        src="/images/example.png"
                        alt="예시"
                        width={225}
                        height={0}
                        style={{ height: "auto" }}
                        className="rounded-[8px]" />
                    <p className="absolute bottom-[23px] left-[18px] text-white font-medium text-[22px] leading-[130%]">"A부터 Z까지<br/>도와드립니다"</p>
                    <div className="mentoImpo-card px-[18px] py-[19px]">
                        <p className="font-preendard font-semibold leading-[135%] text-[15px] text-[#276FE2] mb-[19px]">인적사항</p>
                        <div className="flex items-center gap-[6px] mb-[11px]">
                            <p className="font-preendard font-semibold text-[20px]">강지우</p>
                            <p className="font-preendard font-medium leading-[130%] text-[16px] text-[#7C7C7C]">24세</p>
                        </div>
                        <p className="font-preendard font-medium text-[#333] text-[16px]">콘텐츠 마케터</p>
                        <div className="absolute bottom-[18px] inline-flex flex-col items-start gap-[2px] font-preendard text-[13px] text-[#8D8D8D]">
                            <p>#ESFJ</p>
                            <p>#겉바속촉</p>
                            <p>#하나부터 열까지</p>
                        </div>
                    </div>
                </div>
                <div className="mentoImpo-card p-[20px]">
                    <p className="font-preendard font-semibold text-[15px] text-[#276FE2] mb-[24px]">경력</p>
                    <div className="flex flex-col gap-[8px]">
                        {
                            personalHistory.map((history, idx) => {
                                return(
                                    <div
                                        key={idx}
                                        className="flex gap-[9.8px] items-center font-preendard text-[16px]" >
                                        <span className="font-medium">{history.date}</span>
                                        <span className="text-[#333]">{history.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="mentoImpo-card p-[20px]">
                    <p className="font-preendard font-semibold text-[15px] text-[#276FE2] mb-[24px]">소개말</p>
                    <p className="text-[#333] font-preendard text-[16px] leading-[150%]">{introduction}</p>
                </div>
            </div>
            <div className="flex justify-end mb-[151px]">
                <button className="mentoButton mt-[20px] mr-[5%] px-[30px] py-[13px] text-white font-preendard font-medium text-[18px]">멘토 신청하기</button>
            </div>
            <div className="bg-[#F5F6FA] pt-[65px] pb-[47px] mb-[117px]">
                <div className="flex flex-col gap-[8px] mx-[24px]">
                    <p className="font-preendard font-medium text-[20px] text-[#666]">멘토 둘러보기</p>
                    <span className="font-paperlogy font-medium text-[34px] leading-[130%] mb-[65px]">MENTO of<br/>CAREER TEEN</span>
                </div>
                <div className="horizontalScroll mb-[46px]">
                    <div className="inline-flex gap-[12px] px-[24px]">
                        {
                            mentoData.map((impo, idx) => {
                                if(idx < 2) {
                                    return(
                                        <div
                                            className="group mento-card relative flex"
                                            key={idx}>
                                            <div className="card-shadow" />
                                            <div className="text-center text-[#FFF] absolute bottom-[16px] right-[50%] translate-x-[50%]">
                                                <p className="font-preendard font-semibold text-[18px]">김주윤</p>
                                                <p className="text-[15px]"></p>
                                                <button className="mt-[10px] hidden group-hover:block mx-auto px-[18px] py-[12px] rounded-[5px] bg-[#3C98E9] font-preendard font-medium text-[14px] text-white">멘토 신청하기</button>
                                            </div>
                                        </div>
                                    )
                                }                                
                            })
                        }
                        <div className="w-[199px] h-[161px] bg-[#84A8FC] rounded-[8px]"></div>
                    </div>
                </div>
                <div className="horizontalScroll">
                    <div className="inline-flex gap-[12px] px-[24px]">
                        <div className="w-[199px] h-[161px] bg-[#2F4F82] rounded-[8px]"></div>
                        {
                            mentoData.map((impo, idx) => {
                                if(idx >= 2) {
                                    return(
                                        <div
                                            className="group mento-card relative flex"
                                            key={idx}>
                                            <div className="card-shadow" />
                                            <div className="text-center text-[#FFF] absolute bottom-[16px] right-[50%] translate-x-[50%]">
                                                <p className="font-preendard font-semibold text-[18px]">김주윤</p>
                                                <p className="text-[15px]"></p>
                                                <button className="mt-[10px] hidden group-hover:block mx-auto px-[18px] py-[12px] rounded-[5px] bg-[#3C98E9] font-preendard font-medium text-[14px] text-white">멘토 신청하기</button>
                                            </div>
                                        </div>
                                    )
                                }                                
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="w-[90%] mx-auto mb-[157px]">
                <div className="flex flex-col items-center gap-[28px] mb-[71px]">
                    <Image
                        src="/images/careerteenLogo3.png"
                        alt="커리어틴"
                        width={95}
                        height={0}
                        style={{ height: "auto" }} />
                    <span className="self-stretch font-preendard font-semibold text-[34px] text-center">당신에게 필요한<br/>정보들을 모았어요</span>
                </div>
                <div className="flex flex-col gap-[55px]">
                    <div>
                        <div className="h-[436px] rounded-[6px] mb-[18px] bg-slate-500" />
                        <p className="font-preendard font-semibold text-[24px] mb-[6px]">리서치 방법</p>
                        <p className="font-preendard font-medium text-[#999] text-[16px]">지식인과 나무위키는 이제 그만... 진짜 실무에서 사용하는 리서치 방법 소개.</p>
                    </div>
                    {
                        impo.map((impo, idx) => {
                            return(
                                <div
                                    key={idx}>
                                    <div>
                                        <div className="h-[137px] rounded-[6px] mb-[18px] bg-slate-500" />
                                        <p className="font-preendard font-semibold text-[24px] mb-[6px]">{impo.title}</p>
                                        <p className="font-preendard font-medium text-[#999] text-[16px]">{impo.detail}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}