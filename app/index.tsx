import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const CustomHeaderLeft = ({ navigation }: { navigation: any }) => (
  <TouchableOpacity
    style={styles.iconContainer}
    onPress={() => navigation.toggleDrawer()}
  >
    <Image
      source={require("../assets/images/setting.svg")}
      style={styles.icon}
    />
  </TouchableOpacity>
);

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => <CustomHeaderLeft navigation={navigation} />,
        headerLeft: false
      })}

    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    marginLeft: 10,
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    backgroundColor: "red",
  },
});
