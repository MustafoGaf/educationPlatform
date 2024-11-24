export default function LessonComponent({ lesson, description, content }) {
  return (
    
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 sm:text-xl">
          Урок {lesson}: {description}
        </h2>
        <p className="text-gray-700 mb-4">{content}</p>
      </div>
      
  
  );
}