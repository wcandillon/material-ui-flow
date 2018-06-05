// @flow
declare module "@material-ui/core" {

    declare export type PaletteType = "light" | "dark";

    declare module.exports: {
        AppBar: $Exports<"@material-ui/core/AppBar">,
        Button: $Exports<"@material-ui/core/Button">,
        Card: $Exports<"@material-ui/core/Card">,
        CardContent: $Exports<"@material-ui/core/CardContent">,
        CardActions: $Exports<"@material-ui/core/CardActions">,
        Paper: $Exports<"@material-ui/core/Paper">,
        Tabs: $Exports<"@material-ui/core/Tabs">,
        Tab: $Exports<"@material-ui/core/Tab">,
        Typography: $Exports<"@material-ui/core/Typography">,
        TextField: $Exports<"@material-ui/core/TextField">,
        SvgIcon: $Exports<"@material-ui/core/SvgIcon">,
        Toolbar: $Exports<"@material-ui/core/Toolbar">,
        IconButton: $Exports<"@material-ui/core/IconButton">
    };
}
