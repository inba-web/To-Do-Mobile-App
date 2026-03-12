import { View, Text } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme'
import { createSettingsStyles } from '@/assets/styles/settings.style';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const ProgressStats = () => {
    const {colors} = useTheme();
    const settingssStyle = createSettingsStyles(colors);

    const todos = useQuery(api.todos.getTodos);
    const totalTodos = todos ? todos.length : 0;
    const completedTodos = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
    const activeTodos = totalTodos - completedTodos;


  return (
    <LinearGradient colors={colors.gradients.surface} style={settingssStyle.section}>
        <Text style={settingssStyle.sectionTitle}>Progress State</Text>

        <LinearGradient colors={colors.gradients.background style={[settingssStyle.statCard,{borderLeftColor: colors.primary}]}}>
            <View style={settingssStyle.statIconContainer}>
                <LinearGradient colors={colors.gradients.primary} style={settingssStyle.statIcon}>
                    <Ionicons name='list' size={20} color="#fff" />
                </LinearGradient>
            </View>
        </LinearGradient>
        
    </LinearGradient>
  )
}

export default ProgressStats