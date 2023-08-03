import { createLogger } from '../../index';

beforeEach(() => {
  // Set new environment variables
  process.env.APP_NAME = 'testAppName';
  process.env.DOMAIN = 'testDomain';
  process.env.NODE_ENV = 'testEnvironment';
  process.env.USER_ID = 'testUserId';
  process.env.PLATFORM = 'testPlatform';
});

test('logger should have expected log functions', () => {
  const logger = createLogger();
  expect(logger.error).toBeDefined();
  expect(logger.warn).toBeDefined();
  expect(logger.info).toBeDefined();
  expect(logger.http).toBeDefined();
  expect(logger.verbose).toBeDefined();
  expect(logger.debug).toBeDefined();
  expect(logger.silly).toBeDefined();
});

test('logger should pull configuration from the environment', () => {
  const logger = createLogger();
  expect(logger.defaultMeta.appName).toBe(process.env.APP_NAME);
  expect(logger.defaultMeta.domain).toBe(process.env.DOMAIN);
  expect(logger.defaultMeta.environment).toBe(process.env.NODE_ENV);
  expect(logger.defaultMeta.userId).toBe(process.env.USER_ID);
  expect(logger.defaultMeta.platformType).toBe(process.env.PLATFORM);
});