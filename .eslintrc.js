module.exports = {
	extends: ['airbnb', 'airbnb-typescript'],
	rules: {
		'react/prop-types': 0,
		'react/jsx-no-bind': 0,
		'@typescript-eslint/indent': 0,
		'no-tabs': 0,
		'import/no-extraneous-dependencies': 0,
		'react/jsx-props-no-spreading': 0,
		'react/function-component-definition': 0,
		'react/react-in-jsx-scope': 0,
		'react/no-array-index-key': 'off',
		'no-nested-ternary': 'off',
		'react/jsx-no-constructed-context-values': 'off',
		'react/require-default-props': 'off',
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': 'off',
		'default-case': 'off',
		'react/jsx-no-useless-fragment': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			},
		],
		'react/button-has-type': 0
	},
};
