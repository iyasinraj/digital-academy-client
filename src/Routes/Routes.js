import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Main from "../Layouts/Main";
import About from "../components/Pages/About/About";
import Contact from "../components/Pages/Contact/Contact";
import Courses from "../components/Pages/Courses/Courses/Courses";
import Events from "../components/Pages/Events/Events";
import Login from "../components/Pages/Authentication/Login/Login";
import Registration from "../components/Pages/Authentication/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/Pages/Profile/Dashboard/Dashboard";
import PublicRoute from "./PublicRoute";
import CourseDetails from "../components/Pages/Courses/Course/CourseDetails";

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
        {
            path: 'course/:id',
            loader: async({params}) =>{
                return fetch(`https://digital-academy-server.vercel.app/course/${params.id}`)
            },
            element:<CourseDetails></CourseDetails>},
        {path: 'about', element: <About></About>},
        {path: 'events', element: <Events></Events>},
        {path: 'contact', element: <Contact></Contact>},
        {path: 'profile', element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> },
        {path: 'login', element:<PublicRoute><Login></Login></PublicRoute>},
        {path: 'register', element: <PublicRoute><Registration></Registration></PublicRoute>}
    ]}
])