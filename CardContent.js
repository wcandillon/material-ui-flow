// @flow
declare module "@material-ui/core/CardContent" {

    import type {StandardProps} from "@material-ui/core/styles/withStyles";

    declare export type CardContentClassKey = "root";

    // React$ElementProps<HTMLDivElement>
    declare export type CardContentProps = StandardProps<{}, CardContentClassKey>;

    declare type CardContent = React$ComponentType<CardContentProps>;

    declare module.exports: CardContent;
}
