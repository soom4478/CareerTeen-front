"use client";

import Image from "next/image";
import MyContentBox from "../components/MyContentBox";
import MyMentoBox from "../components/MyMentoBox";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const router = useRouter();
    const [selectedBoard, setSelectedBoard] = useState<number | null>(null);
    const [selectedMento, setSelectedMento] = useState<number | null>(null);
    const [myBoard, setMyBoard] = useState([
        {
            id: 1,
            title: "좋은 포트폴리오",
            date: "2025.04.25"
        },
        {
            id: 2,
            title: "좋은 포트폴리오2",
            date: "2025.04.25"
        },
    ]);

    const modifyButtonClick = () => {
        router.push('/my/modify');
    }

    const handleModifyBoard = () => {
        if (selectedBoard) {
            router.push(`/board/modify?id=${selectedBoard}`);
        } else {
            alert('수정할 게시글을 선택해주세요.');
        }
    };

    const handleDeleteBoard = () => {
        if (selectedBoard) {
            const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
            if (confirmDelete) {
                setMyBoard(prevBoards => prevBoards.filter(board => board.id !== selectedBoard));
                setSelectedBoard(null);
            }
        } else {
            alert('삭제할 게시글을 선택해주세요.');
        }
    };
    
    const handleSelectBoard = (id: number) => {
        setSelectedBoard(prevSelected => prevSelected === id ? null : id);
    };

    const handleSelectMento = (id: number) => {
        setSelectedMento(prevSelected => prevSelected === id ? null : id);
    };

    const handleTerminateMento = () => {
        if (selectedMento) {
            const confirmTerminate = window.confirm('정말 멘토 관계를 해지하시겠습니까?');
            if (confirmTerminate) {
                alert('멘토 관계가 해지되었습니다.');
                setSelectedMento(null);
            }
        } else {
            alert('해지할 멘토를 선택해주세요.');
        }
    };

    const handleChatWithMento = () => {
        if (selectedMento) {
            router.push(`/chat?mentoId=${selectedMento}`);
        } else {
            alert('채팅할 멘토를 선택해주세요.');
        }
    };

    const myClub = [
        {
            name: "LG TWINS 팬들 모여라~",
            date: "2025.03.11"
        },
        {
            name: "독서토론 모임",
            date: "2025.04.25"
        },
    ]

    const myMento = [
        {
            id: 1,
            imgUrl: "",
            name: "김지민",
            job: "인사팀",
            age: 27
        },
        {
            id: 2,
            imgUrl: "",
            name: "박지영",
            job: "디자이너",
            age: 30
        },
    ]

    return (
        <div className="mt-[38px] mx-[5%] mb-[110px]">
            <div className="bg-[#F5F6F8] px-[20px] pt-[18px] pb-[20px]">
                <div className="flex justify-end">
                    <button onClick={modifyButtonClick} className="border border-[#CCC] bg-white rounded-[33px] px-[15px] py-[10px] text-[#555] text-[16px] mb-[15px]">프로필 수정</button>
                </div>
                <div className="flex gap-[19px]">
                    <div className="w-[100px] h-[100px] relative overflow-hidden">
                        <Image
                        src="/images/example.png"
                        alt="프로필 이미지"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-[50%]" />
                    </div>
                    <div className="flex flex-col justify-center gap-[23px]">
                        <p className="font-medium text-[18px]">"에이전시 취업을 목표로"</p>
                        <p className="text-[14px]">이자연  |  20세  | UIUX디자이너</p>
                    </div>
                </div>
            </div>
            <div className="mt-[62px] flex flex-col gap-[24px]">
                <p className="font-semibold text-[21px]">자기소개</p>
                <p className="font-light text-[17px] leading-[160%] text-[#454545]">안녕하세요. 고등학교에서 디자인을 전공하고 UI/UX 디자이너로서 첫걸음을 내딛는 예비 디자이너입니다. 아직 경력은 없지만, 사용자 경험에 대한 고민과 디자인 툴에 대한 꾸준한 학습으로 실력을 키워가고 있습니다. 관찰력과 문제 해결력, 그리고 빠르게 배우는 태도를 강점으로 삼고 있으며, 실무 속에서 더 크게 성장하고 싶습니다. 사용자에게 꼭 필요한 경험을 디자인하는 디자이너로 자리 잡는 것이 저의 목표입니다.</p>
            </div>
            <div className="mt-[76px] flex flex-col gap-[24px]">
                <p className="font-semibold text-[21px]">나의 모임</p>
                {
                    myClub.map((club, idx) => (
                        <MyContentBox title={club.name} date={club.date} key={idx} />
                    ))
                }
            </div>
            <div className="mt-[79px] flex flex-col gap-[24px]">
                <div className="flex justify-between">
                    <p className="font-semibold text-[21px]">작성한 글</p>
                    <div className="flex gap-[10px] text-[17px] text-[#555]">
                        <button 
                            onClick={handleModifyBoard} 
                            className={`px-[16px] py-[9.5px] border border-[#CCC] rounded-[50px] transition-colors ${
                                selectedBoard ? 'bg-[#EEE]' : 'bg-white opacity-50 cursor-not-allowed'
                            }`}
                            disabled={!selectedBoard}
                        >
                            수정하기
                        </button>
                        <button 
                            onClick={handleDeleteBoard}
                            className={`px-[16px] py-[9.5px] border border-[#CCC] rounded-[50px] transition-colors ${
                                selectedBoard ? 'bg-white hover:bg-red-50 hover:border-red-300 hover:text-red-600' : 'bg-white opacity-50 cursor-not-allowed'
                            }`}
                            disabled={!selectedBoard}
                        >
                            삭제하기
                        </button>
                    </div>
                </div>
                {
                    myBoard.map((board, idx) => (
                        <MyContentBox
                            title={board.title}
                            date={board.date}
                            key={board.id}
                            onClick={() => handleSelectBoard(board.id)}
                            isSelected={selectedBoard === board.id}
                        />
                    ))
                }
                {myBoard.length === 0 && (
                    <div className="text-center py-[40px] text-[#888]">
                        작성한 글이 없습니다.
                    </div>
                )}
            </div>
            <div className="mt-[85px] px-[21px] pt-[26px] pb-[33px] border border-[#CCC] rounded-[10px]">
                <p className="mb-[31px] ml-[7px] font-medium text-[22px]">멘토</p>
                <div className="flex flex-col gap-[24px]">
                    {
                        myMento.map((mento, idx) => (
                            <MyMentoBox
                                imgUrl={mento.imgUrl}
                                name={mento.name}
                                job={mento.job}
                                age={mento.age}
                                key={mento.id}
                                onClick={() => handleSelectMento(mento.id)}
                                isSelected={selectedMento === mento.id} />
                        ))
                    }
                </div>
                <div className="flex gap-[10px] mt-[40px] items-end justify-end">
                    <button 
                        onClick={handleTerminateMento}
                        className={`px-[16px] py-[9.5px] border border-[#CCC] rounded-[50px] transition-colors ${
                            selectedMento ? 'bg-white hover:bg-red-50 hover:border-red-300 hover:text-red-600' : 'bg-white opacity-50 cursor-not-allowed'
                        }`}
                        disabled={!selectedMento}
                    >
                        해지하기
                    </button>
                    <button 
                        onClick={handleChatWithMento}
                        className={`px-[16px] py-[9.5px] border border-[#CCC] rounded-[50px] transition-colors ${
                            selectedMento ? 'bg-[#EEE] hover:bg-[#DDD]' : 'bg-white opacity-50 cursor-not-allowed'
                        }`}
                        disabled={!selectedMento}
                    >
                        채팅하기
                    </button>
                </div>
            </div>
        </div>
    )
}