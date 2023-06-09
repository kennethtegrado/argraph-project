import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import "./index.css";

import {
    AxiomaticSystemPage,
    ChallengesPage,
    HomePage,
    OpeningPage,
    ValidatingArgument,
    ValidityPage,
} from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "axiomatic-system", element: <AxiomaticSystemPage /> },
            { path: "validating-argument", element: <ValidatingArgument /> },
        ],
    },
    { path: "/opening", element: <OpeningPage /> },
    { path: "/validity", element: <ValidityPage /> },
    { path: "/challenges", element: <ChallengesPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
