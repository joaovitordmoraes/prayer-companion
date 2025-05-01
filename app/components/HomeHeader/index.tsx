import { View, Text, TouchableOpacity } from "react-native";
import { UserPhoto } from "@/app/components/UserPhoto";
import { LogOut } from "lucide-react-native";
import { tv } from "tailwind-variants";

const user = tv({
  slots: {
    container: 'bg-zinc-800 pt-2 pb-4 px-4 flex-row gap-3 items-center border-b border-zinc-700',
    content: 'text-start flex-1',
    hello: 'text-gray-100 font-sans text-base',
    username: 'text-gray-100 font-sansBold text-2xl font-bold',
    logoutIcon: 'text-zinc-400',
  }
})

export function HomeHeader() {
  const { container, content, hello, username, logoutIcon } = user()

  return (
    <View className={container()}>
      <UserPhoto source={{ uri: 'https://github.com/joaovitordmoraes.png' }} alt="" />

      <View className={content()}>
        <Text className={hello()}>Olá,</Text>
        <Text className={username()}>João Moraes</Text>
      </View>

      <TouchableOpacity>
        <LogOut size={24} className={logoutIcon()} />
      </TouchableOpacity>
    </View>
  )
}