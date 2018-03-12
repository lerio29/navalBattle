"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
/**
 * @author Vincent VILERIO
 */
var LEVEL;
(function (LEVEL) {
    LEVEL[LEVEL["INFO"] = 0] = "INFO";
    LEVEL[LEVEL["DEBUG"] = 1] = "DEBUG";
    LEVEL[LEVEL["WARN"] = 2] = "WARN";
    LEVEL[LEVEL["ERROR"] = 3] = "ERROR";
})(LEVEL || (LEVEL = {}));
/**
 * Create a Logger object
 * @class <p>A AircraftCarrier is a Ship with a lenght of 5</p>
 */
class Logger {
    /**
     * [Logger constructor]
     * @constructor
     */
    constructor() {
        this.logger = console.log;
        this.silent = true;
    }
    info(...args) {
        if (!this.silent) {
            return;
        }
        this.logger(this.format(LEVEL.INFO, ...args));
    }
    error(...args) {
        if (!this.silent) {
            return;
        }
        this.logger(this.format(LEVEL.ERROR, ...args));
    }
    warn(...args) {
        if (!this.silent) {
            return;
        }
        this.logger(this.format(LEVEL.WARN, ...args));
    }
    debug(...args) {
        if (!this.silent) {
            return;
        }
        this.logger(this.format(LEVEL.DEBUG, ...args));
    }
    format(level, ...args) {
        let pad = (s, l, z = '') => {
            return s + Array(Math.max(0, l - s.length + 1)).join(z);
        };
        let msg = args.join(' ');
        if (args.length > 1) {
            msg = `${pad(args.shift(), 15, ' ')}: ${args.join(' ')}`;
        }
        switch (level) {
            case LEVEL.INFO:
                msg = chalk.default.green(msg);
                break;
            case LEVEL.DEBUG:
                msg = chalk.default.cyan(msg);
                break;
            case LEVEL.WARN:
                msg = chalk.default.yellow(msg);
                break;
            case LEVEL.ERROR:
                msg = chalk.default.red(msg);
                break;
        }
        return [
            msg
        ].join('');
    }
}
exports.Logger = Logger;

//# sourceMappingURL=../maps/logger.js.map
