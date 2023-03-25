module.exports = {
  presets:[
    ["@babel/preset-env",{
      useBuiltIns: 'entry',
      corejs: '3.25.5',
      modules: 'commonjs',
    }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugin:[
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true, // or 'css'
      },
      'antd',
    ]
  ]
}