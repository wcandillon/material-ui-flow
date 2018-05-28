// @flow
declare module "@material-ui/core/styles/createBreakpoints" {

  declare type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";
  declare type BreakpointValues = { [key: Breakpoint]: number };

  declare export type Breakpoints = {
    keys: Breakpoint[],
    values: BreakpointValues,
    up: (key: Breakpoint | number) => string,
    down: (key: Breakpoint | number) => string,
    between: (start: Breakpoint, end: Breakpoint) => string,
    only: (key: Breakpoint) => string,
    width: (key: Breakpoint) => number
  };

  declare export type BreakpointsOptions = $Shape<{ unit: string, step: number } & Breakpoints>;

  declare module.exports: {
    keys: Array<Breakpoint>,
    default: (breakpoints: BreakpointsOptions) => Breakpoints
  };
}
