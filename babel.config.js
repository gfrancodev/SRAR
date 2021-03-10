module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@entities':'./src/entities',
        '@database': './src/database',
        '@repositories':'./src/repositories',
        '@usecase':'./src/useCase',
        '@providers':'./src/providers'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
