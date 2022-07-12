import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MealOperation from "./MealOperation";
import UtilityOperation from "./UtilityOperation";

export default function DashboardOperation({ navigation }) {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
          marginBottom: 10,
          color: "green",
          fontWeight: "bold",
        }}
      >
        Dashboard Operation
      </Text>
      <MealOperation navigation={navigation} />
      <UtilityOperation />
    </View>
  );
}

const styles = StyleSheet.create({});
