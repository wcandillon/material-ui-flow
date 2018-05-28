// @flow
declare module "@material-ui/core/Card" {

    import type {StandardProps} from "@material-ui/core/styles/withStyles";
    import type {PaperProps} from "@material-ui/core/Paper";

    declare export type CardClassKey = "root";

    declare export type CardProps = StandardProps<PaperProps, CardClassKey> & {
        raised?: boolean
    };

    declare type Card = React$ComponentType<CardProps>;

    declare module.exports: Card;
}
