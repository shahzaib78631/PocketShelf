import { Text, View } from "react-native";
import React from "react";
import { ThemedButton, ThemedMaterialIcons } from "../ui";
import { commonStyles } from "@/theme/styles";
import { StyleSheet } from "react-native-unistyles";

const CoffeeButton = () => {
  return (
    <ThemedButton borderRadius="xxl" buttonStyle={styles.container}>
      <ThemedMaterialIcons
        name="coffee"
        size={20}
        color="secondaryForeground"
      />
    </ThemedButton>
  );
};

export default CoffeeButton;

const styles = StyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.colors.secondary,
    padding: theme.padding.sm,
  },
}));
