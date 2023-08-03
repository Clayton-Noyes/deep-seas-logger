# Project Title

The purpose of this project is to provide a wrapper around the incredible winston library that will automatically configure a few things that I find I configure a lot and would rather have come standard in the library, especially configuring Winston's metadata via Environment variables.

## Getting Started

1. Install the deep-seas-logger via either javascript dependency manager you would like: `yarn add deep-seas-logger` or `npm install deep-seas-logger`
2. Ensure that you have set the node environment variables associated with this logger:
  1. APP_NAME
  2. DOMAIN
  3. NODE_ENV
  4. USER_ID
  5. PLATFORM
3. Then import the createLogger function anywhere you would like to use it: `import { createLogger } from '../../index';`
4. You can now build an instance of the logger by invoking createLogger: `const logger = createLogger()`
