import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Lottie_1 from "../screens/Lottie_1";
import Lottie_2 from "../screens/Lottie_2";
import Lottie_3 from "../screens/Lottie_3";
import Lottie_4 from "../screens/Lottie_4";
import Lottie_5 from "../screens/Lottie_5";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lottie_1" component={Lottie_1} />
        <Tab.Screen name="Lottie_2" component={Lottie_2} />
        <Tab.Screen name="Lottie_3" component={Lottie_3} />
        <Tab.Screen name="Lottie_4" component={Lottie_4} />
        <Tab.Screen name="Lottie_5" component={Lottie_5} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNav;
