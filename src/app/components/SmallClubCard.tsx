import Image from "next/image";

interface SmallClubCardProps {
  title: string;
  description: string;
  location: string;
  peopleCount: number;
  peopleMax: number;
  imageUrl: string;
  tags: string[];
}

export default function SmallClubCard({
  title,
  description,
  location,
  peopleCount,
  peopleMax,
  imageUrl,
  tags,
}: SmallClubCardProps) {
  return (
    <div className="flex flex-col gap-[20px] flex-shrink-0">
      <Image
        src={imageUrl}
        alt="동아리 이미지"
        width={200}
        height={125} />
      <div className="ml-[6px] flex flex-col gap-[14px]">
        <div className="flex gap-[12px]">
          {
            tags.map((tag, idx) => {
              return (
                <span
                  className="tagBox3"
                  key={idx}>
                  {tag}
                </span>
              )
            })
          }
        </div>
        <p className="font-semibold text-[19px]">독서토론 모임</p>
        <div className="flex gap-[20px] font-medium text-[#777] text-[14px]">
          <div className="flex gap-[1px]">
            <Image
              src="/images/locationIcon.png"
              alt="위치"
              width={18}
              height={0}
              style={{ height: "auto" }} />
              {location}
          </div>
          <div className="flex gap-[3px]">
            <Image
                src="/images/peopleIcon.png"
                alt="위치"
                width={18}
                height={0}
                style={{ height: "auto" }} />
                {peopleCount}/{peopleMax}
          </div>
        </div>
      </div>
    </div>
  );
}
