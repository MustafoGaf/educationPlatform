import courses from "../data/courses.js";
import CourseCart from "../components/CourseCart";
export default function HomePage() {
  return (
    <>
      <main className="p-8">
        {courses.map((group) => (
          <section className="mb-8" key={group.group_id}>
            <h2 className="text-2xl font-semibold mb-4">{group.group_name}</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              {group.courses.map((course) => (
                <CourseCart
                  key={course.course_id}
                  name={course.name}
                  description={course.descriptions}
                  course_id={course.course_id}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
