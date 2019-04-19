import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { w } from '../constants/global'

const Header = ({
  leftIcon,
  leftColor,
  headerColor,
  title,
  onPress,
  rightIcon,
  rightColor,
  onPressRight
}) => {
  const { viewStyle, textStyle, leftButtonStyle, rightButtonStyle } = styles
  return (
    <View style={[viewStyle, {backgroundColor: headerColor }]}>
      {leftIcon &&
        <TouchableOpacity onPress={onPress}>
          <Ionicons name={leftIcon} style={[leftButtonStyle, { paddingLeft: 10 }]} color={leftColor} />
        </TouchableOpacity>
      }
      <Text numberOfLines={1} ellipsizeMode="tail" style={[textStyle, { paddingLeft: leftIcon ? 10 : 0, width: rightIcon ? w - 65 : w - 40 }]}>{title}</Text>
      {rightIcon &&
        <TouchableOpacity onPress={onPressRight}>
          <Ionicons name={rightIcon} style={[rightButtonStyle, { paddingLeft: 10 }]} color={rightColor} />
        </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 3,
    position: 'relative',
    height: 90
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
    paddingTop: 50
  },
  leftButtonStyle: {
    paddingTop: 50,
    fontSize: 35
  },
  rightButtonStyle: {
    paddingTop: 55,
    fontSize: 30
  }
})

export { Header }
