// @flow
declare module "@material-ui/core/ButtonBase" {

    import type {StandardProps} from "@material-ui/core/styles/withStyles";
    // import type {TouchRippleProps} from "@material-ui/core/TouchRippleProps";

    declare export type ButtonBaseClassKey = "root" | "disabled" | "focusVisible";

    declare export type ButtonBaseActions = {
        focusVisible: () => void
    };

    declare export type ButtonBaseProps = StandardProps<React$ElementProps<HTMLAnchorElement> & React$ElementProps<HTMLButtonElement>, ButtonBaseClassKey> & {
        action?: (actions: ButtonBaseActions) => void,
        buttonRef?: React$Ref<any>,
        centerRipple?: boolean,
        component?: React$ComponentType<ButtonBaseProps>,
        disableRipple?: boolean,
        focusRipple?: boolean,
        focusVisibleClassName?: string,
        onFocusVisible?: SyntheticFocusEvent<any>
        // TouchRippleProps?: $Shape<TouchRippleProps>;
    };

    declare type ButtonBase = React$ComponentType<ButtonBaseProps>;

    declare module.exports: ButtonBase;
}
