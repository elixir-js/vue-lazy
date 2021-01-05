module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        // Will be usefull in the future.
        // '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)s?$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
