// @flow
declare module "@material-ui/core" {

    declare export type PaletteType = "light" | "dark";

    declare module.exports: {
        AppBar: any,
        Button: $Exports<"@material-ui/core/Button">,
        CardContent: $Exports<"@material-ui/core/CardContent">,
        CardActions: $Exports<"@material-ui/core/CardActions">,
        Card: $Exports<"@material-ui/core/Card">,
        Typography: $Exports<"@material-ui/core/Typography">,
        Paper: $Exports<"@material-ui/core/Paper">,
        TextField: $Exports<"@material-ui/core/TextField">,
        Toolbar: any
    };
}
