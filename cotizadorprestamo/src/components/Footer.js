import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import colors from '../utils/colors';

export default function Footer(props) {

  const { calculate } = props;

  return (
    <View style = { styles.viewFooter } >
      <TouchableOpacity style = { styles.button } onPress = { calculate } >
        <Text style = { styles.text } >CALCULAR</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  viewFooter : {
    alignItems: 'center',
    backgroundColor: colors.PRIMARY_COLOR,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: 0,
    height: 100,
    justifyContent: 'center',
    position: 'absolute',
    width: "100%"
  },
  button : {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 20,
    padding: 16,
    width: "75%"
  },
  text : {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
