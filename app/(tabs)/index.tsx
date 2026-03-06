import { createHomeStyles } from "@/assets/styles/home.style";
import { api } from "@/convex/_generated/api";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const {toggleDarkMode, colors} = useTheme();

  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos)
  console.log(todos) 

  const addTodo = useMutation(api.todos.addTodo)
  const clearAllTodo = useMutation(api.todos.deleteAllTodos)

  return (
    <View style={homeStyles.container}>
      <Text>Hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the Dark Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => addTodo({ text: "Walk the Dog"})}>
        <Text>Add the new Todo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => clearAllTodo()}>
        <Text>Clear All the Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

