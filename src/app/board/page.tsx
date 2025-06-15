'use client';

import React, { useState } from "react";
import CategoryDropdown from "../components/CategoryDropdown";
import { boardList } from "../data/boards";
import BoardCard from "../components/BoardCard";
import Link from "next/link";

export default function Page() {
    const [selected, setSelected] = React.useState<'최신순' | '인기순'>('최신순');

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
        <div className="mt-[65px]">
            <div className="px-[5%]">
                <p className="font-semibold text-[28px]">이런 글들은 어떤가요?</p>
                <p className="font-medium text-[16px] text-[#999]">커리어틴이 당신의 관심있을만한 글을 찾았어요</p>
            </div>
            <div className="horizontalScroll gap-[12px] flex overflow-auto px-[5%] mt-[33px]">
            {
                boardList.map((board, idx) => (
                <Link href={`/board/${board.id}`} key={idx}>
                    <div className="bg-[linear-gradient(180deg,rgba(19,19,19,0)_0%,rgba(19,19,19,0.6)_100%),url('/images/boardExImg.png')] bg-cover bg-center w-[319px] h-[187px] flex items-end rounded-[12px] px-[26px] py-[18px]">
                    <p className="text-white text-[22px] font-semibold line-clamp-1">{board.title}</p>
                    </div>
                </Link>
                ))
            }   
            </div>
            <div className="px-[5%] mt-[58px]">
                <div className="flex px-[15px] py-[20px] rounded-[6px] bg-[#4F4F4F] font-semibold justify-between">
                    <span className="text-[16px] text-white">다른 사용자들과 정보를 공유해보세요</span>
                    <a href="/board/create" className="text-[15px] text-[#A0D3FF]">게시글 작성하기</a>
                </div>
                <div className="flex mt-[76px]">
                    <CategoryDropdown
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onSelect={handleSelect}
                        onRemove={handleRemove}
                        defaultLabel="카테고리"
                    />
                </div>
                <div className="flex gap-[8px] mt-[17px]">
                    <div
                        onClick={() => setSelected('최신순')}
                        className={`boardDetailBox cursor-pointer ${
                        selected === '최신순' ? 'bg-[#E7E7E7]' : null
                        }`}
                    >
                        최신순
                    </div>
                    <div
                        onClick={() => setSelected('인기순')}
                        className={`boardDetailBox cursor-pointer ${
                        selected === '인기순' ? 'bg-[#E7E7E7]' : null
                        }`}
                    >
                        인기순
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-[20px] gap-y-[65px] mt-[65px] mb-[209px]">
                {
                    boardList.map((board, idx) => (
                    <Link href={`/board/${board.id}`} key={idx}>
                        <BoardCard
                        title={board.title}
                        category={board.category}
                        date={board.date}
                        imgUrl={board.imgUrl}
                        />
                    </Link>
                    ))
                }
                </div>
            </div>
        </div>
    )
}