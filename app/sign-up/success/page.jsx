"use client";

import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import { useEffect } from "react";

const Success = () => {

    const router = useRouter();

    useEffect(() => {
        if (!router.query.name) {
            router.push("/sign-up");
        }
    }, [router]);

    return (
        <main className=' h-screen flex items-center justify-center'>
            <div className=' bg-white rounded-2xl w-3/4 text-gray-700 p-16'>
                <h1 className=" text-3xl pb-4 text-bold">
                    Thanks for the email {router.query.name}!
                </h1>
                <p className="text-lg text-gray-500">
                    We have sent you an email at {router.query.email}.
                </p>
            </div>
            <Confetti gravity={0.2} numberOfPieces={300} tweenDuration={5500} recycle={false} colors={["#14b8a6", "#098275", "#37eddb", "#48b5aa"]} />
        </main>
    );
};

export default Success;