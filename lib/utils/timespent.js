const moment = require('moment');

class Timespent {
  constructor(title) {
    this.title = title;
  }

  start() {
    this.startts = moment();
  }

  end() {
    this.endts = moment();
  }

  getDiff(logger, data) {
    try {
      const duration = this.endts.diff(this.startts);
      logger.info(`[${data}] timespent ${this.title}: ${duration}ms`);
    } catch (err) {
      return;
    }
  }
}

module.exports = Timespent;
