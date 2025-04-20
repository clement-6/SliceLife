import  React,{useState} from "react";
import { Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import { indexStyle } from "@/style/indexStyle";
import { back } from "@/components/backImage";



const image = require('../assets/images/Espace_Salarie.png');



export default function Index() {
  const [activeButton, setActiveButton] = useState('login');
  return (
    
    <ImageBackground
    source={back.BLUEKMER}
    resizeMode="cover"
    style={indexStyle.image}>
    <View style={indexStyle.tabscontent}>
      <View style={{ marginTop: 12 }}>
        <Image
          style={{ width: 350, height: 300 }}
          source={image}
        />
      </View>
      <View style={{ width: 280, marginHorizontal: 30, marginTop: 50 }}>
        <Text style={indexStyle.title}>Discover Your Dream Job here</Text>
      </View>
      <View style={{ width: 280, marginHorizontal: 30, marginTop: 25 }}>
        <Text style={indexStyle.text}>
          Explore all the existing job roles based on your interest and
          study major
        </Text>
      </View>
      <View style={indexStyle.viewbtn}>
        <TouchableOpacity style={[indexStyle.btn, activeButton === 'login' && indexStyle.btnactive]} onPress={() => setActiveButton('login')}>
          <Text style={[indexStyle.textbtn, activeButton === 'login' && indexStyle.texteactive]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[indexStyle.btn, activeButton === 'register' && indexStyle.btnactive]} onPress={() => setActiveButton('register')}>
          <Text style={[indexStyle.textbtn, activeButton === 'register' && indexStyle.texteactive]}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ImageBackground>
  
  );
}
