import { generateMedia } from "styled-media-query";

export const mediaWidths = generateMedia({
  hugeScreens: "2560px",
  desktopLarge: "1366px",
  desktop: "1280px",
  tablet: "1024px",
  tabletSmall: "720px",
  phoneLarge: "640px",
});

export const mediaHeights = generateMedia({
  hugeScreens: "2560px",
  desktopLarge: "1366px",
  desktop: "1280px",
  tablet: "1024px",
  tabletSmall: "720px",
  phoneLarge: "640px",
});
