import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>

      <header className="bg-blue-600 text-white p-4">
        <Link to={'/'}>
        <h1 className="text-3xl text-center">Платформа онлайн образования</h1>
        </Link>
        </header>

      <Outlet />
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Web Design Course</p>
    </footer>
    </>
  )
};

export default Layout;