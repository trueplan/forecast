module.exports = {
  verbose: true,
  roots: ['<rootDir>/client', '<rootDir>/design-system'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/src/(?:.+?)/dist/'],
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: ['<rootDir>/src/(?:.+?)/dist/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    ['\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$']:
      '<rootDir>/.jest/__mocks__/file-mock.js',
    ['\\.(scss|css|less)$']: '<rootDir>/.jest/__mocks__/style-mock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.ts'],
  transformIgnorePatterns: ['node_modules/'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
