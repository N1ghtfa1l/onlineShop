import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes/routes";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const AppRouter = () => {
  const isAuth = useSelector((state: RootState) => state.authUser.auth);
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route path={path} element={<Component />} key={path} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
