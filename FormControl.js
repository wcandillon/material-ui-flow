// @flow
declare module "@material-ui/core/FormControl" {

    import type {StandardProps} from "@material-ui/core/styles/withStyles";
    import type {Margin} from "@material-ui/core/PropTypes";

    declare export type FormControlClassKey = "root" | "marginNormal" | "marginDense" | "fullWidth";

    // React$ElementProps<HTMLDivElement>
    declare export type FormControlProps = StandardProps<{}, FormControlClassKey> & {
        component?: React$ComponentType<FormControlProps>,
        disabled?: boolean,
        error?: boolean,
        fullWidth?: boolean,
        margin?: Margin,
        onBlur?: SyntheticFocusEvent<any>,
        onFocus?: SyntheticFocusEvent<any>,
        required?: boolean
    };

    declare type FormControl = React$ComponentType<FormControlProps>;

    declare module.exports: FormControl;
}
