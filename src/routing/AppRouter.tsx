import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./RouterConfig";
import Card from "../components/UI/Card/Card";
import Loader from "../components/UI/Loader/Loader";

const AppRouter = () => (
  <Card className="page-wrapper">
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
    </Suspense>
  </Card>
);

export default AppRouter;
