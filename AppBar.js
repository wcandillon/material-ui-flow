// @flow
declare module "@material-ui/core/AppBar" {

    import type {Color} from "@material-ui/core/PropTypes";
    import type {StandardProps} from "@material-ui/core/styles/withStyles";
    import type {PaperProps} from "@material-ui/core/Paper";

    declare export type AppBarClassKey =
        | "root"
        | "positionFixed"
        | "positionAbsolute"
        | "positionSticky"
        | "positionStatic"
        | "colorDefault"
        | "colorPrimary"
        | "colorSecondary";

    declare export type AppBarProps = StandardProps<PaperProps, AppBarClassKey> & {
        color?: Color,
        position?: "fixed" | "absolute" | "sticky" | "static"
    };

    declare type AppBar = React$ComponentType<AppBarProps>;

    declare module.exports: AppBar;
}
