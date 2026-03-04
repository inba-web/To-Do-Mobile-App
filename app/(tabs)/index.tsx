import useTheme from "@/hooks/useTheme";
import { Link } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const {toggleDarkMode, } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your App 🚀</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the Dark Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
  },
});