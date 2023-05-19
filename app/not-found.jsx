"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {

    const router = useRouter();

    useEffect(() => {
        router.prefetch("/");
        setTimeout(() => {
            router.replace("/");
        }, 10000);
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-start text-center">
            <h1>Sorry...</h1>
            <h2>That page could not be found.</h2>
            <Link href="/">
                <button className=" m-5 bg-gradient-to-r from-cyan-500 to-teal-500 hover:drop-shadow-lg active:drop-shadow-xl text-white px-4 py-2 rounded-md select-none transition duration-500 ease-in-out">Home</button>
            </Link>
        </div>
    );
};