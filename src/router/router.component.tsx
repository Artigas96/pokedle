import React from "react";
import { Route, Routes, useLocation, Navigate, Outlet } from "react-router-dom";
import { routePath } from "./routes";
import { HomeScene } from "../scenes/home";
import { NormalGameScene } from "../scenes/games";

export const RouterComponent: React.FC = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route
        path={routePath.home}
        element={
          <React.Suspense>
            <HomeScene />
          </React.Suspense>
        }
      />
      <Route path={routePath.games.root} element={<Outlet />}>
        <Route path={""} element={<Navigate to={routePath.games.normal} />} />
        <Route
          path={routePath.games.normal}
          element={
            <React.Suspense>
              <NormalGameScene />
            </React.Suspense>
          }
        />
        <Route path={"*"} element={<Navigate to={routePath.games.normal} />} />
      </Route>
      <Route path="*" element={<Navigate to={routePath.home} />} />
    </Routes>
  );
};
