"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const params = useParams();
    const selectedCategory = params.id;
    
    const categories = ['office', 'it', 'design', 'food', 'marketing'];

    return (
        <div></div>
    )
}