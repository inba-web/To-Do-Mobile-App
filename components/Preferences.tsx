import { View, Text } from 'react-native'
import React, { useState } from 'react'
import useTheme from '@/hooks/useTheme';
import { createSettingsStyles } from '@/assets/styles/settings.style';

const Preferences = () => {

  const[isAutoSync, setIsAutoSync] = useState(true);
  const[isNotificationEnabled, setIsNotification] = useState(true);

  const {isDarkMode, toggleDarkMode, colors} = useTheme();

  const settingsStyle = createSettingsStyles(colors);
  return (
    <View>
      <Text>Preferences</Text>
    </View>
  )
}

export default Preferences