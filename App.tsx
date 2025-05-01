
import { StatusBar, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { Routes } from './app/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <StatusBar barStyle="light-content" translucent />

      {fontsLoaded ? <Routes /> : <Loading />}
    </View>
  );
}
