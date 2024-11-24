import { Link } from "react-router-dom";

export default function CourseCart({ name, description, course_id }) {
  return (
    <Link to={"course/" + course_id}>
      <div className="bg-white p-4 shadow-md rounded soya h-[110px] mb:h-[150px]">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}
