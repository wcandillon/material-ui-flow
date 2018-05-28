// @flow
declare module "@material-ui/core/styles/createMuiTheme" {

    import type { Breakpoints, BreakpointsOptions } from "@material-ui/core/styles/createBreakpoints";
    import type { Mixins, MixinsOptions } from "@material-ui/core/styles/createMixins";
    import type { Palette, PaletteOptions } from "@material-ui/core/styles/createPalette";
    import type { Shadows } from "@material-ui/core/styles/shadows";
    import type { Spacing, SpacingOptions } from "@material-ui/core/styles/spacing";
    import type { Transitions, TransitionsOptions } from "@material-ui/core/styles/transitions";
    import type { Typography, TypographyOptions } from "@material-ui/core/styles/createTypography";
    import type { ZIndex, ZIndexOptions } from "@material-ui/core/styles/zIndex";
    // import type { Overrides } from "./overrides";

    declare type Direction = "ltr" | "rtl";

    declare type ThemeOptions = {
      direction?: Direction,
      palette?: PaletteOptions,
      typography?: TypographyOptions | ((palette: Palette) => TypographyOptions),
      mixins?: MixinsOptions,
      breakpoints?: BreakpointsOptions,
      shadows?: Shadows,
      transitions?: TransitionsOptions,
      spacing?: SpacingOptions,
      zIndex?: ZIndexOptions,
      overrides?: Object
    };

    declare type Theme = {
        direction: Direction,
        palette: Palette,
        typography: Typography,
        mixins: Mixins,
        shadows: Shadows,
        transitions: Transitions,
        spacing: Spacing,
        zIndex: ZIndex,
        overrides?: Object
    };

    declare module.exports: (options: ThemeOptions) => Theme;
}
