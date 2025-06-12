import Image from "next/image";

interface mentoProps {
    name: string;
    imgUrl: string;
}

export default function MentoChatPropile(mento:mentoProps) {
    return (
        <div className="bg-[#F5F6F8] flex gap-[20px] px-[20px] py-[11px] rounded-[10px] justify-center">
            <div className="w-[66px] h-[66px] relative overflow-hidden">
                <Image
                    src={mento.imgUrl}
                    alt="멘토 이미지"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-[50%]" />
            </div>
            <div>
                <p>멘토</p>
                <p>{mento.name}</p>
            </div>
        </div>
    )
}