import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { FactsPage } from "./pages/Facts/facts";
import { BeansPage } from "./pages/Beans/bean";
import { RecipesPage } from "./pages/Recipes";
import { CombinationsPage } from "./pages/Combinations";
import { Home } from "./pages/Home/Home";
import { HistoryPage } from "./pages/History";
import { NotFound } from "./pages/NotFound/NotFound";
import { Loader } from "./components/Loader/Loader";
import { BeanPage } from "./pages/BeanPage/beanPage";
import Review from "./pages/Review/review";

export const router = createBrowserRouter([
  {
    path: "/module-18",
    element: <Layout />,
    loader: Loader,
    children: [
      {
        index: true,
        element: <Home /> },
      {
        path: "beans",
        element: <BeansPage />,
      },
      {
        path: "bean/:id",
        element: <BeanPage />,
      },
      {
        path: "facts",
        element: <FactsPage />,
      },
      {
        path: "recipes",
        element: <RecipesPage /> },
      {
        path: "history",
        element: <HistoryPage /> },
      {
        path: "combinations",
        element: <CombinationsPage />,
      },
      {
        path: "review",
        element: <Review />
      },
      {
        path: "*",
        element: <NotFound /> }
      ,
    ],
  },
]);
