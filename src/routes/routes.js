import React, { useContext } from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import AppAuthContext from "../contexts/app.auth";
import { View, ActivityIndicator } from "react-native";

export default function Routes() {
  const { signed, loading } = useContext(AppAuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={50} color="black" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
