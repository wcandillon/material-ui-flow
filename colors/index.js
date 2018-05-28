// @flow
declare module "@material-ui/core/colors" {

    declare export type Color = {
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
      A100: string,
      A200: string,
      A400: string,
      A700: string
    };

    declare module.exports: {
        amber: Color,
        blue: Color,
        blueGrey: Color,
        brown: Color,
        common: Color,
        cyan: Color,
        deepOrange: Color,
        deepPurple: Color,
        green: Color,
        grey: Color,
        indigo: Color,
        lightBlue: Color,
        lightGreen: Color,
        lime: Color,
        orange: Color,
        pink: Color,
        purple: Color,
        red: Color,
        teal: Color,
        yellow: Color
    };
}
