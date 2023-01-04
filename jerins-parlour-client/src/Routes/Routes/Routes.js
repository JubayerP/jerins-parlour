import { createBrowserRouter } from 'react-router-dom';
import Booking from '../../Layouts/Booking';
import DashboardLayout from '../../Layouts/DashboardLayout';
import Main from '../../Layouts/Main';
import Bookings from '../../Pages/Booking/Bookings';
import MyOrders from '../../Pages/Dashboard/MyOrders';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: '/booking',
        element: <Booking />,
        children: [
            {
                path: '/booking/:id',
                element: <Bookings />,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard/myorders',
                element: <MyOrders />
            }
        ]
    }
])