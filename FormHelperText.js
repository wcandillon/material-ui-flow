// @flow
declare module "@material-ui/core/FormHelperText" {

    import type {StandardProps} from "@material-ui/core/styles/withStyles";
    import type Margin from "@material-ui/core/PropTypes";

    declare export type FormHelperTextClassKey = "root" | "error" | "disabled" | "marginDense";

    declare export type FormHelperTextProps =
        StandardProps<React$ElementProps<HTMLParagraphElement>, FormHelperTextClassKey> & {
            disabled?: boolean,
            error?: boolean,
            component?: React$ComponentType<FormHelperTextProps>,
            margin?: "dense"
    };

    declare type FormHelperText = React$ComponentType<FormHelperTextProps>;

    declare module.exports: FormHelperText;
}
