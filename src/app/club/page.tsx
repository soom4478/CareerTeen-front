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
            title: "사진은 실전이다",
            description: "사진을 함께 찍으며 힐링하는 소모임입니다. 초보자부터 전문가까지 함께 모여 출사도 다니고, 사진 편집 기술도 공유하며 즐겁게 활동합니다.",
            location: "서울",
            peopleCount: 8,
            peopleMax: 10,
            imageUrl: "https://buly.kr/2Uj3oCf",
            tags: ["사진", "취미"],
        },
        {
            id: 3,
            title: "책 한 권의 여유",
            description: "매달 한 권의 책을 선정하여 함께 읽고, 온라인 또는 오프라인에서 독후감을 나누는 소모임입니다. 다양한 장르의 책을 다루며 서로의 생각을 존중하는 분위기를 지향합니다.",
            location: "온라인",
            peopleCount: 9,
            peopleMax: 12,
            imageUrl: "https://buly.kr/A45dzmL",
            tags: ["독서", "토론"],
        },
        {
            id: 4,
            title: "주말 홈베이킹",
            description: "달콤한 냄새 가득한 주말 오후, 함께 빵과 디저트를 만들어보는 홈베이킹 클래스입니다. 제빵 도구나 재료가 없어도 참여 가능하며, 누구나 즐길 수 있는 쉬운 레시피부터 시작해요!",
            location: "홍대",
            peopleCount: 6,
            peopleMax: 8,
            imageUrl: "https://buly.kr/612DR1Z",
            tags: ["요리", "취미"],
        },
        {
            id: 5,
            title: "코딩 스터디",
            description: "개발자 지망생 또는 신입 개발자들이 함께 모여 주간 미션을 해결하고 코드 리뷰를 통해 실력을 키워나가는 코딩 스터디입니다. 프론트엔드와 백엔드 모두 환영입니다!",
            location: "강남",
            peopleCount: 17,
            peopleMax: 20,
            imageUrl: "https://buly.kr/FhNtNts",
            tags: ["코딩", "스터디"],
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
