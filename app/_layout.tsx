import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return <Stack> 
    <Stack.Screen name="(tabs)" options={{title: "Home"}} />
  </Stack>
}
