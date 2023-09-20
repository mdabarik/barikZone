import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import PracticeLayout from "../Layouts/PracticeLayout/PracticeLayout";
import Problems from "../Components/Problems/Problems";
import Quiz from "../Components/Quiz/Quiz";

const myRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        loader: () => fetch('https://dummyjson.com/products'),
        children: [
            {
                path: '/',
                element: <h1>Home</h1>
            },
            {
                path: '/products',
                element: <h2>Product</h2>
            },
            {
                path: '/products/:prodId',
                element: <h2>Single Product</h2>
            },
            {
                path: '/users',
                element: <h2>Users</h2>
            },
            {
                path: '/users/:userId',
                element: <h2>Single User</h2>
            },
            {
                path: '/dashboard',
                element: <h2>Dashboard</h2>
            },
            {
                path: '/contact',
                element: <h2>Contact Us</h2>
            },
            {
                path: '/services',
                element: <h2>Services now</h2>
            },
            {
                path: '/about',
                element: <h2>About</h2>
            },
            {
                path: '/practice',
                element: <PracticeLayout></PracticeLayout>,
                children: [
                    {
                        path: '',
                        element: <Problems></Problems>
                    },
                    {
                        path: '/practice/:quiz',
                        element: <Quiz></Quiz>
                    }
                ]
            }
        ]
    }
])

export default myRoute;