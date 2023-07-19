import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/test",
    element: <div>This is test</div>,
  },
]);

function App() {
  return (
    <div className="App">
      <Home />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
