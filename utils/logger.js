const { createLogger, format, transports } = require('winston');
const { combine, timestamp, simple, align, printf, colorize } = format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `${level}: ${[timestamp]} ${message}`;
})

const consoleTransport = new transports.Console({
  format: combine(
    colorize({ all: true }),
    align(),
    timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
    customFormat
  )
});

const logger = createLogger({
  transports: [
    consoleTransport,
  ]
});

module.exports = logger;