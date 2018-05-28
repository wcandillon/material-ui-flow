// @flow
declare module "@material-ui/core/styles/createTypography" {

  import type {Properties as CSSProperties} from "csstype";
  import type {Palette} from "@material-ui/core/styles/createPalette";

  declare type TextStyle = "display1" | "display2" | "display3" | "display4" | "headline" | "title" | "subheading"
   | "body1" | "body2" | "caption";

  declare type Style = TextStyle | "button";

  declare type FontStyle = {
    fontFamily: $PropertyType<CSSProperties<>, "fontFamily">,
    fontSize: $PropertyType<CSSProperties<>, "fontSize">,
    fontWeightLight: $PropertyType<CSSProperties<>, "fontWeight">,
    fontWeightRegular: $PropertyType<CSSProperties<>, "fontWeight">,
    fontWeightMedium: $PropertyType<CSSProperties<>, "fontWeight">,
    htmlFontSize?: $PropertyType<CSSProperties<>, "fontSize">
  };

  declare type TypographyStyle = {
    color?: string,
    fontFamily: $PropertyType<CSSProperties<>, "fontFamily">,
    fontSize: $PropertyType<CSSProperties<>, "fontSize">,
    fontWeight: $PropertyType<CSSProperties<>, "fontWeight">,
    letterSpacing?: $PropertyType<CSSProperties<>, "letterSpacing">,
    lineHeight?: $PropertyType<CSSProperties<>, "lineHeight">,
    textTransform?: $PropertyType<CSSProperties<>, "textTransform">
  };

  declare type TypographyUtils = {
      pxToRem: (px: number) => string
  };

  declare export type Typography = { [style: Style]:  $Shape<TypographyStyle> } & FontStyle & TypographyUtils;
  declare export type TypographyOptions = $Shape<{ [style: Style]:  $Shape<TypographyStyle> } & FontStyle>;
  declare module.exports: (
    palette: Palette,
    typography: TypographyOptions | ((palette: Palette) => TypographyOptions),
  ) => Typography;
}
