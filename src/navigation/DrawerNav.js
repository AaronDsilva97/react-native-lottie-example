import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "./BottomTabNav";
import Lottie_1 from "../screens/Lottie_1";
import Lottie_2 from "../screens/Lottie_2";
import Lottie_3 from "../screens/Lottie_3";
import Lottie_4 from "../screens/Lottie_4";
import Lottie_5 from "../screens/Lottie_5";
import Lottie_6 from "../screens/Lottie_6";
import Lottie_7 from "../screens/Lottie_7";
import Lottie_8 from "../screens/Lottie_8";
import Lottie_9 from "../screens/Lottie_9";
import Lottie_10 from "../screens/Lottie_10";
import Lottie_11 from "../screens/Lottie_11";
import Lottie_12 from "../screens/Lottie_12";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
        }}
      >
        <Drawer.Screen name="Home" component={BottomTabNav} />
        <Drawer.Screen name="Lottie_1" component={Lottie_1} />
        <Drawer.Screen name="Lottie_2" component={Lottie_2} />
        <Drawer.Screen name="Lottie_3" component={Lottie_3} />
        <Drawer.Screen name="Lottie_4" component={Lottie_4} />
        <Drawer.Screen name="Lottie_5" component={Lottie_5} />
        <Drawer.Screen name="Lottie_6" component={Lottie_6} />
        <Drawer.Screen name="Lottie_7" component={Lottie_7} />
        <Drawer.Screen name="Lottie_8" component={Lottie_8} />
        <Drawer.Screen name="Lottie_9" component={Lottie_9} />
        <Drawer.Screen name="Lottie_10" component={Lottie_10} />
        <Drawer.Screen name="Lottie_11" component={Lottie_11} />
        <Drawer.Screen name="Lottie_12" component={Lottie_12} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
