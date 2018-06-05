// @flow
declare module "@material-ui/core/Tabs" {

    import type {StandardProps} from "@material-ui/core/styles/withStyles";
    import type {ButtonBaseProps} from "@material-ui/core/ButtonBase";

    declare export type TabsClassKey =
        | "root"
        | "flexContainer"
        | "scroller"
        | "fixed"
        | "scrollable"
        | "centered"
        | "scrollButtons"
        | "scrollButtonsAuto"
        | "indicator";

    declare export type TabsActions = {
        updateIndicator: () => void
    };

    declare export type TabsProps = StandardProps<ButtonBaseProps, TabsClassKey> & {
        action?: (actions: TabsActions) => void,
        centered?: boolean,
        children?: React$Node,
        fullWidth?: boolean,
        indicatorColor?: "secondary" | "primary" | string,
        onChange?: (event: SyntheticEvent<{}>, value: any) => void,
        scrollable?: boolean,
        ScrollButtonComponent?: React$ComponentType<*>,
        scrollButtons?: "auto" | "on" | "off",
//        TabIndicatorProps?: $Shape<TabIndicatorProps>,
        textColor?: "secondary" | "primary" | "inherit" | string,
        value: any,
        width?: string
    };

    declare type Tabs = React$ComponentType<TabsProps>;

    declare module.exports: Tabs;
}
