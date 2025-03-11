/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './constants/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue'
    ],
    darkMode: 'class',
    plugins: [require('@tailwindcss/typography')],
    theme: {
        extend: {}
    }
}
