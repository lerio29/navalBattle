export declare class Logger {
    name: any;
    logger: any;
    version: any;
    silent: any;
    constructor();
    info(...args: any[]): void;
    error(...args: any[]): void;
    warn(...args: any[]): void;
    debug(...args: any[]): void;
    private format(level, ...args);
}
