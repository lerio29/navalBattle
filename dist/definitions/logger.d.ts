export declare class Logger {
    name: string;
    logger: any;
    version: string;
    silent: boolean;
    constructor();
    info(...args: any[]): void;
    error(...args: any[]): void;
    warn(...args: any[]): void;
    debug(...args: any[]): void;
    private format(level, ...args);
}
