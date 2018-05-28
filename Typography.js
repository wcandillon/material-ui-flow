// @flow
declare module "@material-ui/core/Typography" {

    import type {StandardProps} from "@material-ui/core/styles/withStyles";
    import type {Style, TextStyle} from "@material-ui/core/styles/createTypography";
    import type {Color, Alignment} from "@material-ui/core/PropTypes";

    declare export type TypographyClassKey = "root"
      | "display4"
      | "display3"
      | "display2"
      | "display1"
      | "headline"
      | "title"
      | "subheading"
      | "body2"
      | "body1"
      | "caption"
      | "button"
      | "alignLeft"
      | "alignCenter"
      | "alignRight"
      | "alignJustify"
      | "noWrap"
      | "gutterBottom"
      | "paragraph"
      | "colorInherit"
      | "colorSecondary"
      | "colorTextSecondary";

    declare export type TypographyProps = StandardProps<React$ElementProps<HTMLElement>, TypographyClassKey> & {
        align?: Alignment;
        color?: Color | "textSecondary" | "error";
        component?: React$ComponentType<TypographyProps>;
        gutterBottom?: boolean;
        headlineMapping?: { [type: $Keys<TextStyle>]: string };
        noWrap?: boolean;
        paragraph?: boolean;
        variant?: Style | "caption" | "button";
    };

    declare type Typography = React$ComponentType<TypographyProps>;

    declare module.exports: Typography;
}
