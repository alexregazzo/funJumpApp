import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { AppAuthProvider } from "./contexts/app.auth";
import Routes from "./routes/routes";

export default function AuthDashboardScreen() {
  return (
    <NavigationContainer>
      <AppAuthProvider>
        <Routes />
      </AppAuthProvider>
    </NavigationContainer>
  );
}
