import Image from "next/image";

export default function InfoCardList() {
    return(
        <div className="w-[90%] mx-auto flex flex-col gap-[20px]">
        <div className="card-gradient1 h-[252px] text-white p-[33px] flex flex-col gap-[16px] relative overflow-hidden">
          <p className="relative z-0 text-[26px] leading-[130%]">똑똑한 고졸의 선택<br/>커리어틴</p>
          <p className="font-preendard relative z-10 text-[15px] leading-[140%]">나만의 멘토를 찾고 취업에<br/>한걸음 더 다가가보세요</p>
          <Image
            src="/images/leadingGrasses.png"
            alt="돋보기"
            width={249} 
            height={0}
            style={{ height: "auto" }}
            className="absolute right-0 bottom-[-14px]"/>
        </div>
        <div className="font-paperlogy font-medium h-[223px] flex gap-[2%] text-[13px] leading-[140%]">
          <div className="card-gradient2 w-full px-[4%] py-[4.5%] text-white">
            <p className="leading-[140%]">메일 이렇게만<br/>작성하세요!</p>
            <Image
              src="/images/mail.png"
              alt="메일"
              width={98} 
              height={0}
              style={{ height: "auto" }}
              className="mt-[33px] first-letter:"/>
          </div>
          <div className="card-gradient3 w-full px-[4%] py-[4.5%] text-black">
            <p className="leading-[140%]">회사에서 모르면<br/>안되는 '예의'</p>
            <Image
              src="/images/document.png"
              alt="메일"
              width={96} 
              height={0}
              style={{ height: "auto" }}
              className="mt-[33px]"/>
          </div>
          <div className="card-gradient4 w-full px-[4%] py-[4.5%] text-white">
            <p className="leading-[140%]">포괄? 비포괄?<br/>취업 용어<br/>알아보기</p>
            <Image
              src="/images/file.png"
              alt="메일"
              width={107} 
              height={0}
              style={{ height: "auto" }}
              className="mt-[33px]"/>
          </div>
        </div>
      </div>
    )
}