export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border py-2 rounded-full w-full mb-4 px-4"
    />
  );
}
