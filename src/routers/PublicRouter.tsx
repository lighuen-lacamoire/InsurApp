import React, { JSX } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationStyles } from "../styles";
import { navigationMessages } from "../utils/messages";
import { Pages } from "../utils/constants";
import { Text, View } from "react-native";

/**
 * Nivel de navegacion publico, para el usuario no autenticado
 */
const PublicRouter = (): JSX.Element => {
  const PublicStack = createNativeStackNavigator();
  return (
    <PublicStack.Navigator
      initialRouteName={Pages.LOGINPAGE}
      screenOptions={{
        headerTitleAlign: "center",
        headerLeft: () => null,
        ...navigationStyles.stackContainer,
      }}>
      <PublicStack.Screen
        name={Pages.LOGINPAGE}
        component={() => <View><Text>login</Text></View>}
        options={{ title: navigationMessages.headers.loginPage }}
      />
    </PublicStack.Navigator>
  );
};

export default PublicRouter;