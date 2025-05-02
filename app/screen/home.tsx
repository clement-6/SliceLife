import {  Text, TextInput, View, FlatList } from 'react-native';
import { homeStyle } from '../style/homeStyle';
import { Ionicons } from '@expo/vector-icons';
import { DATA } from '../data/data';
import ItemComponent from '../components/itemComponent';



export default function Home() {

  
    return (
        <View style={homeStyle.container}>
                <View style={homeStyle.viewTitle}>
                    <Text style={homeStyle.title}>Maidify</Text>
                    <Text style={homeStyle.subtitle}>Search most up-to-date maids</Text>
                </View>
                <View style={homeStyle.saisie}>
                    <TextInput placeholder='Search' style={homeStyle.input}/>
                    <Ionicons name="search-outline" size={24} color="#465964" style={{position:"absolute", right:10}}/>
                </View>
                <FlatList 
                data={DATA}  
                renderItem={({item}) => (
                    <ItemComponent item={item.title} source={item.source}/>
                )}
                horizontal={true}
                keyExtractor={(item,index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                />
                <Text style={homeStyle.text}>Maids by City</Text>
        </View>
    );
}