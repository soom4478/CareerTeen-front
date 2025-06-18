import { useEffect, useState } from "react";

export default function ToastCard({
    text
}: {
    text: string
}) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="absolute z-30 bg-[#444] rounded-[12px] w-[90%] top-[80px] left-[5%] py-[20px]">
            <p className="font-semibold text-[#FFF] text-[19px] text-center">{text}</p>
        </div>
    );
}
