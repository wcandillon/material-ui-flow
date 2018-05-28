// @flow
declare module "@material-ui/core/Select" {

    import type {StandardProps} from "@material-ui/core/styles/withStyles";
    import type {InputProps} from "@material-ui/core/Input";
    // import type {MenuProps} from "@material-ui/core/Menu";
    // import type {SelectInputProps} from "@material-ui/core/SelectInput";

    declare export type SelectClassKey = "root" | "select" | "selectMenu" | "disabled" | "icon";

    declare export type SelectProps = StandardProps<InputProps, SelectClassKey> & {
        autoWidth?: boolean;
        displayEmpty?: boolean;
        IconComponent?: React$Component<any>;
        input?: React$Node;
//        MenuProps?: $Shape<MenuProps>;
        multiple?: boolean;
        native?: boolean;
        onClose?: (event: SyntheticEvent<{}>) => void;
        onOpen?: (event: SyntheticEvent<{}>) => void;
        open?: boolean;
        renderValue?: (value: $PropertyType<SelectProps, "value">) => React$Node;
        SelectDisplayProps?: React$ElementProps<HTMLDivElement>;
        value?: Array<string | number> | string | number;
    };

    declare type Select = React$ComponentType<SelectProps>;

    declare module.exports: Select;
}
