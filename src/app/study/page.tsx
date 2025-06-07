import Image from "next/image";
import MediumClubCard from "../components/MediumClubCard";
import SmallClubCard from "../components/SmallClubCard";

export default function Page() {

    const exampleData = [
    {
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
        title: "서울 등산 모임",
        description:
        "주말마다 서울 근교 산을 함께 올라요! 초보자도 환영합니다.",
        location: "강남구",
        peopleCount: 8,
        peopleMax: 15,
        imageUrl: "/images/clubExample.png",
        tags: ["운동", "자연"],
    },
    {
        title: "영화 감상 동아리",
        description:
        "최신 영화 리뷰와 감상을 나누는 모임입니다. 영화 좋아하는 분들 모두 환영!",
        location: "마포구",
        peopleCount: 5,
        peopleMax: 15,
        imageUrl: "/images/movieClub.png",
        tags: ["문화", "영화"],
    },
    {
        title: "영화 감상 동아리",
        description:
        "최신 영화 리뷰와 감상을 나누는 모임입니다. 영화 좋아하는 분들 모두 환영!",
        location: "마포구",
        peopleCount: 5,
        peopleMax: 15,
        imageUrl: "/images/movieClub.png",
        tags: ["문화", "영화"],
    },
    ];

    return (
        <div>
            <div className="w-[90%] pt-[43px] mx-auto">
                <div className="flex gap-1 font-preendard font-semibold text-[24px] mb-[28px]">
                    <span className="text-[#3895E7]">NEW</span>
                    <span>새로운 그룹</span>
                </div>
                <Image
                    src="/images/newGroupEx.png"
                    alt="그룹"
                    width={432}
                    height={0}
                    style={{ height: "auto" }}
                    className="relative z-10" />
                <div className="rounded-[8px] bg-[#F5F6F8] pt-[70px] px-[22px] pb-[33px] -translate-y-[35px]">
                    <div className="flex gap-[6px]">
                        <p className="tagBox1">힐링</p>
                        <p className="tagBox1">자전거</p>
                    </div>
                    <div className="flex mt-[12px] justify-between">
                    <span className="font-semibold text-[25px]">한강 라이딩 모임</span>
                    <div className="flex gap-[15px] items-center font-medium text-[#777]">
                        <div className="flex gap-[1px]">
                            <Image
                                src="/images/locationIcon.png"
                                alt="위치"
                                width={20}
                                height={0}
                                style={{ height: "auto" }} />
                            광진구
                        </div>
                        <div className="flex gap-[3px]">
                            <Image
                                src="/images/peopleIcon.png"
                                alt="위치"
                                width={20}
                                height={0}
                                style={{ height: "auto" }} />
                            12/15
                        </div>
                    </div>
                </div>
                <p className="text-[#555] text-[16px] mt-[24px] leading-[150%]">일요일 저녁 한강 노을라이딩 같이 가요!🚴🏻 노을 보면서 한강 구경도 하고 사진도 찍고 여유롭게 탈 예정이라(자덕ㄴㄴ) 자린이 환영!</p>
                </div>
                <div className="flex gap-[15px] justify-center mt-[39.5px] items-center">
                    <svg className="stroke-[1px] stroke-[#666] w-[9px] h-[19px]" xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                        <path d="M10 0.5L1 10L10 19.5" stroke="#666666"/>
                    </svg>
                    <span className="font-medium text-[#666] text-[17px]">1/2</span>
                    <svg className="stroke-[1px] stroke-[#666] w-[9px] h-[19px]" xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                        <path d="M1 0.5L10 10L1 19.5" stroke="#666666"/>
                    </svg>
                </div>
            </div>
            
            <div className="bg-[#F5F6F8] pt-[52px] pb-[105px] mb-[60px] mt-[101px]">
                <p className="font-semibold text-[26px] text-center">인기급상승 모임</p>
                <div className="horizontalScroll flex gap-[37px] overflow-auto px-[35px] mt-[60px]">
                    {
                        exampleData.map((club, idx) => (
                            <MediumClubCard
                                key={idx}
                                title={club.title}
                                description={club.description}
                                location={club.location}
                                peopleCount={club.peopleCount}
                                peopleMax={club.peopleMax}
                                imageUrl={club.imageUrl}
                                tags={club.tags}
                            />
                        ))
                    }
                </div>
            </div>

            <div
                className="relative w-[90%] aspect-[432/132] rounded-[10px] overflow-hidden bg-cover bg-center flex flex-col gap-[10px] items-center justify-center text-white text-center mx-auto"
                style={{ backgroundImage: 'url("/images/clubAddBox.png")' }}>
                <p className="text-[18px] font-paperlogy text-white">다양한 모임을 만들고 취향을 공유해보세요!</p>
                <button className="bg-white text-[#5776FF] text-[20px] font-paperlogy font-medium px-[18px] py-[8px] rounded-[4px]">
                    스터디그룹 만들기
                </button>
            </div>

            <div className="mt-[71px] px-[5%] mb-[321px]">
                <p className="font-semibold text-[26px] text-center mb-[60px]">다양한 그룹 모임</p>
                <div className="grid grid-cols-2 gap-x-[27px] gap-y-[26px]">
                    {exampleData.map((club, idx) => (
                        <SmallClubCard
                        key={idx}
                        title={club.title}
                        description={club.description}
                        location={club.location}
                        peopleCount={club.peopleCount}
                        peopleMax={club.peopleMax}
                        imageUrl={club.imageUrl}
                        tags={club.tags}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}