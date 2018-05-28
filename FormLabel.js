// @flow
declare module "@material-ui/core/FormLabel" {

    import type {StandardProps} from "@material-ui/core/styles/withStyles";

    declare export type FormLabelBaseProps = React$ElementProps<HTMLLabelElement>;
    declare export type FormLabelClassKey = "root" | "focused" | "disabled" | "error" | "asterisk";

    declare export type FormLabelProps = StandardProps<FormLabelBaseProps, FormLabelClassKey> & {
        component?: React$ComponentType<FormLabelBaseProps>,
        disabled?: boolean,
        error?: boolean,
        focused?: boolean,
        required?: boolean
    };

    declare type FormLabel = React$ComponentType<FormLabelProps>;

    declare module.exports: FormLabel;
}
