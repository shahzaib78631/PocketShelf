import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedList, ThemedMaterialIcons, ThemedText } from "../ui";
import { getString } from "@/strings/translations";
import BookOverview from "../BookOverview";
import { useThemeContext } from "@/context/ThemeContext";
import BookCover from "../BookCover";
import Color from "color";
import { ThemedFontAwesome6 } from "../ui/ThemedIcons/ThemedIcons";

type BooksListProps = {
  title: string;
  books: Book[];
};

const BooksList = ({ books, title }: BooksListProps) => {
  const { commonStyles } = useThemeContext();
  return (
    <View style={[commonStyles.flex1]}>
      <ThemedText fontSize="xxxl" type="extraBold">
        {title}
      </ThemedText>
      <ThemedList
        data={books}
        numColumns={3}
        scrollEnabled={false}
        columnWrapperStyle={{
          gap: 10,
        }}
        renderItem={({ item }: { item: Book }) => (
          <View style={[commonStyles.flex1, commonStyles.alignCenter]}>
            <BookCover
              coverColor={item.color}
              coverUrl={item.cover}
              variant="small"
            />
            <View style={[commonStyles.gapXs]}>
              <ThemedText fontSize="md" type="extraBold" numberOfLines={2}>
                {item.title}
              </ThemedText>
              <View style={[commonStyles.rowAlignCenter, commonStyles.gapSm]}>
                <ThemedFontAwesome6
                  name="pen-nib"
                  size={10}
                  color="mutedForeground"
                />
                <ThemedText
                  fontSize="xs"
                  type="semiBold"
                  color="mutedForeground"
                >
                  {item.author}
                </ThemedText>
              </View>
              <ThemedText
                fontSize="xs"
                type="semiBold"
                color="mutedForeground"
                numberOfLines={1}
              >
                {item.genre}
              </ThemedText>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default BooksList;

const styles = StyleSheet.create({});
