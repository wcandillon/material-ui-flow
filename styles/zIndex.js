// @flow
declare module "@material-ui/core/styles/zIndex" {

  declare export type ZIndex = {
    mobileStepper: number,
    appBar: number,
    drawer: number,
    modal: number,
    snackbar: number,
    tooltip: number
  };

  declare type ZIndexOptions = $Shape<ZIndex>;

  declare module.exports: ZIndex;
}
