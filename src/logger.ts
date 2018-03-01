import * as chalk from 'chalk';


enum LEVEL {
	INFO,
	DEBUG,
	WARN,
	ERROR
	
}

export class Logger {

	public name :string;
	public logger :any;
	public version :string;
	public silent :boolean;

	constructor() {
	
		this.logger = console.log;
		this.silent = true;
	}

	public info(...args :any[]) :void{
		if (!this.silent) { return; }
		this.logger(this.format(LEVEL.INFO, ...args));
	}

	public error(...args:any[]) :void{
		if (!this.silent) { return; }
		this.logger(this.format(LEVEL.ERROR, ...args));
	}

	public warn(...args:any[]) :void{
		if (!this.silent) { return; }
		this.logger(this.format(LEVEL.WARN, ...args));
	}

	public debug(...args:any[]) :void{
		if (!this.silent) { return; }
		this.logger(this.format(LEVEL.DEBUG, ...args));
	}

	private format(level :LEVEL, ...args :any[]) :string{

		let pad :any = (s :any[], l:number, z :string = '') => {
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

