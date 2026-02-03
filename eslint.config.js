import vue from 'eslint-plugin-vue'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import vueA11y from 'eslint-plugin-vuejs-accessibility'

export default [
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': tseslint,
      prettier,
      'vuejs-accessibility': vueA11y,
    },
    rules: {
      'vue/multi-word-component-names': 'error',
      'vue/no-v-html': 'error',
      'vue/require-default-prop': 'error',
      'vue/require-prop-types': 'error',
      'prettier/prettier': 'error',
      // アクセシビリティルール
      'vuejs-accessibility/alt-text': 'error',
      'vuejs-accessibility/anchor-has-content': 'error',
      'vuejs-accessibility/click-events-have-key-events': 'warn',
      'vuejs-accessibility/form-control-has-label': 'warn',
      'vuejs-accessibility/heading-has-content': 'error',
      'vuejs-accessibility/label-has-for': 'off',
      'vuejs-accessibility/mouse-events-have-key-events': 'warn',
      'vuejs-accessibility/no-autofocus': 'warn',
      'vuejs-accessibility/no-static-element-interactions': 'off',
    },
  },
  {
    files: [
      'src/components/GlobalHeader.vue',
      '.worktree-dist/src/components/GlobalHeader.vue',
    ],
    rules: {
      'vue/no-v-html': 'off', // DOMPurifyでサニタイズ済み
    },
  },
  {
    files: ['src/views/**/*.vue', '.worktree-dist/src/views/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: [
      'src/components/article/**/*.vue',
      '.worktree-dist/src/components/article/**/*.vue',
    ],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      quotes: ['error', 'single', { avoidEscape: true }],
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  prettierConfig,
]
