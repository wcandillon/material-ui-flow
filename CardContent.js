// @flow
declare module "@material-ui/core/CardContent" {

    import type {StandardProps} from "@material-ui/core/styles/withStyles";

    declare export type CardContentClassKey = "root";

    declare export type CardContentProps = StandardProps<React$ElementProps<HTMLDivElement>, CardContentClassKey>;

    declare type CardContent = React$ComponentType<CardContentProps>;

    declare module.exports: CardContent;
}
