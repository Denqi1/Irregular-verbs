import { BrowserRouter, Routes, RoutesProps } from "react-router";

const AppRoutes = (props: RoutesProps) => {
  const { children } = props;

  return (
    <BrowserRouter>
      <Routes>{children}</Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
