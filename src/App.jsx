import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import CourseLessons from "./pages/CourseLessons";
import LessonPage from "./pages/LessonPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="course/:id" element={<CourseLessons />} />
          <Route path="course/:id/:lesson" element={<LessonPage />} />
          <Route path="/lesson" element={<LessonPage />} />

          <Route
            path="*"
            element={
              <NotFound
                error="404 Not Found :)"
                descriptions={
                  "Извините, но страница, которую вы ищете, не существует."
                }
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
