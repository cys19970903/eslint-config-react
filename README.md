# eslint-config-bebop
Eslint config for React

## Install

```sh
yarn add -D eslint-config-bebop
```

## Usage

In your `.eslintrc.js`:

```tsx
module.exports = {
  extends: ['bebop'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
```

## License

MIT
