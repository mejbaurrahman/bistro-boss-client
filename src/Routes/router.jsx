import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Secret from "../Components/Secret/Secret";
import Dashbord from "../Layouts/Dashbord/Dashbord";
import MyCart from "../Pages/DashbordPages/MyCart/MyCart";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'menu',
                element:<OurMenu></OurMenu>
            },
            {
                path:'order/:category',
                element:<Order></Order>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            },
            {
                path:'secret',
                element:<PrivateRouter><Secret></Secret></PrivateRouter>
            }
        ]
    },
    {
        path:'/dashbord',
        element:<PrivateRouter><Dashbord></Dashbord></PrivateRouter>,
        children:[
            {
                path:'mycart',
                element:<MyCart></MyCart>
            }
        ]
    }
])