import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <>
    <StatusBar backgroundColor="black" barStyle="light-content" />
    <Text>In progress</Text>
  </>
);

export default AuthRoutes;
