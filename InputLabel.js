// @flow
declare module "@material-ui/core/InputLabel" {

    import type {StandardProps, ClassNameMap} from "@material-ui/core/styles/withStyles";
    import type {FormLabelProps, FormLabelClassKey} from "@material-ui/core/FormLabel";

    declare export type InputLabelClassKey = "root" | "marginNormal" | "marginDense" | "fullWidth";

    declare export type InputLabelProps = StandardProps<FormLabelProps, InputLabelClassKey> & {
        disableAnimation?: boolean;
        disabled?: boolean;
        error?: boolean;
        FormLabelClasses?: $Shape<ClassNameMap<FormLabelClassKey>>;
        focused?: boolean;
        required?: boolean;
        shrink?: boolean;
    };

    declare type InputLabel = React$ComponentType<InputLabelProps>;

    declare module.exports: InputLabel;
}
