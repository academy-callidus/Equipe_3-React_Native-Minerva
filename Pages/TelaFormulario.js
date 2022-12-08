import SunmiPrinter from '@heasy/react-native-sunmi-printer';
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useState } from "react";
import { CheckBox } from "react-native-elements";
import { StyleSheet } from "react-native";
import { TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { Modal } from 'react-native-paper';

export default function TelaFormulario() {

  const Underline_Value = 1003
  const Bold_Value = 1002
  const [texto, setTexto] = useState('Hello World!')
  const [tam, setTam] = useState(18)
  const [bold, setBold] = useState(false)
  const [underline, setunder] = useState(false)
  const [tamanho, setTamanho] = useState(6)
  const [alinhamento, setAlinhamento] = useState(1)
  const [checked1, set1] = useState(false)
  const [checked2, set2] = useState(true)
  const [checked3, set3] = useState(false)
  const [visivel, setVisivel] = useState(false)

  const PrinterText = () => {
    SunmiPrinter.setFontSize(tam);
    SunmiPrinter.setFontWeight(true);
    SunmiPrinter.setPrinterStyle(Bold_Value, bold ? 1 : 2)
    SunmiPrinter.setPrinterStyle(Underline_Value, underline ? 1 : 2)
    SunmiPrinter.printerText(texto)
  }

  function aumenta() {
    if (Number(tam) < 30) {
      setTam(Number(tam) + 2)
    }
  }

  function diminui() {
    if (Number(tam) > 2) {
      setTam(Number(tam) - 2)
    }
  }

  return (
    <ScrollView>
    <View style={styles.V}>
        
        <View style={styles.ViewRow}>
            <Text style={styles.TextTitle} >Insira o Texto da Coluna 1</Text>
                <TextInput style={styles.TextInputRow1} defaultValue={texto} onChangeText={newText => setTexto(newText)}></TextInput>
                <TextInput style={styles.TextInputRow2} defaultValue={texto} onChangeText={newText => setTexto(newText)}></TextInput>
                <TextInput style={styles.TextInputRow3} defaultValue={texto} onChangeText={newText => setTexto(newText)}></TextInput>

      <View style={styles.ViewModal}>

        <Text style={styles.TextQRCode2}>Alinhamento:</Text>

        <Modal visible={visivel} onRequestClose={() => setVisivel(false)}>
            <View style={styles.ViewDentroModal}>

            <Text style={styles.t}>Alinhamento:</Text>

            <View style={styles.Colunas}>
                <CheckBox style={{ flex: 1 }} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='Esquerda' checked={checked2} onPress={() => (set1(true), set2(false), set3(false), setAlinhamento(0), setVisivel(false))} />
                <CheckBox style={{ flex: 1 }} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='Centro' checked={checked2} onPress={() => (set1(false), set2(true), set3(false), setAlinhamento(1), setVisivel(false))} />
                <CheckBox style={{ flex: 1 }} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='Direita' checked={checked3} onPress={() => (set1(false), set2(false), set3(true), setAlinhamento(2), setVisivel(false))} />
            </View>
            
            </View>

        </Modal>

        <TouchableOpacity onPress={() => setVisivel(true)}>

            <Text style={styles.TextQRCode3}>{checked1 ? 'Esquerda' : checked2 ? 'Centro' : 'Direita'}</Text>

        </TouchableOpacity>

        </View>
        </View>


      <View style={styles.visao}>
        <TouchableOpacity onPress={null}>
          <Text style={styles.texto2}>Imprime</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white',
    padding: 5,
    width: 30,
    textAlign: 'center'
  },
  visao: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 2,
    flex: 1
  },
  t: {
    fontSize: 20,
    backgroundColor: 'darkgrey',
    height: 36
  },
  V: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'black',
    
    alignSelf: 'center',
    alignItems: 'center'
  },
  ViewRow: {
    height: 230,
    width: 380,
    backgroundColor: 'black',
    borderColor: "silver",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth:2,
    borderRightWidth: 2,
    top:"1%"
  },

  ViewTamanho: {
    top:"4%",
  },
 
  somadores: {
    height: 36, 
    width: 50, 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize: 16, 
    backgroundColor: '#d94307',
    top:'-51%',
    right:"-75%",
    
  }, ViewDentroModal:{
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'black',
    alignSelf: 'center',
    alignItems: 'center'
  },

  subtrador: {
    height: 36, 
    width: 50, 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize: 16, 
    backgroundColor:'#d94307',
    top:'-5%',
    right:"-30%",
  },

  ViewQRCode: {
    top: "10%",
    width:220,
    height:160,
    backgroundColor:"black",
    right:"-25%",

  },

  ViewQRCode2:{
    top:"400%",
  },
  ViewQRCode3:{
    
  },
  TextTitle: {
    color:"silver",
    borderRightWidth:10,
    borderRightHeight:10,
    top: "4%",
    fontSize: 20,
    alignSelf:'center'
  },

  TextInputRow1: {
    backgroundColor: '#201f21' ,
    color: 'white', 
    width: 110,
    height: 50,
    top:"10%",
    marginRight:"1%",
    marginLeft:"1%",
    textAlign:"center",
    borderBottomColor:"silver",
    borderTopColor:"silver",
    borderLeftColor:"silver",
    borderRightColor:"silver",
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth:1,
    left:"2%"
  },
  TextInputRow2: {
    backgroundColor: '#201f21' ,
    color: 'white', 
    width: 110,
    height: 50,
    top:"-12%",
    marginRight:"1%",
    marginLeft:"1%",
    textAlign:"center",
    borderBottomColor:"silver",
    borderTopColor:"silver",
    borderLeftColor:"silver",
    borderRightColor:"silver",
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth:1,
    left:"35%"
  },
  TextInputRow3: {
    backgroundColor: '#201f21' ,
    color: 'white', 
    width: 110,
    height: 50,
    top:"-34%",
    marginRight:"1%",
    marginLeft:"1%",
    textAlign:"center",
    borderBottomColor:"silver",
    borderTopColor:"silver",
    borderLeftColor:"silver",
    borderRightColor:"silver",
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth:1,
    left:"67%"
  },
   TextTamanho:{ 
    height: 36, 
    width: 50, 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize: 16, 
    backgroundColor: 'silver',
    top:'-27%',
    right:"-55%"
    

  },
  
  TextQRCode:{ 
    height: 50, 
    width: 360, 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize: 16, 
    top:"-8%",
    fontSize:20,
    color: "silver"
  },

  TextQRCode2:{ 
    height: 50, 
    width: 360, 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize: 16, 
    top:"20%",
    fontSize:20,
    color: "silver",
  },

  TextQRCode3: {
    backgroundColor: '#201f21' ,
    color: 'silver', 
    width: 330,
    height: 50,
    top:"30%",
    marginRight:"1%",
    marginLeft:"1%",
    borderBottomColor:"silver",
    borderTopColor:"silver",
    borderLeftColor:"silver",
    borderRightColor:"silver",
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth:1,
    fontSize:20,
    textAlign:'center',
    left:"5%"

  },
  TextAlinhamento1: {
    color: 'silver', 
    fontSize:20,
    textAlign:'center',
    height:50,
    width: 360,
    backgroundColor: "black",
    borderBottomColor:"silver",
    borderTopColor:"silver",
    borderLeftColor:"silver",
    borderRightColor:"silver",
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth:1,
    
  },

  button: {
    marginTop:"50%",
    alignItems: 'center',
    width:360,
    height:45,
    backgroundColor:"#ff1404",
    justifyContent:"center"
    
  },
  ViewModalAlinhamento:{
    top:"-20%"
    
  },
  texto2: {
    fontSize: 20,
    color: 'white',
    top:"10%",
    backgroundColor:"#d94307",
    alignItems: 'center',
    width:360,
    height:45,
    backgroundColor:"#ff1404",
    justifyContent:"center",
    alignText:"center",
    textAlign:"center"

  },
  Colunas: {
    flexDirection: 'column',
    
    backgroundColor:"black",

  },
   ViewModal:{
    top:"-38%",
    }
})