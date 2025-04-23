import { ImageBackground, View, Text, TextInput, Pressable } from "react-native";
import { indexStyle } from "@/style/indexStyle";
import { back } from "@/components/backImage";
import {commonStyle} from "@/style/commonStyle";
import { Link } from "expo-router";



export default function Login() {
    return (
      <ImageBackground
          source={back.BLUEKMER}
          resizeMode="cover"
          style={indexStyle.image}>
            <View style={commonStyle.tabscontent}>
              <View>
                <Text>Login here</Text>
              </View>
              <View>
                <Text>Welcome back you've been missed</Text>
              </View>
              <View>
                <TextInput placeholder="Email" />
                <TextInput placeholder="Password" />
              </View>
              <View>
                <Link href="/register">Forgot your password?</Link>
              </View>
              <View>
                <Pressable>
                  <Text>Sign in</Text>
                </Pressable>
              </View>
              


            </View>
        </ImageBackground>
    )
}