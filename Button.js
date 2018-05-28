// @flow
declare module "@material-ui/core/Button" {

    import type {Color} from "@material-ui/core/PropTypes";
    import type {StandardProps} from "@material-ui/core/styles/withStyles";
    import type {ButtonBaseProps} from "@material-ui/core/ButtonBase";

    declare export type ButtonClassKey =
      | "root"
      | "label"
      | "flatPrimary"
      | "flatSecondary"
      | "colorInherit"
      | "raised"
      | "focusVisible"
      | "raisedPrimary"
      | "raisedSecondary"
      | "disabled"
      | "fab"
      | "mini"
      | "sizeSmall"
      | "sizeLarge"
      | "fullWidth";

    declare export type ButtonProps = StandardProps<ButtonBaseProps, ButtonClassKey> & {
        color?: Color,
        component?: React$ComponentType<ButtonProps>,
        disabled?: boolean,
        disableFocusRipple?: boolean,
        disableRipple?: boolean,
        fullWidth?: boolean,
        href?: string,
        mini?: boolean,
        size?: "small" | "medium" | "large",
        type?: string,
        variant?: "flat" | "outlined" | "raised" | "fab"
    };

    declare type Button = React$ComponentType<ButtonProps>;

    declare module.exports: Button;
}
