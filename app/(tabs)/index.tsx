import { Text, View } from "react-native";
import React from "react";
import {
  ThemedButton,
  ThemedMaterialCommunityIcons,
  ThemedMaterialIcons,
  ThemedText,
  ThemedView,
} from "@/components/ui";
import { getString } from "@/strings/translations";
import { commonStyles } from "@/theme/styles";
import { StyleSheet } from "react-native-unistyles";
import CoffeeButton from "@/components/CoffeeButton";
import BookCover from "@/components/BookCover/BookCover";
import { sampleBooks } from "@/constants/constants";
import BookOverview from "@/components/BookOverview";
import BooksList from "@/components/BooksList";
import BooksSlider from "@/components/BooksSlider";

const home = () => {
  const actions = [
    {
      icon: <ThemedMaterialIcons name="search" size={20} color="foreground" />,
      onPress: () => {},
    },
    {
      icon: <CoffeeButton />,
      onPress: () => {},
    },
  ];

  return (
    <ThemedView
      title={getString("common.app.name")}
      goBackEnabled={false}
      actions={actions}
      style={commonStyles.gapMd}
      scrollEnabled={true}
    >
      <View style={[commonStyles.rowAlignCenter, commonStyles.gapMd]}>
        <View style={styles.personIconContainer}>
          <ThemedMaterialIcons
            name="person"
            size={24}
            color="primaryForeground"
          />
        </View>
        <View style={[commonStyles.flex1]}>
          <ThemedText type="extraBold">Shahzaib Ali</ThemedText>
          <ThemedText fontSize="sm" color="accentForeground">
            {getString("screen.home.greetings")}
          </ThemedText>
        </View>
      </View>

      <BooksSlider books={sampleBooks} />

      <BooksList title={getString("books.popular")} books={sampleBooks} />
    </ThemedView>
  );
};

export default home;

const styles = StyleSheet.create((theme) => ({
  personIconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: "100%",
  },
}));
