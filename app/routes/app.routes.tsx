import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile/Index';
import { Platform } from 'react-native';
import { Single } from '@screens/Single';

type AppRoutesProps = {
  home: undefined;
  profile: undefined;
  single: undefined;
}

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>();

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>;

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#202024',
          borderTopColor: '#cccccc',
          height: Platform.OS === 'android' ? "auto" : 96,
          paddingBottom: Platform.OS === 'android' ? 20 : 0,
          paddingTop: Platform.OS === 'android' ? 20 : 10,
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#666666',
        tabBarShowLabel: false,
      }}
    >
      <Screen 
        name="home" 
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen 
        name="profile" 
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
      <Screen 
        name="single" 
        component={Single}
        options={{
          tabBarItemStyle: { display: 'none' },
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}