// @flow
declare module "@material-ui/core/Tab" {

    import type {Properties as CSSProperties} from "csstype";
    import type {StandardProps} from "@material-ui/core/styles/withStyles";
    import type {ButtonBaseProps} from "@material-ui/core/ButtonBase";

    declare export type TabClassKey =
        | "root"
        | "labelIcon"
        | "textColorInherit"
        | "textColorPrimary"
        | "textColorSecondary"
        | "selected"
        | "disabled"
        | "fullWidth"
        | "wrapper"
        | "labelContainer"
        | "label"
        | "labelWrapped";

    declare export type TabProps = StandardProps<ButtonBaseProps, TabClassKey> & {
        disabled?: boolean,
        fullWidth?: boolean,
        icon?: string | React$Element<any>,
        value?: any,
        label?: React$Node,
        onChange?: (event: SyntheticEvent<{ checked: boolean }>, value: any) => void,
        onClick?: SyntheticEvent<any>,
        selected?: boolean,
        style?: CSSProperties<*>,
        textColor?: string | "secondary" | "primary" | "inherit"
    };

    declare type Tab = React$ComponentType<TabProps>;

    declare module.exports: Tab;
}
