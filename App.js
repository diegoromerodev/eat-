import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <View style={styles.container}>
          <View
            style={{ backgroundColor: "#2d3", padding: 20, borderRadius: 10 }}
          >
            <Text>How are you!</Text>
          </View>
          <Text>Do that thing!</Text>
        </View>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2df",
    alignItems: "center",
    justifyContent: "center",
  },
});
