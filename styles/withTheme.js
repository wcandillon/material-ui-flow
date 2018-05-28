// @flow
declare module "@material-ui/core/styles/withTheme" {
    import type { Theme } from "@material-ui/core/styles/createMuiTheme";

    declare export type WithTheme = {
        theme: Theme
    };
}
