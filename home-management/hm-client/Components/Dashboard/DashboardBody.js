import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import DashboardStats from "./DashboardStats";
import DashboardOperation from "./DashboardOperation";
import TodaysMealStat from "./TodaysMealStat";

export default function DashboardBody({ userInfo, setUserinfo, navigation }) {
  return (
    <View>
      <ScrollView>
        <DashboardStats userInfo={userInfo} setUserinfo={setUserinfo} />
        <DashboardOperation navigation={navigation} />
        <TodaysMealStat />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
