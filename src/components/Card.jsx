import Button from "./Button";
import Tooltip from "./Tooltip";
export default function Card({ title, desc }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 mx-15 my-5 shadow-md">
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className="mt-4 flex justify-between">
        <Button variant="like">Like</Button>
        <span className="text-gray-500 flex gap-2">
          <Tooltip text="Show more of this content.">
            <Button variant="more">+</Button>
          </Tooltip>

          <Tooltip text="Show less of this content.">
            <Button variant="less">-</Button>
          </Tooltip>
        </span>
      </div>
    </div>
  );
}
