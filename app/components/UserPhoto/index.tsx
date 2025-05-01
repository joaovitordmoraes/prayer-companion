import { ComponentProps } from "react";
import { Image } from "react-native";

type Props = ComponentProps<typeof Image>

export function UserPhoto({ ...props }: Props) {
  return (
    <Image {...props} className="rounded-full w-12 h-12 border-2 border-zinc-500 bg-zinc-400" />
  )
}