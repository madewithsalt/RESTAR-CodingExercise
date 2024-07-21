import { 
  createBrowserRouter,
  RouterProvider 
} from "react-router-dom";

import routes from "./pages/index";

const router = createBrowserRouter(routes)

function App() {
  return (
    <div id="main--container" className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
