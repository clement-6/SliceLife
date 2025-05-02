import { ImageBackground, View, Text, Platform, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { indexStyle } from "@/app/style/indexStyle";
import { back } from "@/app/components/backImage";
import {commonStyle} from "@/app/style/commonStyle";
import { FormStyle } from "@/app/style/formstyle";
import CustomInput from "../components/customInput";
import OauthContainer from "../components/oauthContainer";
import * as Router from 'expo-router';



export default function Login() {
  const oauthArray = ['google','facebook-f','apple']
  const router = Router.useRouter();
  
    return (
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
     <ImageBackground
          source={back.BLUEKMER}
          resizeMode="cover" 
          style={indexStyle.image}>
            <View style={commonStyle.tabscontent}>
              <View style={FormStyle.viewTitle}>
                <Text style={FormStyle.textTitle}>Login here</Text>
                <Text style={FormStyle.subTitle}>Welcome back you've been missed!</Text>
              </View>
              <View style={FormStyle.saisie}>
                <CustomInput placeholder={"Email"} keyboardType="email-address" />
                <CustomInput placeholder={"Password"} isSecure={true} />
              </View>

                <Text style={FormStyle.forget} onPress={() => router.push('/auth/forgotPass')}>Forgot your password?</Text>

                <TouchableOpacity style={FormStyle.mybtn} onPress={() => router.push('/screen/home')}>
                  <Text style={FormStyle.textbtn}>Sign in</Text>
                </TouchableOpacity>

                <Text style={[FormStyle.accountText,FormStyle.smallSemiBold]} onPress={() => router.push('/auth/register')}>You don't have an account?</Text>

                <View style={{transform: [{translateY: -40}]}}>
                  <Text style={[FormStyle.alterText,FormStyle.smallSemiBold]}>Or continue with</Text>
                <View style={FormStyle.oauthcontaintView}>
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