module.exports = {
  presets: [
    ['@babel/preset-env'],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
    '@babel/plugin-transform-modules-commonjs',
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ].filter(Boolean),
};
