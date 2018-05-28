// @flow
declare module "@material-ui/core/CardActions" {

    import type {StandardProps} from "@material-ui/core/styles/withStyles";

    declare export type CardActionsClassKey = "root" | "action";

    // React$ElementProps<HTMLDivElement>
    declare export type CardActionsProps = StandardProps<{}, CardActionsClassKey> & {
        disableActionSpacing?: boolean
    };

    declare type CardActions = React$ComponentType<CardActionsProps>;

    declare module.exports: CardActions;
}
