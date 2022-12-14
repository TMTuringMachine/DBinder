import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { CircularProgress } from "@mui/material";

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <CircularProgress
          sx={{
            ...{
              width: 1,
              zIndex: 9999,
              position: "fixed",
              top: "50vh",
              left: "50vw",
            },
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/verify/:id",
      element: <VerifyOTP />,
    },
    {
      path: "/reader",
      element: <MainLayout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "books/:id",
          element: <SingleBook />,
        },
        {
          path:"bookView/:bookID",
          element:<BookView/>
        }
      ],
    },
    {
      path: "/writer",
      element: <WriterLayout />,
      children: [
        {
          path: "home",
          element: <WriterHome />,
        },
      ],
    },
  ]);
}

//layouts
const MainLayout = Loadable(
  lazy(() => import("../layouts/mainLayout/mainLayout.component"))
);

const WriterLayout = Loadable(
  lazy(() => import("../layouts/writerLayout/writerLayout.component"))
);

const Landing = Loadable(
  lazy(() => import("../pages/landing/landing.component"))
);

const Home = Loadable(lazy(() => import("../pages/home/home.component")));

const WriterHome = Loadable(
  lazy(() => import("../pages/home/writerHome.component"))
);

const VerifyOTP = Loadable(
  lazy(() => import("../pages/landing/verify.component"))
);

const SingleBook = Loadable(
  lazy(() => import("../pages/book/SingleBook.component"))
);

const BookView = Loadable(
  lazy(() => import("../pages/book/Book.view"))
);