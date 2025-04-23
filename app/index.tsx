import  React,{useState} from "react";
import { Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import { indexStyle } from "@/style/indexStyle";
import { commonStyle } from "@/style/commonStyle";
import { back } from "@/components/backImage";
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
      <View style={commonStyle.tabscontent}>
        <View style={{ marginTop: 30 }}>
          <Image style={{ width: 350, height: 300 }} source={image} />
        </View>
        <View style={{ gap:25, marginTop: 30}}>
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
              router.navigate("/login");
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
              router.navigate("/register");
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
