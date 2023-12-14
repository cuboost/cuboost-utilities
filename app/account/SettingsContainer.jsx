export default function SettingContainer({
  title,
  descrition,
  whenClicked,
  icon,
  children,
}) {
  return (
    <div
      className=" w-5/6 mx-auto bg-gradient-to-br from-slate-100/30 to-slate-300/50 backdrop-blur-2xl rounded-3xl px-6 py-7 my-10 flex items-center gap-6 hover:scale-105 transition duration-100 cursor-pointer"
      onClick={whenClicked}
    >
      <span className="text-4xl text-cyan-700 m-2">{icon}</span>
      <div className=" text-left">
        <h3 className="pb-2">{title}</h3>
        <h6>{descrition}</h6>
      </div>

      {children}
    </div>
  );
}
