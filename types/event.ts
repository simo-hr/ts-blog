// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type EventHandler = (...arg: any[]) => boolean | void | Promise<void>
