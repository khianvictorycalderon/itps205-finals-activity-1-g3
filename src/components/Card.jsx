import { useState } from "react";

export default function Card({ title, desc, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [showMore, setShowMore] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const toggleShow = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 mx-15 my-5 shadow-md transition-all duration-300">
      <h2 className="text-lg font-bold">{title}</h2>

      {/* Collapsible Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          showMore ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="mt-2">{desc}</p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <p>❤️ {likes}</p>

        <div className="flex gap-2">
          <button
            onClick={handleLike}
            className="cursor-pointer bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Like
          </button>

          <button
            onClick={toggleShow}
            className="cursor-pointer bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
}