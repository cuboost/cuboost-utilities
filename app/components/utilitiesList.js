// This is the file that contains all the utilities...

import { IoCopyOutline } from "react-icons/io5";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { TbTextDirectionRtl } from "react-icons/tb";

export const utilitiesList = [
  { id: 1, name: "Copy Text", link: "/copy-text", icon: <IoCopyOutline /> },
  {
    id: 2,
    name: "Random Number",
    link: "/random-number",
    icon: <AiOutlineFieldNumber />,
  },
  {
    id: 3,
    name: "Right to Left",
    link: "/right-to-left",
    icon: <TbTextDirectionRtl />,
  },
  { id: 4, name: "Tic Tac Toe", link: "/tic-tac-toe" },
];
