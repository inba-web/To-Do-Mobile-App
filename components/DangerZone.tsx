import { View, Text, Alert, TouchableOpacity, Settings } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme'
import { createSettingsStyles } from '@/assets/styles/settings.style';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const DangerZone = () => {
    const {colors} = useTheme();
    const settingStyle = createSettingsStyles(colors);

    const clearAllTodos = useMutation(api.todos.deleteAllTodos);

    const handleResetApp = async () => {
        Alert.alert(
            "Reset App",
            "This will delete All your todos permanently. Are you sure you want to proceed?",
            [
                {text: "Cancel", style:"cancel"},
                {
                    text: "Delete All",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            const result = await clearAllTodos();
                            Alert.alert(
                                "App Reset",
                                `Successfully deleted ${result.deletedCount} todo${result.deletedCount === 1 ? "" : "s"}.Your App has been reset.`
                            );
                        } catch (error) {
                            console.log("Error deleting all todos", error);
                            Alert.alert("Error", "Failed to reset App");
                        }
                    }
                }
            ]
        )
    }

  return (
    <LinearGradient style={settingStyle.section} colors={colors.gradients.surface}>
        <Text style={settingStyle.sectionTitleDanger}>Danger Zone</Text>

        <TouchableOpacity style={[settingStyle.actionButton, {borderBottomWidth: 0}]} onPress={handleResetApp} activeOpacity={0.7}>
            <View style={settingStyle.actionLeft}>
                <LinearGradient colors={colors.gradients.danger} style={settingStyle.actionIcon}>
                    <Ionicons name='trash' size={18} color="#ffffff" />
                </LinearGradient>
                <Text style={settingStyle.actionTextDanger}>Reset App</Text>
            </View>
            <Ionicons name='chevron-forward' size={18} color={colors.textMuted} />
        </TouchableOpacity>
    </LinearGradient>
  )
}

export default DangerZone