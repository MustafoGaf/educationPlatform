import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/lessons.js";
import NotFound from "./NotFound.jsx";
import VideoComponent from "../components/VideoComponent.jsx";
import LessonComponent from "../components/LessonComponent.jsx";
import Pagination from "../components/Pagination.jsx";
export default function LessonPage() {
  const { id, lesson } = useParams();
  const [lessons, setLessons] = useState();
  const [curLes, setCurLes] = useState();
  function getLessons() {
    const course = data.filter((c) => c.course_id == id);
    const les = course[0].lessons.filter((l) => l.id == lesson);
    if (course.length > 0 && les.length > 0) {
      setLessons(course);
      setCurLes(les);
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    getLessons()
  }, [id, lesson]);

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
      <section className="mb-8">
        <p className="text-gray-600 mb-4">
          <Link to={"/"}>Главная &#10095;</Link>
          <Link to={"/course/" + id} className="ml-2">
            {lessons[0].name} &#10095;
          </Link>
          <Link to={`/course/${id}/${lesson}`} className="ml-2">
            {curLes[0].name}
          </Link>
        </p>
        <section className="flex flex-col items-center justify-around">
          <VideoComponent
            has_video={curLes[0].has_video}
            src_video={curLes[0].src_video}
          />
        </section>
      </section>

      <section className="flex flex-col items-center justify-around">
        <LessonComponent
          lesson={lesson}
          content={curLes[0].content}
          description={curLes[0].description}
        />
        <Pagination id={id} next={curLes[0].next} prev={curLes[0].prev} />
      </section>
    </main>
  );
}
