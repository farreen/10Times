import DefaultLayout from "../../../layout/DefaultLayout.jsx";
import EventListing from "../pages/EventListing.jsx";

export const ListPageRouter = [
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            { path: "eventList", element: < EventListing /> },
        ],
    },
];