import Image from "next/image";

export default function Footer() {
    const images = ["/images/insta.png", "/images/youtube.png", "/images/tweeter.png"];

    return(
        <div className="px-[24px] py-[36px] bg-[#303740] text-white">
            <div className="flex items-center gap-[13px] font-medium text-[15px] mb-[24px]">
                <Image
                    src="/images/careerteenLogo2.png"
                    alt="커리어틴"
                    width={145}
                    height={0}
                    style={{ height: "auto" }} />
                | 제작사 | SNS | 고객문의
            </div>
            <div className="text-[14px] text-[#BFBFBF] flex flex-col gap-[10px] mb-[44px]">
                <p>대표자: 김기병 | 사업자번호: 010-9487-1279</p>
                <p>디자인: 이자연 | 프론트엔드: 박수민 | 백엔드: 박지영</p>
                <p>전화번호: 02-872-4071 | 주소: 서울특별시 관악구 호암로 546</p>
            </div>
            <div className="flex gap-[16px] justify-end">
                {images.map((path, idx) => (
                    <div
                    key={idx}
                    className="rounded-[50%] w-[50px] h-[50px] bg-white flex items-center justify-center">
                        <Image
                        src={path}
                        alt={path}
                        width={17}
                        height={0}
                        style={{ height: "auto" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}