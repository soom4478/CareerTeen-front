import Image from "next/image"

interface mentoProps {
    imgUrl: string;
    name: string;
    job: string;
    age: number;
}

export default function MyMentoBox(mento: mentoProps) {

    return (
        <div className="rounded-[8px] px-[17px] py-[15px] flex gap-[23px]">
            <div className="w-[84px] h-[84px] relative overflow-hidden">
                <Image
                src={mento.imgUrl}
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