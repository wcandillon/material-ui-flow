// @flow
declare module "@material-ui/core/Input" {

    import type {StandardProps} from "@material-ui/core/styles/withStyles";
    import type {Margin} from "@material-ui/core/PropTypes";

    declare export type InputClassKey = | "root"
      | "formControl"
      | "focused"
      | "disabled"
      | "underline"
      | "error"
      | "multiline"
      | "fullWidth"
      | "input"
      | "inputMarginDense"
      | "inputDisabled"
      | "inputMultiline"
      | "inputType"
      | "inputTypeSearch";

    declare export type InputProps = StandardProps<React$ElementProps<HTMLDivElement>, InputClassKey> & {
        autoComplete?: string;
        autoFocus?: boolean;
        defaultValue?: string | number;
        disabled?: boolean;
        disableUnderline?: boolean;
        endAdornment?: React$Node;
        error?: boolean;
        fullWidth?: boolean;
        id?: string;
        inputComponent?: React$ComponentType<{ [arbitrary: string]: any }>;
        inputProps?: { [arbitrary: string]: any };
        inputRef?: React$Ref<any>;
        margin?: 'dense';
        multiline?: boolean;
        name?: string;
        placeholder?: string;
        rows?: string | number;
        rowsMax?: string | number;
        startAdornment?: React$Node;
        type?: string;
        value?: Array<string | number> | string | number;
        /**
         * `onChange`, `onKeyUp` + `onKeyDown` are applied to the inner `InputComponent`,
         * which by default is an input or textarea. Since these handlers differ from the
         * ones inherited by `React.HTMLAttributes<HTMLDivElement>` we need to omit them.
         *
         * Note that  `blur` and `focus` event handler are applied to the outter `<div>`.
         * So these can just be inherited from the native `<div>`.
         */
        onChange?: SyntheticKeyboardEvent<HTMLTextAreaElement | HTMLInputElement>;
        onKeyUp?: SyntheticKeyboardEvent<HTMLTextAreaElement | HTMLInputElement>;
        onKeyDown?: SyntheticKeyboardEvent<HTMLTextAreaElement | HTMLInputElement>;
    };

    declare type Input = React$ComponentType<InputProps>;

    declare module.exports: Input;
}
