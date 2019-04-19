import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WHITE, BORDER_COLOR } from '../constants/global'

const CardView = (props) => {
  const { view } = styles
  return (
    <View style={[view, props.style]} >
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: WHITE,
    borderColor: BORDER_COLOR,
    shadowColor: '#000',
    elevation: 3,
    shadowOffset: { width: 5, height: 5},
    shadowOpacity: 1
  }
})

export { CardView }
