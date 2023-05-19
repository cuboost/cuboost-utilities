"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";


export default function Navbar({ links }) {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (innerWidth > 1024) {
            setIsOpen(true);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (innerWidth > 1024) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        });
    });

    const pathname = usePathname();

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, x: -50 }}
                className={` absolute lg:static top-0 left-0 w-4/5 lg:w-2/6 p-10 h-full bg-gradient-to-br from-slate-300/40 to-slate-300/60 backdrop-blur-3xl z-40 rounded-r-3xl ${isOpen ? "flex" : "hidden"}  flex-col justify-center items-center rounded-l-3xl lg:ml-1`}>

                {pathname == "/" && (
                    <div className=" flex justify-center items-center flex-col">
                        <div className="rounded-full w-24 h-24 bg-slate-500">

                        </div>
                        <h2>Name</h2>
                    </div>
                )}

                <div className=" flex flex-col justify-center items-center gap-6">
                    {links.map(link => (
                        <Link key={link.id} href={link.link} className=" flex items-center gap-10 lg:gap-5">
                            <span className=" text-4xl text-sky-600 lg:text-3xl">
                                {link.icon}
                            </span>
                            <h2 className="bg-gradient-to-br from-sky-500 to-cyan-700 inline-block text-transparent bg-clip-text lg:text-2xl">
                                {link.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </motion.nav>

            <button onClick={() => setIsOpen(!isOpen)} className=" absolute bottom-4 right-4 p-5 bg-gradient-to-br from-slate-100/40 to-slate-100/80 backdrop-blur-3xl z-40 rounded-full text-cyan-600 lg:hidden text-3xl">
                {isOpen ? <CgClose /> : <HiMenuAlt1 />}
            </button>
        </>
    );
}
