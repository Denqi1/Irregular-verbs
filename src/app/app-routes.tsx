import { BrowserRouter, Route, Routes, RoutesProps } from "react-router";
import App from "./app";
import { ReactElement, ReactNode } from "react";

const AppRoutes = (props: RoutesProps) => {
  const { children } = props;

  return (
    <BrowserRouter>
      <Routes>{children}</Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
