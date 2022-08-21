const eslintRules = {
  'no-undef': 0,
  // error
  'no-await-in-loop': 0,  // 允许，循环中出现await
  'no-extra-parens': 1,  // 禁止，表达式多余的括号
  'no-template-curly-in-string': 1,  // 禁止，常规字符串使用模板字符串写法```

  // 未分类
  'no-unused-vars': 0,  // 禁止，声明后未使用的变量
  'no-useless-return': 1,  // 禁止，多余的 return
  // "eqeqeq": 1, // 警告，全等代替相等

  // style
  'array-bracket-newline': 1,  // 要求，数组中有换行则开头和结尾换行
  'array-bracket-spacing': [1, 'never'],  // 禁止，数组中括号内侧的空格
  // "array-element-newline": [1, 'always'],  // 要求，数组元素之间换行

  'block-spacing': [1, 'always'],  // 要求，代码块，大括号内侧需要空格
  'brace-style': [1, '1tbs', { allowSingleLine: true }],  // 要求，代码块，1tbs风格

  camelcase: 0,  // 禁止，标识符 驼峰命名
  // "capitalized-comments": 0,  // 禁止，注释的第一个字母大写
  'comma-dangle': [1, 'never'],  // 禁止，对象与数组，使用拖尾逗号
  'comma-spacing': 1,  // 禁止，逗号前空格，要求，逗号后空格
  'comma-style': [1, 'last'],  // 要求，语句换行时，若有逗号，则放在元素后
  'computed-property-spacing': [1, 'never'],  // 禁止，[]运算符中使用空格
  // "consistent-this": [1, 'that'],  // 警告，this 仅赋值给 标识符 that

  'eol-last': [1, 'always'],  // 警告，要求文件末尾空一行

  'func-call-spacing': [1, 'never'],  // 禁止，函数调用和标识符之间有空格
  // "func-name-matching": 0,  // 要求，函数初始化的变量，名字与函数名一致
  // "func-names": 0,  //  要求，函数表达式是否拥有名字
  // "func-style": [1, 'declaration', { "allowArrowFunctions": true }],  // 警告，使用函数声明而不是表达式，声明函数，允许使用箭头函数表达式
  'function-paren-newline': [1, 'consistent'],  // 警告，函数参数中有换行，则所有参数都换行

  // "id-blacklist": 0, // 标识符黑名单
  // "id-length": 0, // 标识长度，最小和最大
  // "id-match": 0, // 标识符黑名单
  'implicit-arrow-linebreak': [1, 'beside'], // 禁止，隐式返回的箭头函数，函数体出现前进行换行
  indent: [1, 2],  // 要求，缩进为 2 个空格

  'jsx-quotes': [1, 'prefer-double'],  // 要求，jsx标签中的属性值由双引号包裹

  'key-spacing': 1, // 要求，对象内的键值对，仅有一个空格在冒号后
  'keyword-spacing': [
    1, {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }
  ],  // 要求，关键字周围至少有一个空格

  // "line-comment-position": [1, { "position": "above" }],  // 要求，单行注释只能出现在代码上方
  // "linebreak-style": [2, "unix"],  // 要求，使用 unix 换行符
  // "lines-around-comment": 0,  // 要求，注释周围有空行
  'lines-between-class-members': [1, 'always', { exceptAfterSingleLine: true }],  // 要求，类成员之间需要空行分隔

  // "max-depth": [0, { "max": 4 }],  // 要求，块级语句嵌套 最大深度
  'max-len': [
    0, 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }
  ],  // 要求，每行 最大长度
  // "max-lines": [0, { "max": 300, "skipBlankLines": true, "skipComments": true }],  // 要求，文件最大行数
  // "max-lines-per-function": [0, { "max": 50 }],  // 要求，函数最大行数
  // "max-nested-callbacks": [0, { "max": 10 }],  // 要求，回调函数嵌套 最大深度
  // "max-params": [0, { "max": 3 }],  // 要求，函数参数 最多个数
  // "max-statements": [0, { "max": 3 }],  // 要求，函数语句 最大数量
  // "max-statements-per-line": [0, { "max": 1 }],  // 要求，每行 最大语句数量
  // "multiline-comment-style": [0, "starred-block"],  // 要求，块级注释，风格
  'multiline-ternary': [1, 'always-multiline'],  // 要求，三元表达式的换行

  // "new-cap": 1,  // 要求，构造函数首字母大写
  'new-parens': 1,  // 要求，调用构造函数，不管有没有参数，必须有圆括号()
  'newline-per-chained-call': [1, { ignoreChainWithDepth: 4 }],  // 要求，方法链中，每次调用前有一个换行符（同一行深度 4）
  // "no-array-constructor": 0,  // 禁止 Array 构造函数
  // "no-bitwise": 0,  // 禁止，位运算符
  // "no-continue": 0,  // 禁止，continue
  // "no-inline-comments": 1,  // 禁止，在代码后使用内联注释
  'no-lonely-if': 1,  // 禁止，if 作为 唯一语句出现在 else 代码块中
  // "no-mixed-operators": 0,  // 禁止，混合使用不同操作符
  'no-mixed-spaces-and-tabs': 1,  // 禁止，混合使用 tab 和 空格
  // "no-multi-assign": 1,  // 禁止，连续赋值
  'no-multiple-empty-lines': [1, { max: 1, maxBOF: 0, maxEOF: 0 }],  // 要求，连续空行最多一行
  // "no-negated-condition": 0,  // 禁止，否定表达式
  // "no-nested-ternary": 0,  // 禁止，嵌套的三元表达式
  'no-new-object': 1,  // 警告，禁止 Object 构造函数
  // "no-plusplus": 0,  // 禁止，一元操作符 ++ --
  // "no-restricted-syntax": [0, { "select": "...", "message": "..."},...],  // 禁止，指定的语法
  'no-tabs': 1,  // 禁止，tab
  // "no-ternary": 0,  // 禁止，三元操作符 ? :
  'no-trailing-spaces': [
    1, {
      skipBlankLines: false,
      ignoreComments: false
    }
  ],  // 禁止，行尾空格、tab、空白字符
  // "no-underscore-dangle": 0,  // 禁止，标识符中的 _
  'no-unneeded-ternary': 1,  // 警告，禁止，多余的三元表达式
  'no-whitespace-before-property': 1,  // 禁止，属性前非用于缩进的空白字符
  // "nonblock-statement-body-position": 0,  // 要求，单行语句是否能换行

  'object-curly-newline': [1, { consistent: true }],  // 要求，统一花括号内的换行符
  'object-curly-spacing': [1, 'always'],  // 要求，统一花括号中的空格
  // "object-property-newline": 0,  // 要求，对象属性放在不同行上
  // "one-var": [1, "never"],  // 要求，作用域内的变量 分开 声明
  'one-var-declaration-per-line': 1,  // 要求，变量声明周围换行
  'operator-linebreak': [1, 'before'],  // 要求，操作符的换行符风格

  'padded-blocks': [1, 'never'],  // 禁止，代码块和类的头尾有空行
  // "padding-line-between-statements": 0,  // 禁止，语句之间填充空行
  // "prefer-object-spread": 0, // 要求，优先使用对象扩展，而不是Object.assign

  'quote-props': [1, 'as-needed', { keywords: false, unnecessary: true, numbers: false }],  // 要求，对象属性为无效标识符使用引号
  quotes: [1, 'single', { avoidEscape: true }],  // 要求，除了字符串，尽量使用单引号

  semi: 1,  // 要求，句尾封号
  'semi-spacing': [1, { before: false, after: true }],  // 要求，封号左侧禁止空格
  // "semi-style": [0, "last"],  // 要求，封号出现位置 句头/句尾
  // "sort-keys": 0,  // 要求，声明的对象属性按序排列
  // "sort-vars": 0,  // 要求，声明的变量按序排列
  'space-before-blocks': [1, 'always'],  // 要求，代码块` {}`左侧应至少一个空格
  'space-before-function-paren': [1, { anonymous: 'always', named: 'never', asyncArrow: 'always' }],  // 要求，函数参数括号`()`左侧的空格，匿名函数需要，命名函数不需要，异步箭头需要
  'space-in-parens': [1, 'never'],  // 禁止，小括号内空格
  'space-infix-ops': 1,  // 要求，操作符两侧需要空格
  'space-unary-ops': [1, { words: true, nonwords: false }],  // 要求，一元操作符左或右侧需要空格，单词类一元操作符需要，符号类一元操作符两侧不需要
  'spaced-comment': 1,  // 要求，注释的第一个字符需要空白
  'switch-colon-spacing': 1,  // 要求，`switch`的`case`冒号左侧无空格，右侧有空格
  'template-tag-spacing': 1,  // 禁止，模板标记函数，函数名与参数之间无空格
  // "unicode-bom": 0,  // 要求，文件以Unicode BOM开头
  'wrap-regex': 1,  // 要求，正则表达式被括号包裹
  // es6
  'arrow-spacing': [1, { before: true, after: true }],  // 要求，箭头函数两侧应至少一个空格
  'object-shorthand': 1,  // 要求，对象字面量中方法和属性使用简写语法
  'prefer-const': 1,  // 要求，使用`const`声明不再被修改的变量
  'no-const-assign': 1,  // 禁止，修改`const`声明的变量
  'no-var': 1  // 禁止，使用`var`声明变量
};
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    ...eslintRules,
    '@typescript-eslint/no-var-requires': 0

  }
};
