import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../layout/main_layout/MainLayout';

export const router = createBrowserRouter([
    {
        path:"/",
        element : <MainLayout></MainLayout>,
        children : [
            
        ]
    }
])