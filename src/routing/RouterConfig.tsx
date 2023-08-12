import { RouteProps } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

/* eslint-disable no-unused-vars */
export enum AppRoutes {
  MAIN = "main",
  NOT_FOUND_PAGE = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.NOT_FOUND_PAGE]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.NOT_FOUND_PAGE]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
