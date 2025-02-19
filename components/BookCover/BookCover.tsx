import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Color from "color"; // Import color library
import { LinearGradient } from "expo-linear-gradient";

const BookCover = ({ coverColor, coverUrl, variant }: BookCover) => {
  // Generate dynamic colors using the base cover color
  const lighterColor = Color("white").lighten(0.2).hex();
  const darkerColor = Color(coverColor).darken(0.3).hex();

  const bookContainerSize = {
    width: 182,
    height: 290,
    borderRadius: 18,
  };

  const bookCoverSize = {
    width: 170,
    height: 250,
    borderRadius: 18,
  };

  if (variant === "wide") {
    bookContainerSize.width = 200;
    bookContainerSize.height = 300;
    bookCoverSize.width = 180;
    bookCoverSize.height = 270;
  } else if (variant === "small") {
    bookContainerSize.width = 105;
    bookContainerSize.height = 170;
    bookCoverSize.width = 100;
    bookCoverSize.height = 150;
  } else if (variant === "regular") {
    bookContainerSize.width = 125;
    bookContainerSize.height = 190;
    bookCoverSize.width = 120;
    bookCoverSize.height = 170;
  }

  // Generate strip colors using Android-like color manipulation
  const baseColor = Color(coverColor);
  const isLightColor = baseColor.isLight();
  const stripColor = isLightColor
    ? baseColor.mix(Color("black"), 0.2).hex()
    : baseColor.mix(Color("white"), 0.2).hex();

  return (
    <View style={[styles.container, bookContainerSize]}>
      {/* Main Book */}
      <View style={[styles.book, bookCoverSize]}>
        <Image
          source={{ uri: coverUrl }}
          style={[styles.image, { backgroundColor: coverColor }]}
          resizeMode="contain"
        />

        <View
          style={[styles.strip, { top: "10%", backgroundColor: stripColor }]}
        />
        <View
          style={[styles.strip, { top: "15%", backgroundColor: stripColor }]}
        />
        <View
          style={[styles.strip, { top: "90%", backgroundColor: stripColor }]}
        />
        <View
          style={[styles.strip, { top: "85%", backgroundColor: stripColor }]}
        />
        {/* Gradient Overlay */}
        <LinearGradient
          colors={[
            "rgba(0, 0, 0, 0.1)", // Dark red
            "rgba(255, 255, 255, 0.5)", // Semi-transparent white
            "rgba(255, 255, 255, 0.25)", // Fainter white
            "rgba(255, 255, 255, 0.25)", // Fainter white
            "rgba(0, 0, 0, 0.05)", // Fully transparent
            "rgba(0, 0, 0, 0.05)",
            "rgba(255, 255, 255, 0.25)", // Fainter white
            "transparent", // Fully transparent
          ]}
          locations={[0.03, 0.05, 0.06, 0.07, 0.0, 0.1, 0.12, 0.14]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.bookBone}
        />
      </View>

      {/* Layers (pages) */}
      <View
        style={{
          backgroundColor: darkerColor,
          width: "100%",
          height: "85%",
          borderRadius: 12,
        }}
      >
        <View
          style={[
            {
              backgroundColor: darkerColor,
              width: "99.5%",
              height: "99.5%",
              position: "absolute",
              top: "1%",
              borderRadius: 12,
            },
          ]}
        />
        <View
          style={[
            styles.pageLayer,
            {
              backgroundColor: lighterColor,
              width: "97%",
              height: "96%",
              top: "2%",
              overflow: "hidden",
            },
          ]}
        >
          {/* Gradient Overlay */}
          <LinearGradient
            colors={[
              "rgba(0, 0, 0, 0.1)", // Dark
              "rgba(0, 0, 0, 0.1)", // Dark
              "rgba(255, 255, 255, 0.5)", // Semi-transparent white
              "rgba(0, 0, 0, 0.05)", // Dark
              "rgba(255, 255, 255, 0.5)", // Semi-transparent white
              "rgba(255, 255, 255, 0.25)", // Fainter white
            ]}
            locations={[0.01, 0.015, 0.02, 0.03, 0.04, 0.05]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={styles.gradient}
          />
        </View>
      </View>
    </View>
  );
};

export default BookCover;

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 290,
    borderRadius: 18,
    overflow: "hidden",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  },
  book: {
    width: 170,
    height: 250,
    borderRadius: 18,
    position: "absolute",
    transformOrigin: [0, 100, 0],
    transform: [
      { perspective: 1000 }, // Add depth
      { rotateY: "-25deg" }, // Rotate slightly on Y-axis
      { translateX: -2 },
    ],
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  pageLayer: {
    position: "absolute",
    borderRadius: 8,
  },
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  bookBone: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  strip: {
    width: "12%",
    height: "2%",
    top: "10%",
    position: "absolute",
    backgroundColor: "red",
  },
});
