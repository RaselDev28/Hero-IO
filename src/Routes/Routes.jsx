import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Error from '../pages/Root/Error/Error';
import Home from '../pages/Root/Home/Home';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                path:"/",
                Component:Home
            }
        ]
    },
]);