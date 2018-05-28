// @flow
declare module "@material-ui/core/TextField" {

    import type {StandardProps} from "@material-ui/core/styles/withStyles";
    import type {Margin} from "@material-ui/core/PropTypes";
    import type {FormControlProps} from "@material-ui/core/FormControl";
    import type {FormHelperTextProps} from "@material-ui/core/FormHelperText";
    import type {InputProps} from "@material-ui/core/Input";
    import type {InputLabelProps} from "@material-ui/core/InputLabel";
    import type {FormControlClassKey} from "@material-ui/core/FormControl";
    import type {SelectProps} from "@material-ui/core/Select";

    declare export type TextFieldClassKey = FormControlClassKey;

    declare export type TextFieldProps = StandardProps<FormControlProps, TextFieldClassKey> & {
        autoComplete?: string,
        autoFocus?: boolean,
        children?: React$Node,
        defaultValue?: string | number,
        disabled?: boolean,
        error?: boolean,
        FormHelperTextProps?: $Shape<FormHelperTextProps>,
        fullWidth?: boolean,
        helperText?: React$Node,
        id?: string,
        InputLabelProps?: $Shape<InputLabelProps>,
        InputProps?: $Shape<InputProps>,
        inputProps?: $PropertyType<InputProps, "inputProps">,
        inputRef?: React$Ref<any>,
        label?: React$Node,
        margin?: Margin,
        multiline?: boolean,
        name?: string,
        onChange?: SyntheticInputEvent<HTMLInputElement> => mixed,
        placeholder?: string,
        required?: boolean,
        rows?: string | number,
        rowsMax?: string | number,
        select?: boolean,
        SelectProps?: $Shape<SelectProps>,
        type?: string,
        value?: Array<string | number> | string | number
    };

    declare type TextField = React$ComponentType<TextFieldProps>;

    declare module.exports: TextField;
}
