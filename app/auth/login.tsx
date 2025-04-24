import { ImageBackground, View, Text, Platform, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { indexStyle } from "@/app/style/indexStyle";
import { back } from "@/app/components/backImage";
import {commonStyle} from "@/app/style/commonStyle";
import { router } from "expo-router";
import { loginStyle } from "@/app/style/loginstyle";
import CustomInput from "../components/customInput";
import OauthContainer from "../components/oauthContainer";




export default function Login() {
  const oauthArray = ['google','facebook-f','apple']
  
    return (
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
     <ImageBackground
          source={back.BLUEKMER}
          resizeMode="cover" 
          style={indexStyle.image}>
            <View style={commonStyle.tabscontent}>
              <View style={loginStyle.viewTitle}>
                <Text style={loginStyle.textTitle}>Login here</Text>
                <Text style={loginStyle.subTitle}>Welcome back you've been missed!</Text>
              </View>
              <View style={loginStyle.saisie}>
                <CustomInput placeholder={"Email"} keyboardType="email-address"/>
                <CustomInput placeholder={"Password"} isSecure={true}/>
              </View>

                <Text style={loginStyle.forget} onPress={() => router.push('/auth/forgotPass')}>Forgot your password?</Text>

                <TouchableOpacity style={loginStyle.mybtn}>
                  <Text style={loginStyle.textbtn}>Sign in</Text>
                </TouchableOpacity>

                <Text style={[loginStyle.accountText,loginStyle.smallSemiBold]} onPress={() => router.push('/auth/register')}>You don't have an account?</Text>

                <View>
                  <Text style={[loginStyle.alterText,loginStyle.smallSemiBold]}>Or continue with</Text>
                <View style={loginStyle.oauthcontaintView}>
                                    {oauthArray.map((item, index) => {
                                      return(
                                        <OauthContainer key={index} iconName={item}/>
                                      )
                                    })}
                                </View>
                </View>
               
    
            </View>
        </ImageBackground>
  </KeyboardAvoidingView>
     
    )
}