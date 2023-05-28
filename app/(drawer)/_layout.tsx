import React from "react";
import { withLayoutContext } from "expo-router";
import { createDrawerNavigator } from "@react-navigation/drawer";

const DrawerNavigator = createDrawerNavigator().Navigator;
const Drawer = withLayoutContext(DrawerNavigator);

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name='(tabs)'
        options={{ headerShown: false, title: "Home" }}
      />
      <Drawer.Screen name='bookmark/index' options={{ title: "Bookmarks" }} />
      <Drawer.Screen
        name='twitter-blue/index'
        options={{ title: "Twitter Blue" }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
