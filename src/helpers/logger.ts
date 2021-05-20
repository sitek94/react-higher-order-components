type Logger = (msg: any) => void;

export const log: Logger = (msg) => console.log(msg);
export const warn: Logger = (msg) => console.warn(msg);
export const info: Logger = (msg) => console.info(msg);
export const error: Logger = (msg) => console.error(msg);
