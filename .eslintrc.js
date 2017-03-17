module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 0,
        "no-unused-vars": "off",
        "eqeqeq": 1,
        "no-fallthrough": 1,
        "default-case": 1,
        "no-redeclare": 1,
        "no-self-assign": 1,
        "no-empty": 1,
        "wrap-iife": [
          "warn",
          "inside"
        ]
    }
};
