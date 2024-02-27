
  import React, { lazy, Suspense } from "react";
  import ReactDOM from "react-dom/client";
  import Header from "./components/Header";
  import Home from "./components/Home";
  import About from "./components/About";
  //import Body from "./components/Body";
  import Contact from "./components/Contact";
  //import Grocery from "./components/Grocery";
  import Error from "./components/Error";
  import RestaurantMenu from "./components/RestaurantMenu";
  import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
  import {Provider} from "react-redux";
  import appStore from "./utils/appStore";
  import Cart from "./components/Cart";

    const Grocery = lazy(() => import("./components/Grocery"));
    const Body = lazy(() => import("./components/Body"));
    
    const AppLayout = () => {
      return (
        <Provider store={appStore} >
            <div className="app">
              <Header />
              <Outlet />
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
            element: <Suspense>
                        <Body />
                     </Suspense>
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/grocery",
            element: <Suspense fallback={<h1>Loading....</h1>}>
                        <Grocery />
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
