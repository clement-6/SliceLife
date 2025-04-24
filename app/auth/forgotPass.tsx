import { ImageBackground, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { indexStyle } from "@/app/style/indexStyle";
import { back } from "@/app/components/backImage";
import { loginStyle } from "@/app/style/loginstyle";
import { registerStyle } from "../style/registerStyle";
import CustomInput from "../components/customInput";
import { forgotPassStyle } from "../style/forgotPassstyle";


export default function ForgotPass(){
    return(
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ImageBackground
          source={back.BLUEKMER}
          resizeMode="cover"
          style={indexStyle.image}>
             <View style={forgotPassStyle.tabscontent}>
              <View style={forgotPassStyle.viewTitle}>
                <Text style={loginStyle.textTitle}>Forgot Password</Text>
                <Text style={registerStyle.subTitle}>Provide the email address associated with your account to recover your password</Text>
              </View>
              <View style={loginStyle.saisie}>
                <CustomInput placeholder={"Email"} keyboardType="email-address"/>
              </View>
                <TouchableOpacity style={[loginStyle.mybtn,registerStyle.marginButon]}>
                  <Text style={loginStyle.textbtn}>Send Email</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    )
}
