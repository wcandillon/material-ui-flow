// @flow
declare module "@material-ui/core/SvgIcon" {

    import type {Color} from "@material-ui/core/PropTypes";
    import type {StandardProps} from "@material-ui/core/styles/withStyles";

    declare export type SvgIconClassKey =
        | "root"
        | "colorSecondary"
        | "colorAction"
        | "colorDisabled"
        | "colorError"
        | "colorPrimary"
    ;

    // React$ElementProps<SVGSVGElement>
    declare export type SvgIconProps = StandardProps<{}, SvgIconClassKey> & {
        color?: Color | "action" | "disabled" | "error",
        nativeColor?: string,
        titleAccess?: string,
        viewBox?: string
    };

    declare type SvgIcon = React$ComponentType<SvgIconProps>;

    declare module.exports: SvgIcon;
}
