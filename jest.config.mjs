import { defaults } from 'jest-config'

/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
export default {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mjs'],

    testEnvironment: 'node',
    testMatch: [...defaults.testMatch, '**/?(*.)+(spec|test).mjs'],

    // Required to support tests in ES modules / .mjs files.
    // See https://jestjs.io/docs/ecmascript-modules.
    transform: {},
}
