// @flow
declare module "@material-ui/core/styles/createMixins" {

    import type {Properties as CSSProperties} from "csstype";
    import type {Breakpoints} from "@material-ui/core/styles/createBreakpoints";
    import type {Spacing} from "@material-ui/core/styles/spacing";

    declare export type Mixins = {
      gutters: (styles?: CSSProperties<*>) => CSSProperties<*>,
      toolbar: CSSProperties<*>
    };

    declare export type MixinsOptions = $Shape<Mixins>;

    declare module.exports: (
    breakpoints: Breakpoints,
    spacing: Spacing,
    mixins: MixinsOptions
    ) => Mixins;
}
