// @flow
declare module "@material-ui/core/styles" {

    import type {Properties as CSSProperties} from "csstype";
    import type {Theme} from "@material-ui/core/styles/createMuiTheme";
    import type {WithStyles as ExportsWithStyles, StyleRulesCallback as ExportsStyleRulesCallback} from "@material-ui/core/styles/withStyles";

    declare export type StylingProps = {
        className?: string,
        style?: $Shape<CSSProperties<*>>
    };

    declare export type WithStyles<ClassKey: string = string> = ExportsWithStyles<ClassKey>;
    declare export type StyleRulesCallback<ClassKey: string = string> = ExportsStyleRulesCallback<ClassKey>;

    declare module.exports: {
        Theme: Theme,
        withStyles: $Exports<"@material-ui/core/styles/withStyles">,
        MuiThemeProvider: $Exports<"@material-ui/core/styles/MuiThemeProvider">,
        createMuiTheme: $Exports<"@material-ui/core/styles/createMuiTheme">
    };
}
