import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DashboardBody({ userInfo, setUserinfo }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.myMeal}>
        <Text>My Meal</Text>
        <Text>{userInfo?.mealInfo?.totalMeals}</Text>
      </View>
      <View style={styles.myCost}>
        <Text>My Cost</Text>
        <Text>{userInfo?.mealInfo?.totalBazarCost}</Text>
      </View>
      <View style={styles.utilityBill}>
        <Text>Utility Bill</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myMeal: {
    flex: 1,
    backgroundColor: "#e899dc",
    padding: 5,
    marginHorizontal: 2,
    borderRadius: 5,
  },
  myCost: {
    flex: 1,
    backgroundColor: "#9bb1ff",
    padding: 5,
    marginHorizontal: 2,
    borderRadius: 5,
  },
  utilityBill: {
    flex: 1,
    backgroundColor: "#f4d35e",
    padding: 5,
    marginHorizontal: 2,
    borderRadius: 5,
  },
});
