import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Layout/Main";
import Home from "../Home/Home";
import MyAppointment from "../MyOrder/MyOrder";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://car-server-site-chi.vercel.app/product"),
      },
      {
        path: "/order",
        element: <MyAppointment />,
      },
    ],
  },
]);

export default router;
