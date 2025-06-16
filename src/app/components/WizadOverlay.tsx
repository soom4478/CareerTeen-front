"use client";

import { useEffect, useState } from "react";
import LoginCard from "./LoginCard";
import JoinCard1 from "./JoinCard1";
import JoinCard2 from "./JoinCard2";
import JoinCard3 from "./JoinCard3";
import JoinCard4 from "./JoinCard4";
import JoinCard5 from "./JoinCard5";

export default function WizardOverlay() {
    const [step, setStep] = useState<number | null>(0);

    const goNext = () => setStep((prev) => (prev !== null ? prev + 1 : null));
    const goPrev = () => setStep((prev) => (prev !== null && prev > 0 ? prev - 1 : 0));
    const closeAll = () => setStep(null);

    useEffect(() => {
        if (step !== null) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [step]);

    if (step === null) return null;

    const renderCard = () => {
        switch (step) {
            case 0:
                return <LoginCard onNext={goNext} onClose={closeAll} />;
            case 1:
                return <JoinCard1 onNext={goNext} />;
            case 2:
                return <JoinCard2 onNext={goNext} onBack={goPrev} />;
            case 3:
                return <JoinCard3 onNext={goNext} onBack={goPrev} />;
            case 4:
                return <JoinCard4 onNext={goNext} onBack={goPrev} />;
            case 5:
                return <JoinCard5 onBack={goPrev} onClose={closeAll} />;
            default:
                return null;
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full z-50">
            {renderCard()}
        </div>
    );
}
