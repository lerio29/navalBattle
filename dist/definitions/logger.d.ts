/**
 * Create a Logger object
 * @class <p>A AircraftCarrier is a Ship with a lenght of 5</p>
 */
export declare class Logger {
    name: string;
    logger: any;
    version: string;
    silent: boolean;
    /**
     * [Logger constructor]
     * @constructor
     */
    constructor();
    info(...args: any[]): void;
    error(...args: any[]): void;
    warn(...args: any[]): void;
    debug(...args: any[]): void;
    private format(level, ...args);
}
