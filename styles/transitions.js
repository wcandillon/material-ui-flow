// @flow
declare module "@material-ui/core/styles/transitions" {

  declare type Easing = {
    easeInOut: string,
    easeOut: string,
    easeIn: string,
    sharp: string
  };

  declare type Duration = {
    shortest: number,
    shorter: number,
    short: number,
    standard: number,
    complex: number,
    enteringScreen: number,
    leavingScreen: number
  };

  declare export type Transitions = {
    easing: Easing,
    duration: Duration,
    create(
      props: string | string[],
      options?: $Shape<{ duration: number | string; easing: string; delay: number | string }>,
     ): string,
     getAutoHeightDuration(height: number): number
  };

  declare export type TransitionsOptions = {
    easing?: $Shape<Easing>;
    duration?: $Shape<Duration>;
    create?: (
      props: string | string[],
      options?: $Shape<{ duration: number | string; easing: string; delay: number | string }>,
    ) => string;
    getAutoHeightDuration?: (height: number) => number;
  };

  declare export var easing: Easing;
  declare export var duration: Duration;
  declare export var formatMs: (milliseconds: number) => string;
  declare export default Transitions;
}
