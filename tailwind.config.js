import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
    ],

    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary_dashboard: "#005275",
                accent: "#F4CD0E",
                blue: "#04A0E2",
            },
            gridTemplateColumns: {
                '2-1': '2fr 1fr',
                '1-400px': '1fr 400px'
            }
        },
        container: {
            padding: {
              DEFAULT: '1rem',
              sm: '2rem',
              lg: '4rem',
              xl: '5rem',
              '2xl': '6rem',
            },
        },
    },

    plugins: [forms],
};
