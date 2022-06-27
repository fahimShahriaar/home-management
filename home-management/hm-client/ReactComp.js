import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ReactComp({ navigation }) {
  return (
    <View
      style={{
        padding: 4,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ marginVertical: 20, fontSize: 20 }}>
        Welcome to your Dashboard!
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={{ width: "30%", marginTop: 20 }}>
          <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
