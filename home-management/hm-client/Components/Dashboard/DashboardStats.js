import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DashboardStats({ userInfo, setUserinfo }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.myMeal}>
        <Text style={styles.statText}>My Meal</Text>
        <Text style={styles.statText}>{userInfo?.mealInfo?.totalMeals}</Text>
      </View>
      <View style={styles.myCost}>
        <Text style={styles.statText}>My Cost</Text>
        <Text style={styles.statText}>
          {userInfo?.mealInfo?.totalBazarCost}
        </Text>
      </View>
      <View style={styles.utilityBill}>
        <Text style={styles.statText}>Utility Bill</Text>
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
  statText: {
    color: "#333",
    textAlign: "center",
  },
});
