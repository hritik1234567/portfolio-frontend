// src/components/SkillCard.jsx
export default function SkillCard({ name, level }) {
  return (
    <div
      className="
        bg-indigo-800 hover:bg-emerald-400/90 text-white hover:text-indigo-900
        transition-transform duration-300 ease-in-out
        transform hover:scale-110
        rounded-xl p-4 shadow-lg w-28 h-24 flex flex-col items-center justify-center gap-2
        animate-fade-in-up cursor-pointer
      "
      title={`${name} - ${level}%`}
    >
      <span className="font-semibold text-sm text-center mb-2">{name}</span>
      <div className="w-full bg-gray-700 h-1.5 rounded">
        <div className="bg-emerald-400 h-1.5 rounded transition-all" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}
