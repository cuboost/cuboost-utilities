"use client";

import { useState } from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { IoCopyOutline, IoCopy } from "react-icons/io5";

export default function RightToLeft() {

    const [isRTL, setIsRTL] = useState(true);
    const [text, setText] = useState("Enter some text above...");
    const [isCopied, setIsCopied] = useState(false);

    const onCopyText = () => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <div>
            <h1>Right to Left</h1>

            <div className="flex justify-center items-center flex-col mt-8 gap-5">
                <textarea name="text" id="text" className=" outline-none p-2 rounded-lg w-4/5 resize-none focus:shadow-lg transition duration-500" rows={5} placeholder="Enter text here" autoFocus onChange={e => setText(e.target.value)} dir={isRTL ? "ltr" : "rtl"} ></textarea>

                <button className=" flex items-center justify-center gap-2 md:flex-col bg-white py-2 px-4 rounded-2xl focus:shadow-lg transition duration-500 outline-none" onClick={() => setIsRTL(!isRTL)} >
                    <HiOutlineSwitchHorizontal className=" text-2xl text-cyan-700" />
                    <h3>{isRTL ? "to RTL" : "to LTR"}</h3>
                </button>

                <textarea name="text" id="text" className=" outline-none p-2 rounded-lg w-4/5 resize-none " rows={5} readOnly value={text} dir={isRTL ? "rtl" : "ltr"} />

                <button className=" flex items-center justify-center gap-2 bg-white py-2 px-4 rounded-2xl cursor-copy focus:shadow-lg transition duration-500 outline-none" onClick={onCopyText}>
                    {isCopied ? <IoCopy className=" text-xl text-cyan-700" /> : <IoCopyOutline className=" text-xl" />}{isCopied ? "Copied!" : "Copy"}
                </button>
            </div>
        </div >
    );
}
