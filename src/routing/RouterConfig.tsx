import { RouteProps } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { CoinsPage } from "../pages/Coins";

/* eslint-disable no-unused-vars */
export enum AppRoutes {
  MAIN = "main",
  COINS = "coins",

  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.COINS]: "/coins",

  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.COINS]: {
    path: RoutePath.coins,
    element: <CoinsPage />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
