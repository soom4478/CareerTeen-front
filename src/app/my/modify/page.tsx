"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import CustomMonthPicker from "@/app/components/MonthPicker";

export default function Page() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewImage, setPreviewImage] = useState("/images/example.png");

    const userData = {
        id: 1,
        one: "항상 열심히",
        name: "soom",
        age: 19,
        job: "프론트 개발자",
        intro: "열정을 가지고 해나가는",
        history: "",
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click(); // 숨겨진 input 클릭
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
        const imageUrl = URL.createObjectURL(file);
        setPreviewImage(imageUrl);
        }
    };

    return (
        <form className="px-[5%] mt-[39px]">
        <div className="flex flex-col items-center mb-[92px]">
            <Image
                src={previewImage}
                alt="댓글 프로필"
                width={130}
                height={130}
                className="rounded-full w-[130px] h-[130px] object-cover mb-[20px]"/>
            <button
                type="button"
                onClick={handleUploadClick}
                className="px-[18px] py-[12px] border border-[#999] rounded-[8px] font-medium text-[#666] text-[16px]">
                프로필 사진 변경
            </button>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleImageChange}/>
        </div>

        <div className="mb-[61px] flex flex-col gap-[19px]">
            <p className="font-medium text-[20px]">목표 한마디</p>
            <input type="text" placeholder="목표 한마디 작성해주세요" className="myInputBox w-full" />
        </div>
        <div className="mb-[24px] flex flex-col gap-[19px]">
            <p className="font-medium text-[20px]">이름</p>
            <input type="text" placeholder="이름을 작성해주세요" className="myInputBox w-full" />
        </div>

        <div className="mb-[24px] flex flex-col gap-[19px]">
            <label htmlFor="age" className="font-medium text-[20px]">
                나이
            </label>

            <div className="relative w-[220px]">
                <select
                    id="age"
                    name="age"
                    className="myInputBox w-full appearance-none pr-10"
                    defaultValue="">
                    <option value="" disabled hidden>
                        나이를 선택해주세요
                    </option>
                    {[...Array(100)].map((_, i) => {
                        const age = 1 + i;
                        return (
                        <option key={age} value={age}>
                            {age}세
                        </option>
                        );
                    })}
                </select>

                <svg
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>

        <div className="mb-[62px] flex flex-col gap-[19px]">
            <p className="font-medium text-[20px]">희망직업</p>
            <input type="text" placeholder="목표 한마디 작성해주세요" className="myInputBox w-full" />
        </div>
        <div className="mb-[62px] flex flex-col gap-[19px]">
            <p className="font-medium text-[20px]">자기소개</p>
            <textarea placeholder="자기소개" className="myInputBox text-[18px]" />
        </div>
        <div className="mb-[207px] flex flex-col gap-[19px]">
            <p className="font-medium text-[20px]">경력</p>
            <div className="flex gap-[10px]">
                <CustomMonthPicker />
                <input
                    type="text"
                    placeholder="내용을 입력해주세요"
                    className="myInputBox text-[14px] w-3/5"
                />
            </div>
        </div>

        <div className="flex justify-end">
            <button type="submit" className="button2 mb-[86px]">프로필 저장</button>
        </div>
        </form>
    );
}
