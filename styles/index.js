// @flow
declare module "@material-ui/core/styles" {
    import type {Theme} from "@material-ui/core/styles/createMuiTheme";
    import type {WithStyles as ExportsWithStyles} from "@material-ui/core/styles/withStyles";

    declare export type WithStyles<ClassKey: string = string> = ExportsWithStyles<ClassKey>;

    declare module.exports: {
        Theme: Theme,
        withStyles: $Exports<"@material-ui/core/styles/withStyles">,
        MuiThemeProvider: $Exports<"@material-ui/core/styles/MuiThemeProvider">,
        createMuiTheme: $Exports<"@material-ui/core/styles/createMuiTheme">
    };
}
