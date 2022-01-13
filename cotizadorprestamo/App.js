import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from 'react-native';

import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';

import colors from './src/utils/colors';

export default function App() {

  const [ capital, setCapital ] = useState(null);
  const [ interes, setInteres ] = useState(null);
  const [ months, setMonths ] = useState(null);
  const [ total, setTotal ] = useState(null);
  const [ errorMessage, setErrorMessage ] = useState('');

  useEffect(() => {
    if ( capital && interes && months ) calculate();
    else reset();
  }, [ capital, interes, months ])

  const calculate = () => {
    reset();
    if ( !capital ) {
      setErrorMessage("Agrega la cantidad que deseas solicitar");
    } else if ( !interes ) {
      setErrorMessage("Agrega el interes del prestamo");
    } else if ( !months ) {
      setErrorMessage("Seleccionar los meses a pagar");
    } else {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);

      setTotal({
        monthyFee: fee.toFixed(2).replace('.',','),
        totalPayable: (fee * months).toFixed(2).replace('.',',')
      });
    
    }
  }

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  }

  return(
    <>
      <StatusBar barStyle='light-content' />

      <SafeAreaView style = { styles.safeArea } >
        <View style = { styles.background } />
        <Text style = { styles.titleApp } >Cotizador de Prestamos</Text>
        <Form 
          setCapital = { setCapital }
          setInteres = { setInteres }
          setMonths = { setMonths }  
        />
      </SafeAreaView>

      <ResultCalculation 
        capital = { capital }
        interes = { interes }
        months = { months }
        total = { total }
        errorMessage = { errorMessage } 
      />

      <Footer calculate = { calculate } />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea : {
    alignItems: "center",
    height: 290  
  },
  background : {
    backgroundColor: colors.PRIMARY_COLOR,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 200,
    position: 'absolute',
    width: "100%",
    zIndex: -1
  },
  titleApp : {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 15
  }
});

