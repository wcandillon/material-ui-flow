// @flow
declare module "@material-ui/core/styles/spacing" {

  declare export type Spacing = {
      unit: number
  };

  declare export type SpacingOptions = $Shape<Spacing>;

  declare module.exports: Spacing;
}
