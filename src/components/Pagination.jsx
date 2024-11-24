import { Link } from "react-router-dom";

export default function Pagination({ id, next, prev }) {
  return (
    <div className="flex justify-between space-x-4 mt-10">
      <button className={`${prev ? "" : "cursor-[no-drop]"}`}>
        {prev ? (
          <Link
            to={`/course/${id}/${prev}`}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition mb:px-4"
          >
            Предыдущый
          </Link>
        ) : (
          <p className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition mb:px-4 ">
            Предыдущый
          </p>
        )}
      </button>
      <button className={`${next ? "" : "cursor-[no-drop]"}`}>
        {next ? (
          <Link
            to={`/course/${id}/${next}`}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mb:px-4"
          >
            Следующие
          </Link>
        ) : (
          <p className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition none mb:px-4">
            Следующие
          </p>
        )}
      </button>
    </div>
  );
}
