import InfoCardList from "./components/InfoCardList";
import Image from "next/image";

const categories = [
  { name: "사무직", img: "/images/cate1.png" },
  { name: "IT", img: "/images/cate2.png" },
  { name: "디자인", img: "/images/cate3.png" },
  { name: "요식", img: "/images/cate4.png" },
  { name: "마케팅", img: "/images/cate5.png" },
];

export default function Home() {
  return (
    <div className="font-Paperlogy font-medium overflow-auto">
      <InfoCardList />
      <div className="w-[90%] mx-auto mt-[85px] rounded-[12px] bg-[#E0E6F2] px-[20px] py-[14px] flex gap-[20px]">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="flex-1 text-center flex flex-col gap-[10px] font-preendard font-medium text-[#2D4C67] text-[15px]"
          >
            <div className="rounded-[50%] w-[47px] h-[47px] bg-white flex items-center justify-center mx-auto">
              <Image
                src={category.img}
                alt={category.name}
                width={33}
                height={0}
                style={{ height: "auto" }}
              />
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
