import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
} from "react-native";
import React from "react";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyles?: TextStyle;
  containerStyles?: ViewStyle;
}

const CustomButton = ({
  onPress,
  title,
  textStyles,
  containerStyles,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.ButtonStyle, containerStyles]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={[styles.TextStyles, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  TextStyles: {
    fontSize: 10,
    textAlign: "center",
  },
  ButtonStyle: {
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    minHeight: 62,
    minWidth: "100%",
  },
});
