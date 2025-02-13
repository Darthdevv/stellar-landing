
import MainLayout from "./layouts/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home  from "./pages/Home";
import About from "./pages/About";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", index: true, element: <Home /> },
        { path: "about",  element: <About /> },
        { path: "*",  element: <NotFound />}
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
