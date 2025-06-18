interface contentProps {
    title: string;
    date: string;
    onClick?: () => void;
    className?: string;
    isSelected?: boolean;
}

export default function MyContentBox(content: contentProps) {
    const baseClasses = "rounded-[8px] px-[18px] py-[20px] flex justify-between items-center cursor-pointer transition-colors";
    const backgroundClass = content.isSelected ? 'bg-[#C9CBCF]' : 'bg-[#F5F5F5]';
    
    return (
        <div 
            className={`${baseClasses} ${backgroundClass} ${content.className || ''}`}
            onClick={content.onClick}
        >
            <span className="font-medium text-[18px] text-[#222]">{content.title}</span>
            <div className="text-[14px]">
                <span className="text-[#888] mr-[7px]">가입날짜</span>
                <span className="text-[#555]">{content.date}</span>
            </div>
        </div>
    )
}