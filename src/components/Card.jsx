import { useState } from "react";

export default function Card({ title, desc, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [showMore, setShowMore] = useState(false);
  const [likeState, setLikeState] = useState(false);
  const styles = {
    like: "cursor-pointer px-3 py-1.5 text-sm font-medium rounded-lg bg-green-500 text-white hover:bg-green-600 active:scale-95 transition",
    dislike:
      "cursor-pointer px-3 py-1.5 text-sm font-medium rounded-lg bg-red-500 text-white hover:bg-red-600 active:scale-95 transition",
  };
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

      {/* Collapsible Content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showMore ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600">{desc}</p>
      </div>

      {/* Actions */}
      <div className="mt-4 flex items-center justify-between">
        {/* Likes */}
        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-lg">{likeState ? "❤️" : "🩶"}</span>
          <span className="font-medium">{likes}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => {
              if (likeState === false) {
                setLikeState(true);
                setLikes(likes + 1);
              } else {
                setLikeState(false);
                setLikes(likes - 1);
              }
            }}
            className={likeState ? styles.dislike : styles.like}
          >
            {likeState ? "Dislike" : "Like"}
          </button>

          <button
            onClick={() => setShowMore(!showMore)}
            className="cursor-pointer px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95 transition"
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
}
