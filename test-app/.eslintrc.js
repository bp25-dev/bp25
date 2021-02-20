module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "sql-injection",
        "xss"
    ],
    "rules": {
      "sql-injection/no-sql-injection": "error",
      "xss/no-mixed-html": 2
    }
};
