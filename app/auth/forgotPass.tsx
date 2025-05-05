import { ImageBackground, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from "react-native";
import { indexStyle } from "@/app/style/indexStyle";
import { back } from "@/app/components/backImage";
import { FormStyle } from "@/app/style/formstyle";
import { registerStyle } from "../style/registerStyle";
import CustomInput from "../components/customInput";
import { forgotPassStyle } from "../style/forgotPassstyle";
import { FontAwesome6 } from '@expo/vector-icons';




export default function ForgotPass(){
    return(
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ImageBackground
          source={back.BLUEKMER}
          resizeMode="cover"
          style={indexStyle.image}>
             <View style={forgotPassStyle.tabscontent}>
              <Image source={back.FORGOT} style={forgotPassStyle.image_header}/>
              <View style={forgotPassStyle.viewTitle}>
                <Text style={FormStyle.textTitle}>Forgot Password</Text>
                <Text style={registerStyle.subTitle}>Provide the email address associated with your account to recover your password</Text>
              </View>
              <View style={forgotPassStyle.saisie}> 
                <CustomInput placeholder={"Email"} keyboardType="email-address" name="envelope"/>
              </View>
                <TouchableOpacity style={[FormStyle.mybtn,registerStyle.marginButon]}>
                  <Text style={FormStyle.textbtn}>Send Email</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    )
}
