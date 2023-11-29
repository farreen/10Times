import DefaultLayout from "../../../layout/DefaultLayout.jsx";
import Events from "../pages/Events.jsx";

export const HomePageRouter = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Events/> },
    ],
  },
];