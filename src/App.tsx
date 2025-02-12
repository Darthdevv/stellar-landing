
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", index: true, element: <Home /> },
        { path: "/about", index: true, element: <Home /> },
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
