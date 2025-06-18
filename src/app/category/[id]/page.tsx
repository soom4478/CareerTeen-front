"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";

import { recommendedMento, categoryList } from "../../data/categories";

export default function Page() {
    const router = useRouter();

    const params = useParams();
    const selectedCategory = params.id;
    
    const data = categoryList.find(item => item.key === selectedCategory);

    return (
        <div>
            <div className="w-[90%] mx-auto flex flex-col gap-[15px]">
                <p className="font-paperlogy font-medium text-[24px] mt-[35px] mb-[20px]">추천 멘토</p>
                <div className="relative flex magin gap-[15px]">
                    <Image
                        src="/images/example.png"
                        alt="예시"
                        width={210}
                        height={270}
                        className="rounded-[8px]" />
                    <p className="w-[50%] absolute bottom-[23px] left-[18px] text-white font-medium text-[22px] leading-[130%]">{recommendedMento.Greetings}</p>
                    <div className="mentoImpo-card px-[18px] py-[19px]">
                        <p className="font-preendard font-semibold leading-[135%] text-[15px] text-[#276FE2] mb-[19px]">인적사항</p>
                        <div className="flex items-center gap-[6px] mb-[11px]">
                            <p className="font-preendard font-semibold text-[18px]">{recommendedMento.info.name}</p>
                            <p className="font-preendard font-medium leading-[130%] text-[14px] text-[#7C7C7C]">{recommendedMento.info.age}</p>
                        </div>
                        <p className="font-preendard font-medium text-[#333] text-[14px]">{recommendedMento.info.job}</p>
                        <div className="absolute bottom-[18px] inline-flex flex-col items-start gap-[2px] font-preendard text-[13px] text-[#8D8D8D]">
                            {
                                recommendedMento.info.tag.map((tag, idx) => {
                                    return(
                                        <p key={idx}>#{tag}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="mentoImpo-card p-[20px]">
                    <p className="font-preendard font-semibold text-[15px] text-[#276FE2] mb-[24px]">경력</p>
                    <div className="flex flex-col gap-[8px]">
                        {
                            recommendedMento.personalHistory.map((history, idx) => {
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
                    <p className="text-[#333] font-preendard text-[16px] leading-[150%]">{recommendedMento.introduction}</p>
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
                            data?.mentoData.map((info, idx) => {
                                if(idx < 2) {
                                    return(
                                        <div
                                            className="group mento-card relative flex"
                                            key={idx}>
                                            <div className="card-shadow" />
                                            <div className="text-center text-[#FFF] absolute bottom-[16px] right-[50%] translate-x-[50%]">
                                                <p className="font-preendard font-semibold text-[18px]">{info.name}</p>
                                                <p className="text-[15px]">{info.info}</p>
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
                            data?.mentoData.map((info, idx) => {
                                if(idx >= 2) {
                                    return(
                                        <div
                                            className="group mento-card relative flex"
                                            key={idx}>
                                            <div className="card-shadow" />
                                            <div className="text-center text-[#FFF] absolute bottom-[16px] right-[50%] translate-x-[50%]">
                                                <p className="font-preendard font-semibold text-[18px]">{info.name}</p>
                                                <p className="text-[15px]">{info.info}</p>
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
                        <p className="font-preendard font-semibold text-[24px] mb-[6px]">{data?.imfos[0].title}</p>
                        <p className="font-preendard font-medium text-[#999] text-[16px]">{data?.imfos[0].explanation}</p>
                    </div>
                    {
                        data?.imfos.map((impo, idx) => {
                            if(idx > 0) {
                                return(
                                    <div
                                        key={idx}>
                                        <div>
                                            <div className="h-[137px] rounded-[6px] mb-[18px] bg-slate-500" />
                                            <p className="font-preendard font-semibold text-[24px] mb-[6px]">{impo.title}</p>
                                            <p className="font-preendard font-medium text-[#999] text-[16px]">{impo.explanation}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}