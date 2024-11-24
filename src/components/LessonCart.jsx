import { Link } from "react-router-dom";

export default function LessonCart({
  name,
  descritions,
  id_course,
  id_lesson,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow h-[200px] lg:h-[250px] sm:h-auto">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4 h-[80px] lg:h-[100px] sm:h-auto">{descritions}</p>
      <Link
        to={`/course/${id_course}/${id_lesson}`}
        className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Перейти к курс
      </Link>
    </div>
  );
}
