// @flow
declare module "@material-ui/core/styles/createPalette" {

  import type {CommonColors} from "@material-ui/core/colors/common";

  declare type TypeText = {
    primary: string,
    secondary: string,
    disabled: string,
    hint: string
  };

  declare type TypeAction = {
    active: string,
    hover: string,
    selected: string,
    disabled: string,
    disabledBackground: string
  };

  declare type TypeBackground = {
    default: string,
    paper: string
  };

  declare type PaletteType = "light" | "dark";

  declare type Color = {
    "50": string,
    "100": string,
    "200": string,
    "300": string,
    "400": string,
    "500": string,
    "600": string,
    "700": string,
    "800": string,
    "900": string,
    "A100": string,
    "A200": string,
    "A400": string,
    "A700": string
  };

  declare type PaletteColor = {
    light: string,
    main: string,
    dark: string,
    contrastText: string
  };

  declare type TypeObject = {
    text: TypeText;
    action: TypeAction;
    background: TypeBackground;
  };

  declare type SimplePaletteColorOptions = {
    light?: string,
    main: string,
    dark?: string,
    contrastText?: string
  };

  declare type PaletteColorOptions = SimplePaletteColorOptions | $Shape<Color>;

  declare export type PaletteOptions = {
    common?: $Shape<CommonColors>,
    type?: PaletteType,
    primary?: PaletteColorOptions,
    secondary?: PaletteColorOptions,
    error?: PaletteColorOptions,
    grey?: $Shape<Color>,
    text?: $Shape<TypeText>,
    divider?: string,
    action?: $Shape<TypeAction>,
    background?: $Shape<TypeBackground>,
    getContrastText?: (background: string) => string
  };

  declare export type Palette = {
    common: CommonColors,
    type: PaletteType,
    contrastThreshold: number,
    tonalOffset: number,
    primary: PaletteColor,
    secondary: PaletteColor,
    error: PaletteColor,
    grey: Color,
    text: TypeText,
    divider: string,
    action: TypeAction,
    background: TypeBackground,
    getContrastText: (background: string) => string,
    augmentColor: (
      color: string,
      mainShade: number | string,
      lightShade: number | string,
      darkShade: number | string,
    ) => void
  };

  declare export var light: TypeObject;
  declare export var dark: TypeObject;
  declare export default (palette: PaletteOptions) => Palette;
}
