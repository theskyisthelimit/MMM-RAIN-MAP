// @ts-check
import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    ignores: ['MMM-RAIN-MAP.js', 'config.demo.js', 'changelog.config.js']
  },
  {
    rules: {
      '@typescript-eslint/no-extraneous-class': 'off'
    }
  },
  {
    files: ['tests/**/*.test.js'],
    languageOptions: {
      globals: {
        global: 'writable',
        require: 'readonly'
      }
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'no-undef': 'off'
    }
  }
)
