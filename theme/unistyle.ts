import { StyleSheet } from "react-native-unistyles";
import Themes from "@/theme/themes";
import { Theme, ThemeColors } from "@/theme/types";
import { baseTheme } from "@/theme/baseTheme";

// Define app themes type
type AppThemes = Record<"light" | "dark", Theme>;

// Extend library types for themes
declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

// Helper function to extend themes with custom colors
const extendThemes = (colors: ThemeColors): ThemeColors => ({
  ...colors,
});

// Function to create a theme by extending the base theme and theme-specific colors
const createTheme = (theme: Theme): Theme => ({
  ...baseTheme,
  id: theme.id,
  name: theme.name,
  isDark: theme.isDark,
  code: theme.code,
  colors: extendThemes(theme.colors),
});

// Configure StyleSheet with themes and settings
StyleSheet.configure({
  themes: {
    light: createTheme(Themes.light),
    dark: createTheme(Themes.dark),
  },
  settings: {
    initialTheme: "dark",
  },
});
