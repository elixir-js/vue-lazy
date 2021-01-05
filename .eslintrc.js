module.exports = {
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: ['airbnb-base'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
        indent: ['error', 4],
        'operator-linebreak': [2, 'after', { overrides: { '?': 'after', ':': 'after' } }],
        linebreak: 'none',
    },
};
