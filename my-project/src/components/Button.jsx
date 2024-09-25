export default function Button({ title }) {
  return (
    <button className="border-2 py-2 px-6 border-blue-500 hover:border-yellow-400  font-semibold  rounded transition duration-300 text-blue-500">
      {title}
    </button>
  );
}
