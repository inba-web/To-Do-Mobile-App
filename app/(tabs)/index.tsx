import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const {toggleDarkMode, } = useTheme();

  const todos = useQuery(api.todos.getTodos)
  console.log(todos) 

  const addTodo = useMutation(api.todos.addTodo)
  const clearAllTodo = useMutation(api.todos.deleteAllTodos)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your App 🚀</Text>
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