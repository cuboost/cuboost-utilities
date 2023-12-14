export default function Container({ children }) {
  return (
    <div className="w-5/6 mx-auto bg-gradient-to-br from-slate-100/30 to-slate-300/50 backdrop-blur-2xl rounded-3xl px-6 py-7 my-10">
      {children}
    </div>
  );
}
