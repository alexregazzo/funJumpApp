import React from "react";
import { StatusBar } from "react-native";
import DashboardPage from "../pages/dashboard";

const AppRoutes = () => {
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <DashboardPage />
    </>
  );
};

export default AppRoutes;
