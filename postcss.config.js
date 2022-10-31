/** @type {import('tailwindcss').Config} */

const { join } = require('path');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './pages/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './ui/**/**/*.{js,ts,jsx,tsx}',
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './pages/*.{js,ts,jsx,tsx}'),
    join(__dirname, './components/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './ui/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './ui/**/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/**/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/**/**/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/**/**/**/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: { extend: {} },
  plugins: [],
};
