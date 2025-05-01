import { FlatList, SafeAreaView } from "react-native";
import { HomeHeader } from "@/app/components/HomeHeader";
import { Card } from "@components/Card";

export function Home() {

  return (
    <SafeAreaView className="flex-1 w-full">
      <HomeHeader />

      <FlatList
        data={[
          {
            title: "Mistérios Gozosos",
            quote: "A alegria da encarnação do Salvador.",
            text: "Meditamos sobre a infância de Jesus e o sim generoso de Maria."
          },
          {
            title: "Mistérios Dolorosos",
            quote: "O sofrimento que nos redimiu.",
            text: "Contemplamos a paixão e morte de Jesus por amor à humanidade."
          },
          {
            title: "Mistérios Gloriosos", 
            quote: "A vitória de Cristo e a glória de Maria.",
            text: "Celebramos a ressurreição, ascensão e a realeza de Nossa Senhora."
          },
          {
            title: "Mistérios Luminosos",
            quote: "A luz que revela o Reino e o dom da Eucaristia.",
            text: "Contemplamos os momentos da vida pública de Jesus, culminando na entrega do Seu Corpo e Sangue como alimento de salvação."
          }
        ]}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            quote={item.quote}
            text={item.text}
            onPress={() => {console.log('teste')}}
          />
        )}
        keyExtractor={item => item.title}
        style={{ maxHeight: '100%', paddingTop: 42 }}
        className="flex-1 px-4"
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 40,
          gap: 20,
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}