class Logger {
    constructor() {
      this.errors = [];
      this.warnings = [];
      this.infos = [];
    }
  
    error(error) {
        this.errors.push(`${error}.`);
        console.error(error);
    }
  
    warn(warn) {
        this.warnings.push(`Warning: ${warn}.`);
        console.warn(warn);
    }
  
    info(info) {
        this.infos.push(`Info: ${info}.`);
        console.info(info);
    }

    silent_info(info) {
        console.info(info);
    }
}


export default Logger;