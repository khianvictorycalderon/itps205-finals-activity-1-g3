export default function Tooltip({ text, children }) {
  return (
    <span className="relative group w-max">
      {children}

      <div
        className="absolute top-10 left-1/2 -translate-x-1/2
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-200
                   bg-gray-800 text-white text-sm
                   px-2 py-1 rounded whitespace-nowrap shadow-md"
      >
        {text}
      </div>
    </span>
  );
}
