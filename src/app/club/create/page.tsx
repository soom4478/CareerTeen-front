"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Page() {
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDivClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
        }
    };

    return (
        <form className="mx-[5%] mt-[27px] overflow-hidden">
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleImageChange}
            />

            <div
                className="relative flex bg-[#F5F5F5] rounded-[6px] h-[219px] justify-center items-center cursor-pointer overflow-hidden"
                onClick={handleDivClick}>
                {preview ? (
                    <Image
                    src={preview}
                    alt="업로드된 이미지"
                    fill
                    className="object-cover"
                    unoptimized
                    />
                ) : (
                    <div className="flex flex-col gap-[20px] justify-center items-center z-10">
                    <Image
                        src="/images/imgAddIcon.png"
                        alt="이미지 추가 아이콘"
                        width={30}
                        height={30}
                    />
                    <p className="text-[20px] text-[#999]">사진을 추가해주세요</p>
                    </div>
                )}
            </div>

            <div>
                <p className="font-medium text-[24px] mt-[49px] mb-[21px]">모임 정보</p>
                <div className="py-[28px] rounded-[10px] border border-[#CCC]">
                    <div className="mx-[26px] flex flex-col gap-[18px] mb-[37px]">
                        <div className="flex">
                            <div>카테고리 추가</div>
                        </div>
                        <input
                            type="text"
                            placeholder="모임 이름을 작성해주세요"
                            className="px-[15px] py-[13px] rounded-[10px] border border-[#CCC] bg-[#F5F5F5] text-[27px] font-semibold placeholder:text-black" />
                    </div>
                    <hr className="mx-[13px] mb-[23px]" />
                    <div className="mx-[26px] flex flex-col gap-[12px] mb-[30px]">
                        <p className="clubInputTitle">호스트</p>
                        <input
                            type="text"
                            placeholder="이름을 작성해주세요"
                            className="clubInputBox" />
                    </div>
                    <div className="mx-[26px] flex gap-[18px]">
                        <div className="w-1/2 flex flex-col gap-[12px]">
                            <p className="clubInputTitle">장소</p>
                            <input
                                type="text"
                                placeholder="예. 광진구"
                                className="w-full clubInputBox" />
                        </div>
                        <div className="w-1/2 flex flex-col gap-[12px]">
                            <p className="clubInputTitle">최대 인원</p>
                            <input
                                type="text"
                                placeholder="예. 15"
                                className="w-full clubInputBox" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <p className="font-medium text-[24px] mt-[49px] mb-[21px]">모임 소개</p>
                <textarea
                    placeholder="내용을 작성해주세요"
                    className="w-full h-[382px] border border-[#CCC] rounded-[10px] px-[26px] py-[28px]"
                ></textarea>
            </div>
            <div className="flex justify-end gap-[10px] mt-[57px] mb-[154px]">
                <button type="button" className="button1">취소하기</button>
                <button type="submit" className="button2">생성하기</button>
            </div>
        </form>
    );
}
