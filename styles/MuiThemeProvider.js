// @flow
declare module "@material-ui/core/styles/MuiThemeProvider" {

    import type {StandardProps} from "@material-ui/core/styles/withStyles";
    import type {Theme} from "@material-ui/core/styles/createMuiTheme";

/*
    declare type SheetManagerTheme = {
        refs: number,
        sheet: StyleSheet<string>
    };
*/
    declare export type MuiThemeProviderProps = {
      theme: Theme | ((outer: Theme | null) => Theme),
//      sheetsManager?: Map<StylesCreator, Map<Theme, SheetManagerTheme>>;
      disableStylesGeneration?: boolean,
      children: React$Node
    };

    declare type MuiThemeProvider = React$ComponentType<MuiThemeProviderProps>;

    declare module.exports: MuiThemeProvider;
}
