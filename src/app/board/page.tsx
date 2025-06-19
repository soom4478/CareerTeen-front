'use client';

import React, { useState, useEffect } from "react";
import CategoryDropdown from "../components/CategoryDropdown";
import { boardList } from "../data/boards";
import BoardCard from "../components/BoardCard";
import Link from "next/link";

interface ApiBoardItem {
    id: number;
    category: string;
    title: string;
    text: string;
    img: string;
    createdAt: string;
    view: number;
}

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
};

export default function Page() {
    const [selected, setSelected] = useState<'최신순' | '인기순'>('최신순');
    const [recommendedBoards, setRecommendedBoards] = useState<ApiBoardItem[]>([]);
    const [latestBoards, setLatestBoards] = useState<ApiBoardItem[]>([]);
    const [popularBoards, setPopularBoards] = useState<ApiBoardItem[]>([]);
    const [categoryBoards, setCategoryBoards] = useState<ApiBoardItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const categories = ['시험·자격증', '혜택', '취업', '회사', '진로·미래'];
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const handleSelect = (category: string) => {
        if (selectedCategory !== category) {
            setSelectedCategory(category);
            fetchBoards(`category?category=${category}`, false, true);
        }
    };

    const handleRemove = () => {
        setSelectedCategory("");
    };

    const fetchBoards = async (endpoint: string, isForSlider = false, isCategory = false) => {
        try {
            if (!isForSlider) setLoading(true);
            const token = localStorage.getItem('token');

            if (!token) {
                setError('토큰이 없습니다. 로그인이 필요합니다.');
                return;
            }

            const response = await fetch(`https://port-0-career-teen-backend-mc1vuqgt979868f3.sel5.cloudtype.app/bulletins/${endpoint}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (isForSlider) {
                setRecommendedBoards(data);
            } else if (isCategory) {
                setCategoryBoards(data);
            } else {
                if (endpoint === 'latest') {
                    setLatestBoards(data);
                } else if (endpoint === 'recommended') {
                    setPopularBoards(data);
                }
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : '데이터를 불러오는데 실패했습니다.');
            console.error('API 호출 에러:', err);
        } finally {
            if (!isForSlider) setLoading(false);
        }
    };

    useEffect(() => {
        fetchBoards('recommended', true);
        fetchBoards('latest');
    }, []);

    const handleSortChange = (sortType: '최신순' | '인기순') => {
        setSelected(sortType);
        setSelectedCategory("");

        if (sortType === '최신순') {
            fetchBoards('latest');
        } else {
            fetchBoards('recommended');
        }
    };

    const getDisplayBoards = () => {
        if (selectedCategory) {
            return categoryBoards;
        }
        return selected === '최신순' ? latestBoards : popularBoards;
    };

    return (
        <div className="mt-[65px]">
            <div className="px-[5%]">
                <p className="font-semibold text-[28px]">이런 글들은 어떤가요?</p>
                <p className="font-medium text-[16px] text-[#999]">커리어틴이 당신의 관심있을만한 글을 찾았어요</p>
            </div>
            <div className="horizontalScroll gap-[12px] flex overflow-auto px-[5%] mt-[33px]">
                {loading ? (
                    <div className="flex items-center justify-center w-full h-[187px]">
                        <p className="text-[#999]">로딩 중...</p>
                    </div>
                ) : error ? (
                    <div className="flex items-center justify-center w-full h-[187px]">
                        <p className="text-red-500">{error}</p>
                    </div>
                ) : (
                    recommendedBoards.map((board, idx) => (
                        <Link href={`/board/${board.id}`} key={idx}>
                            <div
                                className="bg-cover bg-center w-[319px] h-[187px] flex items-end rounded-[12px] px-[26px] py-[18px]"
                                style={{
                                    background: `linear-gradient(180deg, rgba(19,19,19,0) 0%, rgba(19,19,19,0.6) 100%), url('${board.img.startsWith('http') ? board.img : '/images/boardExImg.png'}') center/cover`
                                }}
                            >
                                <p className="text-white text-[22px] font-semibold line-clamp-1">{board.title}</p>
                            </div>
                        </Link>
                    ))
                )}
            </div>
            <div className="px-[5%] mt-[58px]">
                <div className="flex px-[15px] py-[20px] rounded-[6px] bg-[#4F4F4F] font-semibold justify-between">
                    <span className="text-[15px] text-white">다른 사용자들과 정보를 공유해보세요</span>
                    <a href="/board/create" className="text-[14px] text-[#A0D3FF]">게시글 작성하기</a>
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
                        onClick={() => handleSortChange('최신순')}
                        className={`boardDetailBox cursor-pointer ${selected === '최신순' ? 'bg-[#E7E7E7]' : ''}`}
                    >
                        최신순
                    </div>
                    <div
                        onClick={() => handleSortChange('인기순')}
                        className={`boardDetailBox cursor-pointer ${selected === '인기순' ? 'bg-[#E7E7E7]' : ''}`}
                    >
                        인기순
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-[20px] gap-y-[65px] mt-[65px] mb-[209px]">
                    {getDisplayBoards().map((board, idx) => (
                        <Link href={`/board/${board.id}`} key={idx}>
                            <BoardCard
                                title={board.title}
                                category={board.category}
                                date={formatDate(board.createdAt)}
                                imgUrl={board.img.startsWith('http') ? board.img : '/images/boardExImg.png'}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
