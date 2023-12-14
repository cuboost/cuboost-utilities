import Image from "next/image";

export default function UserPhoto({ user }) {
  return (
    <Image
      src={user.photoURL ? user.photoURL : "/cuboost-image.png"}
      className=" w-28 rounded-full select-none bg-gradient-to-br from-cyan-600/40 to-cyan-700/60 backdrop-blur-2xl"
      alt="Avatar"
      referrerPolicy="no-referrer"
      width={800}
      height={800}
      draggable="false"
    />
  );
}
