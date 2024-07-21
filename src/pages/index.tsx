import Home from "./Home";
import Upload from "./Upload";

import routes from "./routes";

export default [
  {
    path: routes.index,
    element: <Home />
  },
  {
    path: routes.Upload,
    element: <Upload />
  }
];
