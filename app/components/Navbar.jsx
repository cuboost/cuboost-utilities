"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import UserProfile from "./account/UserProfile";

export default function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldBeOpen, setShouldBeOpen] = useState(false);

  useEffect(() => {
    if (innerWidth > 1024) {
      setIsOpen(true);
      setShouldBeOpen(true);
      console.log("Nav set to open.");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (innerWidth > 1024) {
        setIsOpen(true);
        setShouldBeOpen(true);
        console.log("Nav set to open.");
      } else {
        setIsOpen(false);
        setShouldBeOpen(false);
        console.log("Nav set to closed by default.");
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
        className={` absolute lg:static top-0 left-0 w-4/5 lg:w-2/6 p-10 h-full bg-gradient-to-br from-slate-200/60 to-slate-200/90  backdrop-blur-3xl z-40 rounded-r-3xl ${
          isOpen ? "flex" : "hidden"
        }  flex-col justify-center items-center rounded-l-3xl lg:ml-1`}
      >
        {pathname == "/" && (
          <Link
            href={"/account"}
            className="hover:scale-105 active:scale-95 transition"
            onClick={() => {
              if (!shouldBeOpen) {
                setIsOpen(false);
              }
            }}
          >
            <UserProfile />
          </Link>
        )}

        <div className=" flex flex-col justify-center items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className=" flex items-center gap-10 lg:gap-5 hover:scale-105 active:scale-95 transition"
              onClick={() => {
                if (!shouldBeOpen) {
                  setIsOpen(false);
                }
              }}
            >
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

      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" absolute bottom-4 right-4 p-5 bg-gradient-to-br from-slate-100/40 to-slate-100/80 backdrop-blur-3xl z-40 rounded-full text-cyan-600 lg:hidden text-3xl hover:scale-105 active:scale-95 transition"
      >
        {isOpen ? <CgClose /> : <HiMenuAlt1 />}
      </button>
    </>
  );
}
