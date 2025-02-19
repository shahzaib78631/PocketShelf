import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedAntDesign, ThemedText } from "../ui";
import { useThemeContext } from "@/context/ThemeContext";
import { Trans } from "react-i18next";
import BookCover from "../BookCover/BookCover";

const BookOverview = ({
  id,
  author,
  title,
  description,
  genre,
  rating,
  totalCopies,
  availableCopies,
  color,
  cover,
}: Book) => {
  const { commonStyles } = useThemeContext();
  return (
    <View
      style={[
        commonStyles.width100,
        commonStyles.rowAlignCenter,
        commonStyles.gapLg,
      ]}
    >
      {/* Book Cover */}
      <BookCover coverColor={color} coverUrl={cover} variant="regular" />
      <View style={[commonStyles.flex1, commonStyles.gapXs]}>
        <ThemedText type="bold" fontSize="xl">
          {title}
        </ThemedText>
        <ThemedText color="foreground" fontSize="xs">
          <Trans
            i18nKey="book.overview.author"
            values={{
              author: author,
            }}
            components={{
              b: <ThemedText color="primary" type="extraBold" fontSize="xs" />,
            }}
          />
        </ThemedText>
        <ThemedText color="foreground" fontSize="xs">
          <Trans
            i18nKey="book.overview.genre"
            values={{
              genre: genre,
            }}
            components={{
              b: <ThemedText color="primary" type="extraBold" fontSize="xs" />,
            }}
          />
        </ThemedText>
        <View style={[commonStyles.rowAlignCenter, commonStyles.gapSm]}>
          <ThemedAntDesign name="star" size={12} color={"foreground"} />
          <ThemedText color="foreground" fontSize="xs">
            {rating}
          </ThemedText>
        </View>
        <ThemedText color="foreground" fontSize="xs">
          <Trans
            i18nKey="book.overview.availableCopies"
            values={{
              availableCopies: `${availableCopies}/${totalCopies}`,
            }}
            components={{
              b: <ThemedText color="primary" type="extraBold" fontSize="xs" />,
            }}
          />
        </ThemedText>
        <ThemedText color="foreground" fontSize="xs">
          {description}
        </ThemedText>
      </View>
    </View>
  );
};

export default BookOverview;

const styles = StyleSheet.create({});
