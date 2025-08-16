// src/routes/index.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/Home";
// אפשר להוסיף דפים נוספים בהמשך:
// import Diagnostics from "../pages/Diagnostics";
// import Movers from "../pages/Movers";
// import Contact from "../pages/Contact";

import AdminDashboard from "../pages/AdminDashboard";
import Offers from "../pages/Offers";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/diagnostics", element: <Diagnostics /> },
      // { path: "/movers", element: <Movers /> },
      // { path: "/contact", element: <Contact /> },
      { path: "/admin", element: <AdminDashboard /> },
      { path: "/offers/:requestId", element: <Offers /> },
    ],
  },
]);
