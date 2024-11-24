export default function VideoComponent({ has_video, src_video }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 w-[70%] md:w-[90%] sm:h-[200px] ${
        has_video ? "" : "hidden"
      }`}
    >
      <video controls className="w-full sm:h-[150px] rounded-lg shadow-md">
        <source
          src={`${src_video ? src_video : "lesson1.mp4"}`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
