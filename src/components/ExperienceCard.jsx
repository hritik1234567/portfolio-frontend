// src/components/ExperienceCard.jsx
export default function ExperienceCard({ title, company, period, description, logo }) {
  return (
    <div
      className="
        bg-indigo-900 bg-opacity-90
        p-12
        rounded-3xl
        shadow-2xl
        max-w-4xl
        mx-auto
        flex flex-col md:flex-row
        gap-10
        items-center
        transition-transform
        duration-300
        hover:scale-105
      "
    >
      <img
        src={logo}
        alt={company}
        className="w-32 h-32 rounded-full shadow-lg flex-shrink-0"
      />
      <div className="flex-1">
        <h3 className="text-3xl font-extrabold text-emerald-400 mb-3">
          {title}
        </h3>
        <p className="text-indigo-300 text-lg font-semibold mb-6">
          {company} | {period}
        </p>
        <ul className="list-disc ml-8 space-y-3 text-gray-300 text-lg max-w-3xl">
          {description.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
