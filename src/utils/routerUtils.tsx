import { Suspense } from "react";
import { ROUTER_DATA } from "./dataUtils";
import { IRouterType } from "./typeUtils";
import { Route, Routes } from "react-router-dom";
import LoadingPage from "@pages/loading";

const renderroutes = (routes: IRouterType[]) => {
  return routes.map(({ title, path, element, children = [] }) => {
    return (
      <Route key={title} path={path} element={element}>
        {children.length > 0 && <Route>{renderroutes(children)}</Route>}
      </Route>
    );
  });
};

const PageRouter = () => {
  const PAGE_ROUTER = renderroutes(ROUTER_DATA);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>{PAGE_ROUTER}</Routes>
    </Suspense>
  );
};

export default PageRouter;
