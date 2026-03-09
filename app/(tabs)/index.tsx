import { createHomeStyles } from "@/assets/styles/home.style";
import useTheme from "@/hooks/useTheme";
import React from "react";
import { Text, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const homeStyles = createHomeStyles(colors);


  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />
        <TodoInput />
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle the Dark Mode</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
