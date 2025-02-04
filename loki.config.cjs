module.exports = {
  stories: ['./src/**/*.stories.jsx'],    addons: ['@storybook/addon-storyshots', '@storybook/addon-actions'],
  serverPort: 6444,
  fetchFailIgnore: false,
  "configurations": {
    "chrome.laptop": {
      "target": "chrome.app",
      "width": 1366,
      "height": 768
    },
  }
 };