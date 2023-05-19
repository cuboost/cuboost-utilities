"use client";

import { useState } from "react";
import { IoCopyOutline, IoCopy } from "react-icons/io5";
import { BsTrash3 } from "react-icons/bs";

export default function CopyText() {
    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    const onCopyText = () => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <div className=" flex flex-col">
            <h1 className='pb-12'>Copy Text</h1>

            <textarea name="text" id="text" className=" outline-none p-2 rounded-lg w-4/5 md:w-3/5 resize-none mb-2 focus:shadow-lg transition duration-500" rows={6} placeholder="Enter text here" autoFocus onChange={e => setText(e.target.value)} value={text} ></textarea>

            <div className="flex gap-4">
                <button className=" flex items-center justify-center gap-2 bg-white py-2 px-4 rounded-2xl cursor-copy focus:shadow-lg transition duration-500 outline-none" onClick={onCopyText}>
                    {isCopied ? <IoCopy className=" text-xl text-cyan-700" /> : <IoCopyOutline className=" text-xl text-cyan-700" />}
                    {isCopied ? "Copied!" : "Copy"}
                </button>

                <button className=" flex items-center justify-center gap-2 bg-white py-2 px-4 rounded-2xl focus:shadow-lg transition duration-500 outline-none" onClick={() => setText("")}>
                    <BsTrash3 className=" text-xl" />
                    Clear
                </button>
            </div>
        </div>
    );
}
