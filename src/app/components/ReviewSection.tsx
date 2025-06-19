"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ReviewSectionProps {
  data: { text: string; info: string }[];
  reviewImg: string[];
}

export default function ReviewSection({ data, reviewImg }: ReviewSectionProps) {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const CARD_WIDTH = 330;
  const visibleCount1 = data.slice(0, 2);
  const visibleCount2 = data.slice(2);

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex1((prev) => (prev + 1) % visibleCount1.length);
      setIndex2((prev) => (prev + 1) % visibleCount2.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [visibleCount1.length, visibleCount2.length]);

  // 별도의 useEffect로 스크롤 처리
  useEffect(() => {
    const container1 = scrollRef1.current;
    if (container1 && visibleCount1.length > 1) {
      container1.scrollTo({
        left: index1 * CARD_WIDTH,
        behavior: "smooth",
      });
    }
  }, [index1]);

  useEffect(() => {
    const container2 = scrollRef2.current;
    if (container2 && visibleCount2.length > 1) {
      container2.scrollTo({
        left: index2 * CARD_WIDTH,
        behavior: "smooth",
      });
    }
  }, [index2]);

  return (
    <div className="bg-[#E0E6F2] flex flex-col mb-[98px]">
      <span className="font-paperlogy font-medium text-[24px] mt-[100px] mx-auto mb-[46px]">
        커리어틴을 사용한 선배들의 후기
      </span>

      <div
        ref={scrollRef1}
        className="flex overflow-hidden mb-[46px] px-[24px] scroll-smooth"
      >
        {visibleCount1.map((review, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[330px] mr-[15px] bg-white rounded-[12px] p-[32px] relative min-h-[200px]"
          >
            <div className="pr-[140px]">
              <p className="font-pretendard font-semibold text-[18px] whitespace-normal mb-[20px] w-[200px]">
                {review.text}
              </p>
              <p className="text-[12px] text-[#888] absolute bottom-[32px] left-[32px] z-10">
                {review.info}
              </p>
            </div>
            <Image
              src={reviewImg[idx]}
              alt="후기 캐릭터 이미지"
              width={124}
              height={144}
              className="w-[124px] h-[144px] object-cover absolute bottom-[19px] right-[14px]"
            />
          </div>
        ))}
      </div>

      <div
        ref={scrollRef2}
        className="flex overflow-hidden mb-[46px] px-[24px] scroll-smooth"
      >
        {visibleCount2.map((review, idx) => (
          <div
            key={idx + 2}
            className="flex-shrink-0 w-[330px] mr-[15px] bg-white rounded-[12px] p-[32px] relative min-h-[200px]"
          >
            <div className="pr-[140px]">
              <p className="font-pretendard font-semibold text-[18px] mb-[20px] w-[200px]">
                {review.text}
              </p>
              <p className="text-[12px] text-[#888] absolute bottom-[32px] left-[32px] z-10">
                {review.info}
              </p>
            </div>
            <Image
              src={reviewImg[idx + 2]}
              alt="후기 캐릭터 이미지"
              width={124}
              height={144}
              className="w-[124px] h-[144px] object-cover absolute bottom-[19px] right-[14px] z-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}