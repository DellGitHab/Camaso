import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Register from "./Register";
import Signin from "./signin";

const router = createBrowserRouter([

    {
        path: '/',
        element: <App />
    },

    {
        path: '/register',
        element: <Register />
    },

    {
        path: '/signin',
        element: <Signin />
    }
])

export default router