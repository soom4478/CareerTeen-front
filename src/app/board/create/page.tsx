"use client";

import CategoryDropdown from "@/app/components/CategoryDropdown"
import { useRef, useState } from "react";
import Image from "next/image";

export default function Page() {

    const categories = ['시험·자격증', '혜택', '취업', '회사', '진로·미래'];
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const handleSelect = (category: string) => {
        if (selectedCategory !== category) {
            setSelectedCategory(category);
        }
    };

    const handleRemove = () => {
        setSelectedCategory("");
    };

    return (
        <form className="mt-[65px] mb-114px] pt-[66px] px-[5%] pb-[85px] bg-[#F5F6F8]">
            <p className="text-center text-[25px] font-semibold">게시판 글 작성하기</p>
            <div className="flex mt-[79px] mb-[28px]">
                <CategoryDropdown
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelect={handleSelect}
                    onRemove={handleRemove}
                    defaultLabel="카테고리"
                />
            </div>
            <input
                type="text"
                placeholder="제목을 작성해주세요."
                className="w-full px-[20px] py-[25px] rounded-[10px] border border-[#D7D7D7] text-[18px] text-[#222]"></input>
            <div className="p-[20px] bg-white rounded-[10px] border border-[#D7D7D7] mt-[16px]">
                <textarea 
                    placeholder="본문을 작성해주세요."
                    className="mb-[10px] w-full text-[16px] text-[#222]"></textarea>
                <div className="w-[226px] h-[160px] rounded-[5px] border border-[#CCC] flex justify-center items-center">
                    <Image
                        src="/images/imgAddIcon.png"
                        alt="이미지 추가"
                        width={20}
                        height={20} />
                </div>
            </div>
            <div className="flex justify-end gap-[10px] mt-[66px]">
                <button type="button" className="button1">취소하기</button>
                <button type="submit" className="button2">생성하기</button>
            </div>
        </form>
    )
}