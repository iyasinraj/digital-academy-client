import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Main from "../Layouts/Main";
import About from "../components/Pages/About/About";
import Contact from "../components/Pages/Contact/Contact";
import Courses from "../components/Pages/Courses/Courses/Courses";
import Success from "../components/Pages/Success/Success";
import Events from "../components/Pages/Events/Events";
import Login from "../components/Pages/Authentication/Login/Login";
import Registration from "../components/Pages/Authentication/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/Pages/Profile/Dashboard/Dashboard";

export const routes = createBrowserRouter([
    {path: '/', element:<Main></Main>, children: [
        {
            path: '/',
            loader: async () => {
                return fetch('https://digital-academy-server.vercel.app/category')
            } ,
            element: <Home></Home>
        },
        {
            path: 'courses',
            loader: async() =>{
                return fetch('https://digital-academy-server.vercel.app/courses')
            },
            element:<Courses></Courses>},
        {path: 'about', element: <About></About>},
        {
            path: 'success',
            loader: async () => {
                return fetch('https://digital-academy-server.vercel.app/category')
            } ,
            element: <Success></Success>
        },
        {path: 'events', element: <Events></Events>},
        {path: 'contact', element: <Contact></Contact>},
        {path: 'profile', element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> },
        {path: 'login', element: <Login></Login>},
        {path: 'register', element: <Registration></Registration>}
    ]}
])