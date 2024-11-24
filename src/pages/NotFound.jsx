import { Link } from "react-router-dom";

export default function NotFound({ error, descriptions }) {
  return (
    <main className="container mx-auto my-16 px-4 text-center">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">{error}</h2>
        <p className="text-gray-600 mb-6">{descriptions}</p>

        <div className="flex justify-center space-x-4 sm:flex-col sm:space-x-0 sm:gap-4">
          <Link
            to={"/"}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Просмотреть все курсы
          </Link>
          <Link
            to={"/"}
            className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
          >
            Перейти на домашнюю страницу
          </Link>
        </div>
      </div>
    </main>
  );
}
