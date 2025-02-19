import React from "react";
import { View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native-unistyles";
import Color from "color";

const BookCover = ({
  coverColor,
  coverUrl,
  variant = "regular",
}: BookCover) => {
  styles.useVariants({ size: variant });

  // Generate strip colors using Android-like color manipulation
  const baseColor = Color(coverColor);
  const isLightColor = baseColor.isLight();
  const stripColor = isLightColor
    ? baseColor.mix(Color("black"), 0.2).hex()
    : baseColor.mix(Color("white"), 0.2).hex();

  return (
    <View style={[styles.container, { backgroundColor: coverColor }]}>
      <View style={styles.coverImage}>
        {/* Background Image */}
        <Image
          source={{
            uri: coverUrl,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

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
          "rgba(0, 0, 0, 0.4)", // Dark red
          "rgba(255, 255, 255, 0.5)", // Semi-transparent white
          "rgba(255, 255, 255, 0.25)", // Fainter white
          "rgba(255, 255, 255, 0.25)", // Fainter white
          "rgba(0, 0, 0, 0.05)", // Fully transparent
          "rgba(0, 0, 0, 0.05)",
          "rgba(255, 255, 255, 0.25)", // Fainter white
          "transparent", // Fully transparent
        ]}
        locations={[0.03, 0.05, 0.07, 0.1, 0.12, 0.16, 0.17, 0.22]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      />
    </View>
  );
};

export default BookCover;

const styles = StyleSheet.create((theme, runtime) => ({
  container: {
    paddingLeft: 12,
    borderRadius: theme.borderRadius.xs,
    borderTopLeftRadius: "3%",
    borderBottomLeftRadius: "3%",
    overflow: "hidden", // Ensures the border radius applies to the content
    variants: {
      size: {
        extraSmall: {
          width: 50,
          height: 60,
        },
        small: {
          width: 65,
          height: 83,
        },
        medium: {
          width: 86,
          height: 114,
        },
        regular: {
          width: 164,
          height: 216,
        },
        wide: {
          width: 256,
          height: 384,
        },
      },
    },
  },
  coverImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    marginLeft: "10%",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  gradient: {
    width: "70%",
    height: "100%",
    position: "absolute",
  },
  strip: {
    width: "12%",
    height: "2%",
    top: "10%",
    position: "absolute",
    backgroundColor: "red",
  },
}));
