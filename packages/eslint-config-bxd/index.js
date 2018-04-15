module.exports = {
  "extends": [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier/react",
    "prettier/flowtype",
    "plugin:flowtype/recommended"
  ],
  "plugins": ["fp", "flowtype", "prettier"],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jest": true
  },
  "rules": {
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 0   // handled by flow
    'react/sort-comp': [
      2,
      {
        order: [
          'type-annotations',
          'state',
          '/^static fragments/',
          'static-methods',
          'lifecycle',
          '/^(on|handle).+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
  }
}
