import Link from "next/link";
import { BsFileEarmark } from "react-icons/bs";

export default function UtilityCard({ name, icon, link }) {
    return (
        <Link href={link} className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm outline-none flex flex-col justify-center items-center gap-6 h-36 text-5xl p-4 text-cyan-700 text-center">
            {icon ? icon : <BsFileEarmark />}
            <h3>{name}</h3>
        </Link>
    );
}
