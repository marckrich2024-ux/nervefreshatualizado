/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                base: '#FAFAF7',
                text: {
                    main: '#2D3748',
                    muted: '#64748B',
                },
                accent: {
                    DEFAULT: '#0D9488',
                    hover: '#0F766E',
                },
                alert: '#E05A3A',
                success: '#16A34A',
                slate: {
                    soft: '#F1F5F9',
                    deep: '#2D3748',
                },
                brand: {
                    green: '#16A34A',
                    darkGreen: '#15803D',
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
