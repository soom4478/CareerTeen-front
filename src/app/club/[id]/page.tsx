import Image from "next/image";
import { GrToast } from "react-icons/gr";

type Props = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: Props) {
    const { id } = params;

    return (
        <div className="px-[5%] mt-[27px]">
            
            <div className="w-[100%] h-[219px] relative overflow-hidden">
                <Image
                    src="/images/example.png"
                    alt="그룹 이미지"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-[6px]" />
            </div>
            <div className="mt-[40px] rounded-[10px] border border-[#CCC] bg-[#F5F6F8]">
                <div className="mx-[32px] mt-[29px]">
                    <div className="flex gap-[6px]">
                        <div className="px-[15px] py-[8px] border border-[#CCC] rounded-[7px] font-medium text-[#555] text-[17px]">취미</div>
                    </div>
                    <p className="font-semibold text-[30px] mt-[20px]">사진은 실전이다</p>
                </div>
                <hr className="mx-[20px] my-[22px]" />
                <div className="flex mx-[32px] gap-[30px]">
                    <div className="flex flex-col gap-[8px]">
                        <p className="info-label">호스트</p>
                        <p className="info-text">soom</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <p className="info-label">장소</p>
                        <p className="info-text">금천구</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <p className="info-label">인원</p>
                        <p className="info-text">8/10</p>
                    </div>
                </div>
                <div className="mx-[20px] mt-[42px] mb-[22px]">
                    <button className="w-full p-[10px] rounded-[8px] font-medium text-white text-[20px] bg-[#3C98E9]">
                        참여하기
                    </button>
                </div>
            </div>
            <p className="mt-[77px] mb-[411px] text-[17px] text-[#111] leading-[170%]">
                안녕하세요
                새롭게 사진커뮤니티를 시작한 시즌아트입니다.
                아래에 해당되는 분들의 많은 참여 부탁드립니다.
                실전연습을 통해 사진실력을 올리고 싶으신 분
                좀 더 전문적인 포트폴리오가 필요하신 분
                릴스 영상 / 스케치 영상 촬영에 관심있으신 분
                컨셉 설정에 어려움을 겪는 분
                친목이 우선인 사진모임에 실증나신 분
                매주 다양한 컨셉의 촬영을 진행합니다.
                매 촬영 6인정도로 진행합니다.
                전체 촬영하는 시간 및 개인별 촬영 시간 제공
                음료/커피/간식 제공
                컨셉에 따라 다른 스튜디오에서도 촬영하고 야외촬영도 진행합니다.
            </p>
        </div>
    );
}
