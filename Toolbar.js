// @flow
declare module "@material-ui/core/Toolbar" {

    import type {StandardProps} from "@material-ui/core/styles/withStyles";
    import type {PaperProps} from "@material-ui/core/Paper";

    declare export type ToolbarClassKey =
        | "root"
        | "gutter";

    declare export type ToolbarProps = StandardProps<{}, ToolbarClassKey> & {
        disableGutters?: boolean
    };

    declare type Toolbar = React$ComponentType<ToolbarProps>;

    declare module.exports: Toolbar;
}
