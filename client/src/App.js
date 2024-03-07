import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Data from "./pages/data";
import Login from './pages/login';
import Registor from "./pages/registor";
import Train from "./pages/train";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Data/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/registor",
    element: <Registor/>
  },
  {
    path:"/newtrain",
    element: <Train/>
  }
]);

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
