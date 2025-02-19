import { Dimensions, FlatList, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { ThemedList } from "../ui";
import BookOverview from "../BookOverview";
import { commonStyles } from "@/theme/styles";
import { StyleSheet } from "react-native-unistyles";

const { width, height } = Dimensions.get("window");

const BooksSlider = ({ books }: { books: Book[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: any) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);

    setCurrentIndex(slideIndex);
  };

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={books}
        onScroll={handleScroll}
        snapToAlignment="center"
        decelerationRate="fast"
        horizontal={true}
        snapToInterval={width} // item width plus the margin
        renderItem={({ item }: { item: Book }) => (
          <View style={[styles.bookContainer]}>
            <BookOverview
              id={item.id}
              author={item.author}
              title={item.title}
              description={item.description}
              availableCopies={item.availableCopies}
              totalCopies={item.totalCopies}
              cover={item.cover}
              genre={item.genre}
              rating={item.rating}
              color={item.color}
            />
          </View>
        )}
      />

      <View
        style={[
          commonStyles.rowAlignCenter,
          commonStyles.center,
          commonStyles.gapXs,
        ]}
      >
        {books.map((book, index) => (
          <View
            style={[
              styles.indicator,
              index === currentIndex
                ? commonStyles.backgroundColor("primary")
                : commonStyles.backgroundColor("mutedForeground"),
            ]}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

export default BooksSlider;

const styles = StyleSheet.create((theme) => ({
  bookContainer: {
    width: width,
    paddingHorizontal: 20,
    height: 190,
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
  },
}));
