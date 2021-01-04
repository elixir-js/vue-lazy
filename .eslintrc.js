module.exports = {
    env: {
        browser: true,
        es2021: true,
        amd: true,
        node: true,
        'jest/globals': true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    extends: ['eslint:recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
        'operator-linebreak': 0,
        'no-bitwise': 0,
        'import/no-unresolved': 0,
        'implicit-arrow-linebreak': 0,
        'no-else-return': 0,
        'no-lonely-if': 0,
        'space-unary-ops': 0,
        'no-plusplus': 0,
        'no-useless-constructor': 0,
        'no-param-reassign': 0,
        'import/extensions': 'off',
    },
};
