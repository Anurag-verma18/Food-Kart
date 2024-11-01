
  import React, { lazy, Suspense } from "react";
  import ReactDOM from "react-dom/client";
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import Home from "./components/Home";
  import Error from "./components/Error";
  import RestaurantMenu from "./components/RestaurantMenu";
  import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
  import {Provider} from "react-redux";
  import appStore from "./utils/appStore";
  import Cart from "./components/Cart";
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import ShimmerHome from "./components/ShimmerHome";

    const Body = lazy(() => import("./components/Body"));
    
    const AppLayout = () => {
      return (
        <Provider store={appStore} >
            <div className="overflow-hidden">
              <ToastContainer style={{ width: "300px" }}/>
              <Header />
              <Outlet />
              <Footer />
            </div>
        </Provider>
      )
    };

    const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <AppLayout />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/restaurants",
            element: <Suspense fallback={<ShimmerHome />}>
                        <Body />
                     </Suspense>
          },
          {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />
          },
          {
            path: "/cart",
            element: <Cart />
          },
        ],
        errorElement: <Error />,
      },
    ]);
    
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<RouterProvider router = {appRouter} />);
