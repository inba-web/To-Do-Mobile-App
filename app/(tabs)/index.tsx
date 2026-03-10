import { createHomeStyles } from "@/assets/styles/home.style";
import useTheme from "@/hooks/useTheme";
import React from "react";
import { Text, TouchableOpacity, StatusBar, FlatList, View, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Ionicons } from '@expo/vector-icons'
import { Doc, Id } from "@/convex/_generated/dataModel";

type Todo = Doc<"todos">;

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);
  const toggleTodo = useMutation(api.todos.toggleTodo);

  const isLoading = todos === undefined;

  if (isLoading) return <LoadingSpinner />;

  const handleToggleTodo= async (id:Id<"todos">) => {
    try {
      await toggleTodo({id})
    } catch (error) {
      console.log("Error toggling todo", error);
      Alert.alert("Error", "failed to toggle todo");
    }
  }

  const renderTodoItem = ({ item }: { item: Todo }) => {
    return (
      <View style={homeStyles.todoItemWrapper}>
        <LinearGradient
          colors={colors.gradients.surface}
          style={homeStyles.todoItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity
            style={homeStyles.checkbox}
            activeOpacity={0.7}
            onPress={() => handleToggleTodo(item._id)}
          >
            <LinearGradient
              colors={
                item.isCompleted
                  ? colors.gradients.success
                  : colors.gradients.muted
              }
              style={[
                homeStyles.checkboxInner,
                {
                  borderColor: item.isCompleted
                    ? "transparent"
                    : colors.border,
                },
              ]}
            >
              {item.isCompleted && <Ionicons name="checkmark" size={28} color="#ead6d6" />}
            </LinearGradient>
          </TouchableOpacity>

          <View>
            <Text style={[homeStyles.todoText,item.isCompleted && {textDecorationLine: 'line-through', color: colors.textMuted, opacity: 0.6},]}>
              {item.text}
            </Text>
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />

      <SafeAreaView style={homeStyles.safeArea}>
        <Header />

        <TodoInput />

        <FlatList
          data={todos || []}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item._id}
          style={homeStyles.todoList}
          contentContainerStyle={homeStyles.todoListContent}
        />

        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle the Dark Mode</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
