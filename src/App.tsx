import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LyricsPage from "./pages/LyricsPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/lyrics",
      element: <LyricsPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
