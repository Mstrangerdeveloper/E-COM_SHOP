import CartPage from "./pages/CartPage";
import CheakOutPage from "./pages/CheakOutPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SignupPage from "./pages/SignupPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/login",
      element: <LoginPage></LoginPage>,
    },
    {
      path: "/signup",
      element: <SignupPage></SignupPage>,
    },

    {
      path: "/cart",
      element: <CartPage></CartPage>,
    },

    {
      path: "/cheakOut",
      element: <CheakOutPage></CheakOutPage>,
    },

    {
      path: "/productDetails",
      element: <ProductDetailsPage></ProductDetailsPage>,
    },


    

    
  ]);
  return (
    <h1 className="text-3xl font-bold underline ">
      <RouterProvider router={router} />
    </h1>
  );
}
