export default function Button({ variant = "primary", children }) {
  const styles = {
    like: "px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md",
    more: "px-4 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 shadow-md",
    less: "px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 shadow-md",
  };

  return <button className={styles[variant]}>{children}</button>;
}
