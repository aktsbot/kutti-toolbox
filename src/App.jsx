import { createBrowserRouter, RouterProvider } from "react-router-dom";

// all pages that go in the main bundle
import IndexPage from "./pages/Index";
import NotFoundPage from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/json",
    lazy: () => import("./pages/JSON"),
  },
  {
    path: "/jwt",
    lazy: () => import("./pages/JWT"),
  },
  {
    path: "/randomstring",
    lazy: () => import("./pages/Randomstring"),
  },
  {
    path: "/uuid",
    lazy: () => import("./pages/UUID"),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
