export default function JoinSequenceBox({
    num
}: {
    num: number[]
}) {
    
    const numbers = [1, 2, 3, 4, 5];
    
    return (
        <div className="flex gap-[21px] absolute z-10 top-[30px] transform -translate-x-1/2 left-[50%]">
            {
                numbers.map((number, idx) => (
                    <div
                        key={idx}
                        className={num.includes(number) ? "rounded-[50%] w-[31px] h-[31px] bg-[#276FE2] border border-[#CCC] flex items-center justify-center text-white" : "rounded-[50%] w-[31px] h-[31px] bg-[#EBEBEB] border border-[#CCC] flex items-center justify-center"}>
                        {number}
                    </div>
                ))
            }
        </div>
    )
}