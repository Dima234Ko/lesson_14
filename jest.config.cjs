module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',  // Для трансформации файлов .js и .jsx
    '^.+\\.svg$': 'jest-transform-stub',  // Для трансформации SVG файлов
  },
  testEnvironment: 'jsdom',  // Используем jsdom для имитации браузерной среды
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',  // Мокируем CSS импорты
  },
  transformIgnorePatterns: [
    '/node_modules/',  // Игнорируем node_modules, если не нужно их трансформировать
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',  // Используем jest-dom для дополнительных матчеров
  ],
};
