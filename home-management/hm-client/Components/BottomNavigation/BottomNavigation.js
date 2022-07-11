import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function BottomNavigation({ navigation }) {
  const handleActivityLog = () => {
    console.log("activity log");
    navigation.navigate("ActivityLog");
  };
  return (
    <View style={styles.bottomNavigationContainer}>
      <Pressable
        style={styles.navItem}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <View>
          <Ionicons
            name="ios-home-outline"
            size={15}
            style={styles.iconStyle}
          />
          <Text style={styles.navItemTitle}>Dashboard</Text>
        </View>
      </Pressable>
      <Pressable style={styles.navItem} onPress={handleActivityLog}>
        <View>
          <SimpleLineIcons name="note" size={15} style={styles.iconStyle} />
          <Text style={styles.navItemTitle}>Activity Log</Text>
        </View>
      </Pressable>
      <View style={styles.navItem}>
        <AntDesign name="profile" size={15} style={styles.iconStyle} />
        <Text style={styles.navItemTitle}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNavigationContainer: {
    height: "90%",
    borderWidth: 1,
    margin: 5,
    padding: 5,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
  },
  navItem: {
    flex: 1,
  },
  iconStyle: {
    color: "black",
    textAlign: "center",
  },
  navItemTitle: {
    textAlign: "center",
  },
});
