import React, { JSX } from "react";
import { navigationStyles } from "../styles";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pages } from "../utils/constants";
import { logoutMessages } from "../utils/messages";
import { createDrawerNavigator } from "@react-navigation/drawer";

/**
 * Nivel de navegacion post logueo, usuario autenticado
 */
const PrivateRouter = () => {
  const PrivateMenu = createDrawerNavigator();
  console.log("private 1");
  return (
    <PrivateMenu.Navigator
      initialRouteName={Pages.MANAGEMENTROUTER}>
      <PrivateMenu.Screen
        name={Pages.MANAGEMENTROUTER}
        component={BottomRouter}
      />
    </PrivateMenu.Navigator>
  );
}


const BottomRouter = (): JSX.Element => {
  const BottomMenu = createBottomTabNavigator();
  console.log("botom 1");
  return (
    <BottomMenu.Navigator
      initialRouteName={Pages.MANAGEMENTROUTER}
      backBehavior="none"
      screenOptions={{
        headerShown: false,
        tabBarStyle: [{ display: "flex" }, null],
        ...navigationStyles.tabBarMenu,
      }}>
      <BottomMenu.Screen
        name={Pages.MANAGEMENTROUTER}
        component={() => <View><Text>ruter maganement</Text></View>}
        options={{
          tabBarLabel: "Inicio",
        }}
      />
      <BottomMenu.Screen
        name={Pages.BALANCEROUTER}
        component={() => <View><Text>balance router</Text></View>}
        options={{
          tabBarLabel: "Monedas",
        }}
      />
      <BottomMenu.Screen
        name={Pages.LOGOUTPAGE}
        component={() => <View><Text>logout</Text></View>}
        options={{
          tabBarLabel: logoutMessages.title,
        }}
      />
    </BottomMenu.Navigator>
  );
};

export default PrivateRouter;