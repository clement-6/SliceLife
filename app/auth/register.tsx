import { ImageBackground, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { indexStyle } from "@/app/style/indexStyle";
import { back } from "@/app/components/backImage";
import {commonStyle} from "@/app/style/commonStyle";
import { router } from "expo-router";
import { loginStyle } from "@/app/style/loginstyle";
import { registerStyle } from "../style/registerStyle";
import CustomInput from "../components/customInput";
import OauthContainer from "../components/oauthContainer";



export default function Register() {
  const oauthArray = ['google','facebook-f','apple']
    return (
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ImageBackground
          source={back.BLUEKMER}
          resizeMode="cover"
          style={indexStyle.image}>
             <View style={commonStyle.tabscontent}>
              <View style={loginStyle.viewTitle}>
                <Text style={loginStyle.textTitle}>Create Account</Text>
                <Text style={registerStyle.subTitle}>Create an account so you can explore all the existing jobs</Text>
              </View>
              <View style={loginStyle.saisie}>
                <CustomInput placeholder={"Email"} keyboardType="email-address"/>
                <CustomInput placeholder={"Password"} isSecure={true}/>
                <CustomInput placeholder={"Confirm Password"} isSecure={true}/>
              </View>

                <TouchableOpacity style={[loginStyle.mybtn,registerStyle.marginButon]}>
                  <Text style={loginStyle.textbtn}>Sign Up</Text>
                </TouchableOpacity>

                <Text style={[registerStyle.accountText,loginStyle.smallSemiBold]} onPress={() => router.push('/auth/login')}>Already have an account</Text>

                <View style={{transform: [{translateY: -35}]}}>
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