import  React,{useState} from "react";
import { Text, TouchableOpacity, View, Image, ImageBackground, StatusBar } from "react-native";
import { indexStyle } from "@/app/style/indexStyle";
import { commonStyle } from "@/app/style/commonStyle";
import { back } from "@/app/components/backImage";
import { Link } from "expo-router";
import * as Router from 'expo-router';


const image = require('../assets/images/Espace_Salarie.png');



export default function Index() {
  const [activeButton, setActiveButton] = useState("login");
  const router = Router.useRouter();

  return (
    <ImageBackground
      source={back.BLUEKMER}
      resizeMode="cover"
      style={indexStyle.image}
    >
      <StatusBar backgroundColor='#dbedef'/>
      <View style={commonStyle.tabscontent}>
        <View style={{ marginTop: 25 }}>
          <Image style={indexStyle.image_header} source={image} />
        </View>
        <View style={indexStyle.textView}>
          <Text style={indexStyle.title}>Discover Your Dream Job here</Text>
          <Text style={indexStyle.text}>
            Explore all the existing job roles based on your interest and study
            major
          </Text>
        </View>
        <View style={indexStyle.viewbtn}>
          <TouchableOpacity
            style={[
              indexStyle.btn,
              activeButton === "login" && indexStyle.btnactive,
            ]}
            onPress={() => {
              setActiveButton("login");
              router.navigate("/auth/login");
            }}
          >
            <Text
              style={[
                indexStyle.textbtn,
                activeButton === "login" && indexStyle.texteactive,
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              indexStyle.btn,
              activeButton === "register" && indexStyle.btnactive,
            ]}
            onPress={() => {
              setActiveButton("register");
              router.navigate("/auth/register");
            }}
          >
            <Text
              style={[
                indexStyle.textbtn,
                activeButton === "register" && indexStyle.texteactive,
              ]}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
