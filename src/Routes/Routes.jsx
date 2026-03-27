import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Error from '../pages/Root/Error/Error';
import Home from '../pages/Root/Home/Home';
import Apps from '../pages/Root/Apps/Apps';
import AppDetails from "../pages/Root/App/AppDetails";
import MyInstallations from "../pages/Root/Installation/MyInstallations";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/apps",
        Component: Apps
      },
      {
        path: "/app/:id",
        Component: AppDetails
      },
      { path: "/my-installations",
       Component: MyInstallations 
      }
    ]
  }
]);