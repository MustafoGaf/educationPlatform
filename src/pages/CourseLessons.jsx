import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/lessons.js";
import NotFound from "./NotFound.jsx";
import LessonCart from "../components/LessonCart.jsx";

export default function CourseLessons() {
  const { id } = useParams();
  const [lessons, setLessons] = useState();
  useEffect(() => {
    window.scrollTo(0,0)
    const course = data.filter((c) => c.course_id == id);

    if (course.length > 0) {
      setLessons(course);
    }
  }, [id]);
  if (!lessons) {
    return (
      <NotFound
        error={"Упс! Курс, который вы ищете, не существует."}
        descriptions={
          "Кажется, курс, к которому вы пытаетесь получить доступ, недоступен или был удален. Проверьте URL или вернитесь на страницу курсов, чтобы найти то, что вам нужно."
        }
      />
    );
  }
  return (
    <main className="container mx-auto my-8 px-4">
      <section>
        <p className="text-gray-600 mb-4">
          <Link to={"/"}>Главная &#10095;</Link>
          <Link to={"/course/" + id} className="ml-2">
            {lessons[0].name}
          </Link>
        </p>
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">
          Все урокы {lessons[0].name}
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {lessons[0].lessons.map((les) => (
            <LessonCart
              name={les.name}
              descritions={les.description}
              id_course={id}
              id_lesson={les.id}
              key={les.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
