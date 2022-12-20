module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'standard'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
        'arrow-spacing': ['error', {
            after: true,
            before: true,
        }],
        'comma-dangle': ['warn', 'always-multiline'],
        'comma-spacing': ['error', {
            after: true,
            before: false,
        }],
        indent: ['warn', 2],
        'key-spacing': ['error', {
            afterColon: true,
            beforeColon: false,
        }],
        'keyword-spacing': ['warn'],
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-empty-pattern': 'warn',
        'no-multi-spaces': 'warn',
        'no-unused-vars': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'quote-props': ['warn', 'as-needed'],
        quotes: ['warn', 'single'],
        semi: ['warn', 'never'],
        'space-before-blocks': ['warn', 'always'],
        'space-before-function-paren': ['warn', 'always'],
        'space-in-parens': ['warn'],
        'space-infix-ops': 'warn',
        'no-var': 'off',
        'array-callback-return': [
            'warn',
            {
                allowImplicit: false,
                checkForEach: true,
            },
        ],
        'default-case-last': [
            'warn',
        ],
        'multiline-ternary': 'off',
        'no-empty': [
            'warn',
            {
                allowEmptyCatch: true,
            },
        ],
    },
};
