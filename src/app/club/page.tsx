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

    const handleCreateBtnClick = () => {
        router.push('/club/create');
    }

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
            imageUrl: "data:image/jpeg;base64,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",
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
                        className="relative z-10 rounded-[8px]"
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
                                    <Image src="/images/peopleIcon.png" alt="인원" width={20} height={20} className="object-contain " />
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
                <button
                    onClick={handleCreateBtnClick}
                    className="bg-white text-[#5776FF] text-[20px] font-paperlogy font-medium px-[18px] py-[8px] rounded-[4px]">
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
