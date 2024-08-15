import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../layout/main_layout/MainLayout';
import Home from "../component/Home/Home";

export const router = createBrowserRouter([
    {
        path:"/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            }
        ]
    }
])