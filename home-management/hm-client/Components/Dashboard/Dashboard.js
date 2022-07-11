import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../../Store/AppContext";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import DashboardBody from "./DashboardBody";

export default function Dashboard({ navigation }) {
  const { userInfoState } = useContext(AppContext);
  const [userInfo, setUserInfo] = userInfoState;
  console.log("userInfo", userInfo);
  return (
    <View style={{ flex: 1 }}>
      <Text>Dashboard</Text>
      <View style={styles.dashboardContainer}>
        <DashboardBody userInfo={userInfo} setUserInfo={setUserInfo} />
      </View>
      <View style={{ height: "10%", borderWidth: 1, marginBottom: 2 }}>
        <BottomNavigation navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dashboardContainer: {
    borderWidth: 1,
    margin: 5,
    flex: 1,
    // backgroundColor: "white",
  },
});
