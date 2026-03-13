import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import useTheme from '@/hooks/useTheme';
import { createSettingsStyles } from '@/assets/styles/settings.style';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import DangerZone from './DangerZone';

const Preferences = () => {

  const[isAutoSync, setIsAutoSync] = useState(true);
  const[isNotificationEnabled, setIsNotification] = useState(true);

  const {isDarkMode, toggleDarkMode, colors} = useTheme();

  const settingsStyle = createSettingsStyles(colors);
  return (
    <LinearGradient colors={colors.gradients.surface} style={settingsStyle.section}>
      <Text style={settingsStyle.sectionTitle}>Preferences</Text>

      {/* DARK MODE */} 
      <View style={settingsStyle.settingItem}>
        <View style={settingsStyle.settingLeft}>
          <LinearGradient colors={colors.gradients.primary} style={settingsStyle.settingIcon}>
            <Ionicons name='moon' size={18} color="#fff" />
          </LinearGradient>
          <Text style={settingsStyle.settingText}>Dark Mode</Text>
        </View>

        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={"#fff"}
          trackColor={{false: colors.border, true: colors.primary}}
          ios_backgroundColor={colors.border}
         />
      </View>

      {/* NOTIFICATIONS */}
       <View style={settingsStyle.settingItem}>
        <View style={settingsStyle.settingLeft}>
          <LinearGradient colors={colors.gradients.warning} style={settingsStyle.settingIcon}>
            <Ionicons name='moon' size={18} color="#fff" />
          </LinearGradient>
          <Text style={settingsStyle.settingText}>Notifications</Text>
        </View>

        <Switch
          value={isNotificationEnabled}
          onValueChange={() => setIsNotification(!isNotificationEnabled)}
          thumbColor={"#fff"}
          trackColor={{false: colors.border, true: colors.warning}}
          ios_backgroundColor={colors.border}
         />
      </View>

      {/* AUTO-SYNC */}
      <View style={settingsStyle.settingItem}>
        <View style={settingsStyle.settingLeft}>
          <LinearGradient colors={colors.gradients.success} style={settingsStyle.settingIcon}>
            <Ionicons name='moon' size={18} color="#fff" />
          </LinearGradient>
          <Text style={settingsStyle.settingText}>Auto Sync</Text>
        </View>

        <Switch
          value={isAutoSync}
          onValueChange={() => setIsAutoSync(!isAutoSync)}
          thumbColor={"#fff"}
          trackColor={{false: colors.border, true: colors.success}}
          ios_backgroundColor={colors.border}
         />
      </View>

      <DangerZone />

    </LinearGradient>
  )
}

export default Preferences