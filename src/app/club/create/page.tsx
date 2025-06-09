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


            {/* 이하 생략된 폼 */}
            <p className="font-medium text-[24px] mt-[49px]">모임 정보</p>
            <div>
                <input type="text" placeholder="모임 이름을 작성해주세요" />
                <hr />
                <p>호스트</p>
                <input type="text" placeholder="이름을 작성해주세요" />
                <div className="flex">
                    <div>
                        <p>장소</p>
                        <input type="text" placeholder="이름을 작성해주세요" />
                    </div>
                    <div>
                        <p>최대 인원</p>
                        <input type="text" placeholder="이름을 작성해주세요" />
                    </div>
                </div>
            </div>

            <p className="font-medium text-[24px] mt-[49px]">모임 정보</p>
            <input
                type="text"
                placeholder="내용을 작성해주세요"
                className="w-full h-[382px]"
            />
            <button type="button">취소하기</button>
            <button type="submit">생성하기</button>
        </form>
    );
}
