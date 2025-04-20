import { ImageBackground } from "react-native";
import { indexStyle } from "@/style/indexStyle";
import { back } from "@/components/backImage";



export default function Register() {
    return (
      <ImageBackground
          source={back.BLUEKMER}
          resizeMode="cover"
          style={indexStyle.image}>
        </ImageBackground>
    )
}