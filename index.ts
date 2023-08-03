import * as winston from 'winston';

// To add metadata to a log that differs from the standard meta keys:
//   logger.info('Hello world', { customMeta: 'custom data' });

function createLogger() {
  const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
  };

  const metadata = {
    // Expected Environment Variables
    appName: process.env.APP_NAME,
    domain: process.env.DOMAIN,
    environment: process.env.NODE_ENV,
    userId: process.env.USER_ID,
    platformType: process.env.PLATFORM
  };

  return winston.createLogger({
    levels,
    format: winston.format.json(),
    defaultMeta: metadata,
    transports: [
      new winston.transports.Console({ 
        format: winston.format.simple()
      }),
    ],
  });
}

export { createLogger };