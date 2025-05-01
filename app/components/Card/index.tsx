import { View } from "react-native";

import { TouchableOpacity, Image, Text } from "react-native";
import { tv } from "tailwind-variants";

const rosaryThumb = require('@assets/images/rosary-thumb.png');

const card = tv({
  slots: {
    container: 'bg-white rounded-lg overflow-hidden',
    image: 'max-w-full w-auto h-36',
    content: 'py-6 px-4',
    contentTitle: 'text-2xl font-sansBold',
    contentQuote: 'text-sm font-sans italic text-gray-500 mb-3',
    contentText: 'text-base font-sans text-gray-500',
  }
});

interface CardProps extends React.ComponentProps<typeof TouchableOpacity> {
  title: string;
  quote: string;
  text: string;
}

export function Card({ title, quote, text, ...props }: CardProps) {
  const { container, image, content, contentTitle, contentQuote, contentText } = card();

  return (
    <TouchableOpacity className={container()} {...props}>
      <Image 
        source={rosaryThumb}
        defaultSource={rosaryThumb}
        className={image()}
      />
      <View className={content()}>
        <Text className={contentTitle()}>{title}</Text>
        <Text className={contentQuote()}>"{quote}"</Text>
        <Text className={contentText()}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}