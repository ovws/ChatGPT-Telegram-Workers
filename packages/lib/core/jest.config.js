export default {
    testEnvironment: 'node',
    transform: {
        '^.+.tsx?$': ['ts-jest', {}],
    },
    moduleNameMapper: {
        '^#/(.*)$': '<rootDir>/src/$1',
    },
};
