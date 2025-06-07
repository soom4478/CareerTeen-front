import Image from "next/image";

interface MediumClubCardProps {
  title: string;
  description: string;
  location: string;
  peopleCount: number;
  peopleMax: number;
  imageUrl: string;
  tags: string[];
}

export default function MediumClubCard({
  title,
  description,
  location,
  peopleCount,
  peopleMax,
  imageUrl,
  tags,
}: MediumClubCardProps) {
  return (
    <div className="flex flex-col gap-[20px] w-[204px] flex-shrink-0">
      <Image
        src={imageUrl}
        alt="동아리 이미지"
        width={300}
        height={204} />
      <div className="ml-[12px] flex flex-col gap-[13px]">
        <div className="flex gap-[12px]">
          {
            tags.map((tag, idx) => {
              return (
                <span
                  className="tagBox2"
                  key={idx}>
                  {tag}
                </span>
              )
            })
          }
        </div>
        <p className="font-semibold text-[22px]">{title}</p>
        <div className="flex gap-[20px] font-medium text-[#999] text-[16px]">
          <div className="flex gap-[1px]">
            <Image
              src="/images/locationIcon.png"
              alt="위치"
              width={20}
              height={20}
              className="object-contain" />
              {location}
          </div>
          <div className="flex gap-[3px]">
            <Image
                src="/images/peopleIcon.png"
                alt="위치"
                width={20}
                height={20}
                className="object-contain" />
                {peopleCount}/{peopleMax}
          </div>
        </div>
      </div>
    </div>
  );
}
