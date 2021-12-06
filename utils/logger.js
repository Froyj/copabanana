const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint, align, printf, colorize } = format;

const consoleTransport = new transports.Console({
  format: format.combine(
    align(),
    timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
    colorize(),
    printf(info => `${info.level}: ${[info.timestamp]} ${info.message}`),
    printf(error => `${error.level}: ${[error.timestamp]} ${error.message}`),
  )
});

const fileTransport = new transports.File({
  filename: 'logs/server.log',
  format: combine(
    timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
    align(),
    prettyPrint(),
    printf(error => `${error.level}: ${[error.timestamp]}: ${error.message}`),
  )
})

const logger = createLogger({
  transports: [
    consoleTransport,
    fileTransport
  ]
});

module.exports = logger;