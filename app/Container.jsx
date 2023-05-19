"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { homeLinks } from "./home-links";
import { motion } from 'framer-motion';

export default function Container({ children }) {

    const [isMd, setIsMd] = useState(false);

    useEffect(() => {
        if (innerWidth > 768) {
            setIsMd(true);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (innerWidth > 768) {
                setIsMd(true);
            } else {
                setIsMd(false);
            }
        });
    });

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, borderRadius: isMd ? "1.5rem" : 40 }}
            animate={{ opacity: 1, scale: 1, borderRadius: isMd ? "1.5rem" : 0 }}
            exit={{ opacity: 0, scale: 0.8, borderRadius: isMd ? "1.5rem" : 40 }}
            className=' flex bg-gradient-to-br from-white/70 to-white/10 w-full h-full md:rounded-3xl backdrop-blur-2xl p-2 py-3 md:w-10/12 2xl:w-8/12 md:h-4/5'
        >
            <Navbar links={homeLinks} />

            {/* Another div for scrolling... */}
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                exit={{ opacity: 0 }}
                className='overflow-y-scroll w-full h-full p-6 pt-10'>
                {children}
            </motion.main>
        </motion.div>
    );
}
