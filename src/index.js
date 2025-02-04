import React from 'react';
import ReactDOM from 'react-dom/client'; // Импортируем из 'react-dom/client'
import App from './App.js';

// Создаем корневой элемент
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение
root.render(<App />);