import { useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, TextInput } from "react-native";
import { Dimensions } from 'react-native';
import SunmiPrinter from '@heasy/react-native-sunmi-printer';



export default function TelaFormulario() {

    const [linha1, setLinha1] = useState(['A', 'B', 'C'])
    const [linha2, setLinha2] = useState(['D', 'E', 'F'])
    const [linha3, setLinha3] = useState(['G', 'H', 'I'])

    const PrinterTable = () => {
        const tamMax = [20, 20, 20]
        const align = [1, 1, 1]
        SunmiPrinter.setFontSize(24);
        SunmiPrinter.setFontWeight(true);
        SunmiPrinter.printColumnsString(linha1, tamMax, align);
        SunmiPrinter.printColumnsString(linha2, tamMax, align);
        SunmiPrinter.printColumnsString(linha3, tamMax, align);
    }

    const redefine = (line, column, value) => {
        if(value==''){
            value = 'null'
        }
        switch (line) {
            case 0:
                switch (column) {
                    case 0:
                        setLinha1([value, linha1[1], linha1[2]])
                        break;
                    case 1:
                        setLinha1([linha1[0], value, linha1[2]])
                        break;
                    case 3:
                        setLinha1([linha1[0], linha1[1], value])
                        break;
                }
                break;
            case 1:
                switch (column) {
                    case 0:
                        setLinha2([value, linha2[1], linha2[2]])
                        break;
                    case 1:
                        setLinha2([linha2[0], value, linha2[2]])
                        break;
                    case 3:
                        setLinha2([linha2[0], linha2[1], value])
                        break;
                }
                break;
            case 3:
                switch (column) {
                    case 0:
                        setLinha3([value, linha3[1], linha3[2]])
                        break;
                    case 1:
                        setLinha3([linha3[0], value, linha3[2]])
                        break;
                    case 3:
                        setLinha3([linha3[0], linha3[1], value])
                        break;
                }
                break;
        }
    }

    return (
        <ScrollView>
            <View style={styles.View}>
                <View>
                      <Text style={styles.text1}>Formulário 1:</Text>
                        <View style={styles.line1}>
                            <TextInput style={styles.textinput1} onChangeText={newText => redefine(0, 0, newText)} defaultValue={linha1[0]}></TextInput>
                            <TextInput style={styles.textinput2} onChangeText={newText => redefine(0, 1, newText)} defaultValue={linha1[1]}></TextInput>
                            <TextInput style={styles.textinput3} onChangeText={newText => redefine(0, 2, newText)} defaultValue={linha1[2]}></TextInput>
                        </View>
                      <Text style={styles.text2}>Formulário 2:</Text>
                        <View style={styles.line2}>
                            <TextInput style={styles.textinput4} onChangeText={newText => redefine(1, 0, newText)} defaultValue={linha2[0]}></TextInput>
                            <TextInput style={styles.textinput5} onChangeText={newText => redefine(1, 1, newText)} defaultValue={linha2[1]}></TextInput>
                            <TextInput style={styles.textinput6} onChangeText={newText => redefine(1, 2, newText)} defaultValue={linha2[2]}></TextInput>
                        </View>
                      <Text style={styles.text3}>Formulário 3:</Text>
                        <View style={styles.line3}>
                            <TextInput style={styles.textinput7} onChangeText={newText => redefine(2, 0, newText)} defaultValue={linha3[0]}></TextInput>
                            <TextInput style={styles.textinput8} onChangeText={newText => redefine(2, 1, newText)} defaultValue={linha3[1]}></TextInput>
                            <TextInput style={styles.textinput9} onChangeText={newText => redefine(2, 2, newText)} defaultValue={linha3[2]}></TextInput>
                        </View>
                </View>

                <TouchableOpacity onPress={() => PrinterTable()}>
                    <Text style={styles.textoImprimir}>Imprime</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
View: {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
  backgroundColor: 'black',
  padding: '10%',
  flexDirection: 'column',
  alignSelf: 'center',
  alignItems: 'center',
},
line1:{
  backgroundColor: 'black' ,
  color: 'silver',  
  width: 358,
  height: 50,
  flex:1,
  textAlign:"center",
  borderBottomColor:"silver",
  borderTopColor:"silver",
  borderLeftColor:"silver",
  borderRightColor:"silver",
  borderBottomWidth:1,
  borderLeftWidth:1,
  borderRightWidth:1,
  borderTopWidth:1,
},
line2:{
  backgroundColor: 'black' ,
  color: 'silver', 
  width: 358,
  height: 50,
  flex:1,
  textAlign:"center",
  borderBottomColor:"silver",
  borderTopColor:"silver",
  borderLeftColor:"silver",
  borderRightColor:"silver",
  borderBottomWidth:1,
  borderLeftWidth:1,
  borderRightWidth:1,
  borderTopWidth:1,
},
line3:{
  backgroundColor: 'black' ,
  color: 'silver',  
  width: 358,
  height: 50,
  flex:1,
  textAlign:"center",
  borderBottomColor:"silver",
  borderTopColor:"silver",
  borderLeftColor:"silver",
  borderRightColor:"silver",
  borderBottomWidth:1,
  borderLeftWidth:1,
  borderRightWidth:1,
  borderTopWidth:1,
},
textinput1:{
  flex:1,
  textAlignVertical: 'center', 
  textAlign: 'center', 
  fontSize:20,
  color: "silver",
  borderBottomColor:"silver",
  borderTopColor:"silver",
  borderLeftColor:"silver",
  borderRightColor:"silver",
  borderBottomWidth:2,
  borderLeftWidth:2,
  borderRightWidth:2,
  borderTopWidth:2,
},
textinput2:{
  flex:1,
  textAlignVertical: 'center', 
  textAlign: 'center', 
  fontSize:20,
  color: "silver",
  borderBottomColor:"silver",
  borderTopColor:"silver",
  borderLeftColor:"silver",
  borderRightColor:"silver",
  borderBottomWidth:2,
  borderLeftWidth:2,
  borderRightWidth:2,
  borderTopWidth:2,
},
textinput3:{
  flex:1,
  textAlignVertical: 'center', 
  textAlign: 'center', 
  fontSize:20,
  color: "silver",
  borderBottomColor:"silver",
  borderTopColor:"silver",
  borderLeftColor:"silver",
  borderRightColor:"silver",
  borderBottomWidth:2,
  borderLeftWidth:2,
  borderRightWidth:2,
  borderTopWidth:2,
},
textinput4:{
  flex:1,
  textAlignVertical: 'center', 
  textAlign: 'center', 
  fontSize:20,
  color: "silver",
  borderBottomColor:"silver",
  borderTopColor:"silver",
  borderLeftColor:"silver",
  borderRightColor:"silver",
  borderBottomWidth:2,
  borderLeftWidth:2,
  borderRightWidth:2,
  borderTopWidth:2,
},
textinput5:{
  flex:1,
  textAlignVertical: 'center', 
  textAlign: 'center', 
  fontSize:20,
  color: "silver",
  borderBottomColor:"silver",
  borderTopColor:"silver",
  borderLeftColor:"silver",
  borderRightColor:"silver",
  borderBottomWidth:2,
  borderLeftWidth:2,
  borderRightWidth:2,
  borderTopWidth:2,
},
textinput6:{
  flex:1,
  textAlignVertical: 'center', 
  textAlign: 'center', 
  fontSize:20,
  color: "silver",
  borderBottomColor:"silver",
  borderTopColor:"silver",
  borderLeftColor:"silver",
  borderRightColor:"silver",
  borderBottomWidth:2,
  borderLeftWidth:2,
  borderRightWidth:2,
  borderTopWidth:2,
},
textinput7:{
  flex:1,
  textAlignVertical: 'center', 
  textAlign: 'center', 
  fontSize:20,
  color: "silver",
  borderBottomColor:"silver",
  borderTopColor:"silver",
  borderLeftColor:"silver",
  borderRightColor:"silver",
  borderBottomWidth:2,
  borderLeftWidth:2,
  borderRightWidth:2,
  borderTopWidth:2,
},
textinput8:{
  flex:1,
  textAlignVertical: 'center', 
  textAlign: 'center', 
  fontSize:20,
  color: "silver",
  borderBottomColor:"silver",
  borderTopColor:"silver",
  borderLeftColor:"silver",
  borderRightColor:"silver",
  borderBottomWidth:2,
  borderLeftWidth:2,
  borderRightWidth:2,
  borderTopWidth:2,
},
textinput9:{
  flex:1,
  textAlignVertical: 'center', 
  textAlign: 'center', 
  fontSize:20,
  color: "silver",
  borderBottomColor:"silver",
  borderTopColor:"silver",
  borderLeftColor:"silver",
  borderRightColor:"silver",
  borderBottomWidth:2,
  borderLeftWidth:2,
  borderRightWidth:2,
  borderTopWidth:2,
},
text1: {
  top:"-3%",
  color:"silver",
  fontSize: 20,
  alignSelf:'center'

}
,
text2: {
  flex:0.4,
  top:"3%",
  color:"silver",
  fontSize: 20,
  alignSelf:'center'
}
,
text3: {
  color:"silver",
  fontSize: 20,
  alignSelf:'center'

},
textoImprimir:{
  flex:1,
  fontSize: 20,
  color: 'white',
  backgroundColor:"#d94307",
  alignItems: 'center',
  width:360,
  height:100,
  backgroundColor:"#ff1404",
  alignText:"center",
  textAlign:"center"
}

})