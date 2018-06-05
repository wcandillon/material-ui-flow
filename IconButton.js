// @flow
declare module "@material-ui/core/IconButton" {

    import type {Color} from "@material-ui/core/PropTypes";
    import type {StandardProps} from "@material-ui/core/styles/withStyles";
    import type {ButtonBaseProps} from "@material-ui/core/ButtonBase";

    declare export type IconButtonClassKey =
        | "root"
        | "colorInherit"
        | "colorPrimary"
        | "colorSecondary"
        | "disabled"
        | "label";

    declare export type IconButtonProps = StandardProps<ButtonBaseProps, IconButtonClassKey> & {
        color?: Color,
        disabled?: boolean,
        disableRipple?: boolean
    };

    declare type IconButton = React$ComponentType<IconButtonProps>;

    declare module.exports: IconButton;
}
