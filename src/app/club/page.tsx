"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MediumClubCard from "../components/MediumClubCard";
import SmallClubCard from "../components/SmallClubCard";

export default function Page() {
    const router = useRouter();

    const handleCardClick = (clubId: number) => {
        router.push(`/club/${clubId}`);
    };

    const exampleData = [
        {
            id: 1,
            title: "한강 라이딩 모임",
            description:
                "일요일 저녁 한강 노을라이딩 같이 가요!🚴🏻 노을 보면서 한강 구경도 하고 사진도 찍고 여유롭게 탈 예정이라(자덕ㄴㄴ) 자린이 환영!",
            location: "광진구",
            peopleCount: 12,
            peopleMax: 15,
            imageUrl: "/images/newGroupEx.png",
            tags: ["힐링", "자전거"],
        },
        {
            id: 2,
            title: "서울 등산 모임",
            description: "주말마다 서울 근교 산을 함께 올라요! 초보자도 환영합니다.",
            location: "강남구",
            peopleCount: 8,
            peopleMax: 15,
            imageUrl: "/images/clubExample.png",
            tags: ["운동", "자연"],
        },
        {
            id: 3,
            title: "영화 감상 동아리",
            description: "최신 영화 리뷰와 감상을 나누는 모임입니다. 영화 좋아하는 분들 모두 환영!",
            location: "마포구",
            peopleCount: 5,
            peopleMax: 15,
            imageUrl: "/images/movieClub.png",
            tags: ["문화", "영화"],
        },
        {
            id: 4,
            title: "위시 감상 동아리",
            description: "위시에 대한 감상을 나누는 모임입니다. 영화 좋아하는 분들 모두 환영!",
            location: "sm",
            peopleCount: 5,
            peopleMax: 15,
            imageUrl: "/images/movieClub.png",
            tags: ["문화", "음악"],
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentClub = exampleData[currentIndex];

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        if (currentIndex < exampleData.length - 1) setCurrentIndex(currentIndex + 1);
    };

    return (
        <div>
            <div className="w-[90%] pt-[43px] mx-auto">
                <div className="flex gap-1 font-preendard font-semibold text-[24px] mb-[28px]">
                    <span className="text-[#3895E7]">NEW</span>
                    <span>새로운 그룹</span>
                </div>

                <div onClick={() => handleCardClick(currentClub.id)}>
                    <Image
                        src={currentClub.imageUrl}
                        alt="그룹"
                        width={432}
                        height={0}
                        style={{ height: "auto" }}
                        className="relative z-10"
                    />
                    <div className="rounded-[8px] bg-[#F5F6F8] pt-[70px] px-[22px] pb-[33px] -translate-y-[35px]">
                        <div className="flex gap-[6px]">
                            {currentClub.tags.map((tag, i) => (
                                <p key={i} className="tagBox1">{tag}</p>
                            ))}
                        </div>
                        <div className="flex mt-[12px] justify-between">
                            <span className="font-semibold text-[25px]">{currentClub.title}</span>
                            <div className="flex gap-[15px] items-center font-medium text-[#777]">
                                <div className="flex gap-[1px] items-center">
                                    <Image src="/images/locationIcon.png" alt="위치" width={20} height={20} className="object-contain" />
                                    {currentClub.location}
                                </div>
                                <div className="flex gap-[3px] items-center">
                                    <Image src="/images/peopleIcon.png" alt="인원" width={20} height={20} className="object-contain" />
                                    {currentClub.peopleCount}/{currentClub.peopleMax}
                                </div>
                            </div>
                        </div>
                        <p className="text-[#555] text-[16px] mt-[24px] leading-[150%]">
                            {currentClub.description}
                        </p>
                    </div>
                </div>

                <div className="flex gap-[15px] justify-center mt-[39.5px] items-center">
                    <svg
                        onClick={handlePrev}
                        className="cursor-pointer stroke-[1px] stroke-[#666] w-[9px] h-[19px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="20"
                        viewBox="0 0 11 20"
                        fill="none"
                    >
                        <path d="M10 0.5L1 10L10 19.5" stroke="#666666" />
                    </svg>
                    <span className="font-medium text-[#666] text-[17px]">
                        {currentIndex + 1}/{exampleData.length}
                    </span>
                    <svg
                        onClick={handleNext}
                        className="cursor-pointer stroke-[1px] stroke-[#666] w-[9px] h-[19px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="20"
                        viewBox="0 0 11 20"
                        fill="none"
                    >
                        <path d="M1 0.5L10 10L1 19.5" stroke="#666666" />
                    </svg>
                </div>
            </div>

            <div className="bg-[#F5F6F8] pt-[52px] pb-[105px] mb-[60px] mt-[101px]">
                <p className="font-semibold text-[26px] text-center">인기급상승 모임</p>
                <div className="horizontalScroll flex gap-[37px] overflow-auto px-[35px] mt-[60px]">
                    {exampleData.map((club, idx) => (
                        <div
                            onClick={() => handleCardClick(club.id)} 
                            key={idx} >
                            <MediumClubCard
                                title={club.title}
                                description={club.description}
                                location={club.location}
                                peopleCount={club.peopleCount}
                                peopleMax={club.peopleMax}
                                imageUrl={club.imageUrl}
                                tags={club.tags} />
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="relative w-[90%] aspect-[432/132] rounded-[10px] overflow-hidden bg-cover bg-center flex flex-col gap-[10px] items-center justify-center text-white text-center mx-auto"
                style={{ backgroundImage: 'url("/images/clubAddBox.png")' }}
            >
                <p className="text-[18px] font-paperlogy text-white">
                    다양한 모임을 만들고 취향을 공유해보세요!
                </p>
                <button className="bg-white text-[#5776FF] text-[20px] font-paperlogy font-medium px-[18px] py-[8px] rounded-[4px]">
                    스터디그룹 만들기
                </button>
            </div>

            <div className="mt-[71px] px-[5%] mb-[321px]">
                <p className="font-semibold text-[26px] text-center mb-[60px]">다양한 그룹 모임</p>
                <div className="grid grid-cols-2 gap-x-[27px] gap-y-[26px]">
                    {exampleData.map((club, idx) => (
                        <div
                            onClick={() => handleCardClick(club.id)} 
                            key={idx} >
                            <SmallClubCard
                                key={idx}
                                title={club.title}
                                description={club.description}
                                location={club.location}
                                peopleCount={club.peopleCount}
                                peopleMax={club.peopleMax}
                                imageUrl={club.imageUrl}
                                tags={club.tags} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
