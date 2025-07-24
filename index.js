import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";

import Header from "./components/Header";
import Home from "./components/Home";
import Error from "./components/Error";
import CountryDetail from "./components/CountryDetail";

import { createBrowserRouter, RouterProvider} from "react-router";




// let router = createBrowserRouter([
//   {
//     path: "/",
//     element:<div>Hellow world</div>,
//   },
// ]);


let router =  createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/' ,
        element:<Home/>
      },
      
       {
        path: "/:country",
        element:<CountryDetail/>
      },
    ],
  },
  
]);

const root = createRoot(document.querySelector("#root"));

root.render(
   <RouterProvider router={router}/>
  
);
