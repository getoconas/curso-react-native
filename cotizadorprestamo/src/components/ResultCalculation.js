import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResultCalculation(props) {

  const { capital, interes, months, total, errorMessage } = props;

  return (
    <View style = { styles.content } >
      { total && (
        <View style = { styles.boxResult } >
          <Text style = { styles.title } >Resumen del Prestamo</Text>
          <DataResult title = { "Cantidad Solicitada" } value = { `$ ${capital}` } />
          <DataResult title = { "Interes" } value = { `${interes} %` } />
          <DataResult title = { "Plazo" } value = { `${months} meses` } />
          <DataResult title = { "Pago Mensual" } value = { `$ ${total.monthyFee}` } />
          <DataResult title = { "Total a Pagar" } value = { `$ ${total.totalPayable}` } />
        </View>
      )}
      <View>
        <Text style = { styles.error } >{ errorMessage }</Text>
      </View>
    </View>
  )
}

function DataResult(props) {
  const { title, value } = props;

  return(
    <View style = { styles.value } >
      <Text>{ title }</Text>
      <Text>{ value }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content : {
    marginHorizontal: 40
  },
  boxResult : {
    padding: 30
  }, 
  title : {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'    
  },
  value : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  }, 
  error : {
    color: "#f00",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
