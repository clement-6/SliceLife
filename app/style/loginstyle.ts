import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({

    textTitle: {
        fontSize: 30,
        fontWeight: "700",  
        color: "#367cff",
    },

    viewTitle:{
        marginTop: 25,
        width: "100%",
        alignItems: "center",
        gap: 10
    },

    subTitle: {
        fontWeight: "600",
        width: 228,
        textAlign: "center",
        fontSize: 20
    },

    saisie:{
        rowGap: 29,
        marginTop: 40
    },

    input:{
        borderColor: '#367cff',
        width: 300,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#ebf2ff",
        paddingLeft: 20
    },

    inputFocused: {
        borderWidth: 3,
        borderColor: '#367cff'
    },

    forget:{
        color: "#367cff",
        fontWeight: "bold",
        textAlign: "right",
        width: 290,
        marginVertical: 20
    },

    accountText:{
        marginTop: 65
    },

    smallSemiBold:{
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center'
    },

    mybtn: {
        backgroundColor: "#367cff",
        width: 300,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },

    textbtn:{
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },

    oauthcontaint:{
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#ECECEC',
        borderRadius: 8,
        height: 40,
        width: 50,
        alignItems:'center',
        justifyContent: 'center',
    },

    oauthcontaintView:{
        flexDirection: 'row',
        columnGap: 10,
        marginTop: 20,
        
    },

    alterText:{
            color: '#367cff',
            marginTop: 65

    }
   
     
})