export default function Button({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-orange-500 hover:bg-orange-600  text-white py-2 px-4 rounded-md mr-2"
    >
      {title}
    </button>
  );
}