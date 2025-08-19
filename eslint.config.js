import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import eslintConfigPrettier from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier"; 
import jsdocPlugin from "eslint-plugin-jsdoc"; 

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      prettier,    
      jsdoc: jsdocPlugin
    },
      settings: {
        react: {
          version: 'detect',
        },
        jsdoc : {
          ignoreInternal: true, 
        }
      },
      rules: {
        "prettier/prettier": "error",
        "prefer-arrow-callback": ["error"],
        "jsdoc/require-jsdoc": ["warn", {
          contexts: [
            "FunctionDeclaration",
            "ClassDeclaration",
            "MethodDefinition",
            "ArrowFunctionExpression"
          ],
          require: {
            FunctionDeclaration: true,
            ClassDeclaration: true,
            MethodDefinition: true,
            ArrowFunctionExpression: true,
          }
        }],
      }
  },
  eslintConfigPrettier
])
