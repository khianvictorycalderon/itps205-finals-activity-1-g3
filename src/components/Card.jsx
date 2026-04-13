import { useState } from "react";

export default function Card({
  title,
  desc,
  initialLikes = 0,
  initialDislikes = 0,
}) {
  const [likes, setLikes] = useState(initialLikes);
  const [disLikes, setDisLikes] = useState(initialDislikes);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition border border-gray-200 flex flex-col self-start">

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">
        {title}
      </h2>

      {/* Description (ANIMATED) */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showMore ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-gray-600 leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Stats */}
      <div className="mt-3 flex items-center text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <span>👍</span>
          <span>{likes}</span>
        </div>

        <div className="flex items-center gap-1">
          <span>👎</span>
          <span>{disLikes}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-3 flex flex-wrap gap-2">

        <button
          onClick={() => setLikes((prev) => prev + 1)}
          className="cursor-pointer px-2.5 py-1 text-xs font-medium rounded-md bg-green-500 text-white hover:bg-green-600 active:scale-95 transition"
        >
          Like
        </button>

        <button
          onClick={() => setDisLikes((prev) => prev + 1)}
          className="cursor-pointer px-2.5 py-1 text-xs font-medium rounded-md bg-red-500 text-white hover:bg-red-600 active:scale-95 transition"
        >
          Dislike
        </button>

        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="cursor-pointer px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95 transition"
        >
          {showMore ? "Hide" : "Read"}
        </button>

      </div>
    </div>
  );
}