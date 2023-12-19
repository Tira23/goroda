/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        borderWidth: {
            DEFAULT: '1px',
            '3': '3px',
        },
        extend: {
            boxShadow: {
                '130': '0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)',
            },
            spacing: {
                '3px': '3px',
                '4-17': '17px',
                '576': '576px',
            },
            borderRadius: {
                'none': '0',
                'sm': '0.125rem',
                DEFAULT: '4px',
                'md': '0.375rem',
                'lg': '0.5rem',
                'full': '9999px',
                'large': '12px',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
