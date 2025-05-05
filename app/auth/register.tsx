import { ImageBackground, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { indexStyle } from "@/app/style/indexStyle";
import { back } from "@/app/components/backImage";
import {commonStyle} from "@/app/style/commonStyle";
import { FormStyle } from "@/app/style/formstyle";
import { registerStyle } from "../style/registerStyle";
import CustomInput from "../components/customInput";
import OauthContainer from "../components/oauthContainer";
import * as Router from 'expo-router';



export default function Register() {
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
                <Text style={FormStyle.textTitle} onPress={() => router.push('/auth/login')}>Create Account</Text>
                <Text style={registerStyle.subTitle}>Create an account so you can explore all the existing jobs</Text>
              </View>
              <View style={FormStyle.saisie}>
                <CustomInput placeholder={"Email"} keyboardType="email-address" name="envelope"/>
                <CustomInput placeholder={"Password"} isSecure={true} name="lock"/>
                <CustomInput placeholder={"Confirm Password"} isSecure={true} name="lock"/>
              </View>

                <TouchableOpacity style={[FormStyle.mybtn,registerStyle.marginButon]} onPress={() => router.push('/screen/home')}>
                  <Text style={FormStyle.textbtn} >Sign Up</Text>
                </TouchableOpacity>

                <Text style={[registerStyle.accountText,FormStyle.smallSemiBold]} onPress={() => router.push('/auth/login')}>Already have an account!</Text>

                <View style={{transform: [{translateY: Platform.OS === "ios" ? -24 : -15}]} }>
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