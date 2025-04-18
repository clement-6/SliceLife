import { Text, TouchableOpacity, View, Image } from "react-native";
import { indexStyle } from "@/style/indexStyle";




export default function Index() {
  return (
    <View style={indexStyle.globalView}>
      <View style={indexStyle.tabscontent}>
        <View>
          <Image style={{width: 400, height: 300}} source={require('../assets/images/Espace_Salarie.png')}/>
        </View>
        <View>
          <Text style={indexStyle.title}>Discover Your Dream Job here</Text>
        </View>
        <View style={{width:300, marginHorizontal: 50, }}>
          <Text style={indexStyle.text}>
            Explore all the existing job roles based on your interest and study major
          </Text>
        </View>
        <View style={indexStyle.viewbtn}>
          <TouchableOpacity style={indexStyle.btn}>
            <Text style={indexStyle.textbtn}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={indexStyle.btn}>
            <Text style={indexStyle.textbtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
