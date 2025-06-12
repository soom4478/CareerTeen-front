'use client';

import React from "react";
import Image from "next/image";

type CategoryDropdownProps = {
	categories: string[];
	selectedCategory: string;
	onSelect: (category: string) => void;  // 선택 시 콜백
	onRemove: (category: string) => void;  // 선택 해제 콜백
	defaultLabel?: string;
};

export default function CategoryDropdown({
	categories,
	selectedCategory,
	onSelect,
	onRemove,
	defaultLabel = '카테고리',
}: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = (item: string) => {
        if (selectedCategory !== item) {
        onSelect(item);
    }
    setIsOpen(false);
    };

  return (
    <div className="relative inline-flex items-center space-x-4">
        <div className="relative">
            <div onClick={() => setIsOpen(!isOpen)} className="boardDetailBox cursor-pointer flex items-center justify-center gap-[12px]">
            {defaultLabel}
            <Image
                src="/images/downArrow.png"
                alt="화살표"
                width={12}
                height={6} />
            </div>

            {/* 메뉴 */}
            {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
                {categories.map((category) => (
                <div
                    key={category}
                    onClick={() => selectedCategory !== category && handleSelect(category)}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                        selectedCategory === category ? 'text-gray-400 cursor-not-allowed' : ''
                    }`}
                >
                    {category}
                </div>
                ))}
            </div>
            )}
        </div>

        {/* 선택된 카테고리 */}
        {selectedCategory && (
            <div className="flex flex-wrap gap-2">
                <span className="boardDetailBox flex items-center">
                    <span>{selectedCategory}</span>
                    <button
                        type="button"
                        onClick={() => onRemove(selectedCategory)}
                        className="ml-2 font-bold focus:outline-none"
                        aria-label={`Remove ${selectedCategory}`}
                    >
                        <Image
                        src="/images/x.png"
                        alt="삭제"
                        width={12}
                        height={12}
                        />
                    </button>
                </span>
            </div>
        )}

    </div>
  );
}

