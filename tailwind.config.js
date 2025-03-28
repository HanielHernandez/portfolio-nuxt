/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './constants/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './.storybook/**/*.{js,ts,vue}'
    ],
    darkMode: 'class',
    plugins: [require('@tailwindcss/typography')],
    theme: {
        extend: {}
    }
}
