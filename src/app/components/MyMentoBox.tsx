import Image from "next/image"

interface mentoProps {
    imgUrl: string;
    name: string;
    job: string;
    age: number;
    onClick?: () => void;
    isSelected?: boolean;
}

export default function MyMentoBox(mento: mentoProps) {

    return (
        <div 
            className={`rounded-[8px] px-[17px] py-[15px] flex gap-[23px] cursor-pointer transition-colors ${
                mento.isSelected ? 'bg-[#E7E7E7]' : 'bg-[#F5F5F5] hover:bg-[#EEEEEE]'
            }`}
            onClick={mento.onClick}
        >
            <div className="w-[84px] h-[84px] relative overflow-hidden">
                <Image
                src={mento.imgUrl || "/images/default-profile.png"}
                alt="멘토 프로필"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-[50%]" />
            </div>
            <div className="flex flex-col justify-center gap-[8px]">
                <p className="font-medium text-[23px]">{mento.name}</p>
                <p className="text-[16px] text-[#666]">{mento.job} | {mento.age}세</p>
            </div>
        </div>
    )
}