import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Bookride from "./pages/bookride/Bookride";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
// import Sone from "./pages/s1/Sone";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          // element: <Sone />
          // element: <Bookride />
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

