import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { View } from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#121214',
    card: '#121214',
    text: '#FFFFFF',
    border: '#333333',
    primary: '#FFFFFF',
  },
};

export function Routes() {
  return (
    <View className="flex-1 w-full">
      <NavigationContainer theme={theme}>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}