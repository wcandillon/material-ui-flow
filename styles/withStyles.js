// @flow
declare module "@material-ui/core/styles/withStyles" {

    import type {Properties as CSSProperties} from "csstype";
    import type {WithTheme} from "@material-ui/core/styles/withTheme";
    import type {Theme} from "@material-ui/core/styles/createMuiTheme";

    declare type Record<K, V> = { [K]: V };
    declare type StyleRules<ClassKey: string> = Record<ClassKey, CSSProperties<number>>;
    declare export type StyleRulesCallback<ClassKey: string> = (theme: Theme) => StyleRules<ClassKey>;

    declare type WithStylesOptions = {
      flip?: boolean,
      withTheme?: boolean,
      name?: string
    };

    declare export type ClassNameMap<ClassKey: string = string> = Record<ClassKey, string>;

    declare export type WithStyles<ClassKey: string = string> = $Shape<WithTheme> & {
        classes: ClassNameMap<ClassKey>
    };

    declare export type StyledComponentProps<ClassKey: string = string> = {
        classes?: $Shape<ClassNameMap<ClassKey>>,
        innerRef?: React$Ref<any>
    };

    // & C
    declare export type StandardProps<C, ClassKey: string> = StyledComponentProps<ClassKey> & {
        className?: string,
        style?: $Shape<CSSProperties<*>>
    };

    declare module.exports: <ClassKey: string, Props: {}, Comp: React$ComponentType<Props>>(
        style: StyleRules<ClassKey> | StyleRulesCallback<ClassKey>,
        options?: WithStylesOptions
    ) => (C: Comp) => Class<React$Component<$Diff<React$ElementConfig<Comp>, WithStyles<ClassKey>>>>;
}
