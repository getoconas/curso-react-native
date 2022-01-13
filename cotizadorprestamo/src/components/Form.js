import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

import colors from '../utils/colors';

export default function Form(props) {

  const { setCapital, setInteres, setMonths } = props;

  return(
    <View style = { styles.viewForm } >
      <View style = { styles.viewInputs } >
        <TextInput 
          placeholder = 'Cantidad a pedir'
          keyboardType = 'numeric'
          style = { styles.input }
          onChange = { e => setCapital(e.nativeEvent.text) }
        />

        <TextInput 
          placeholder = 'Interes %' 
          keyboardType = 'numeric' 
          style = {[ styles.input, styles.inputPorcentaje ]} 
          onChange = { e => setInteres(e.nativeEvent.text) }
        />
      </View>

      <RNPickerSelect
        style = { pickerSelectStyles }
        onValueChange = {(value) => setMonths(value)}
        placeholder = {{
          label : 'Selecciona el plazo...',
          value : null
        }}
        items = {[
          { label : '3 meses', value: 3 },
          { label : '6 meses', value: 6 },
          { label : '12 meses', value: 12 },
          { label : '24 meses', value: 24 }
        ]}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  viewForm : {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    bottom: 0,
    height: 180,
    justifyContent: "center",
    paddingHorizontal: 50,
    position: "absolute",    
    width: "85%"
  },
  viewInputs : {
    flexDirection: "row"
  },
  input : {
    backgroundColor: "#fff",    
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    borderWidth: 1,
    color: "#000",
    height: 50,
    marginBottom: 10,
    marginLeft: -5,
    marginRight: 5,  
    paddingHorizontal: 20,
    width: "60%"
  },
  inputPorcentaje : {
    marginLeft: 5,
    width: "40%"    
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS : {
    backgroundColor: "#fff",
    borderColor: "grey",
    borderRadius: 4,
    borderWidth: 1,
    color: "black",
    fontSize: 16,
    marginLeft: -5,
    marginRight: -5,
    paddingHorizontal: 10,
    paddingRight: 30,
    paddingVertical: 12
  },
  inputAndroid : {
    backgroundColor: "#fff",
    borderColor: "grey",
    borderRadius: 8,
    borderWidth: 0.5,
    color: "black",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingRight: 30,
    paddingVertical: 8
  }
});

