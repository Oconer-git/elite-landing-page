/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js}"
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                sfMedium: ['SfMedium', 'sans-serif'], 
                sfBold: ['SfBold', 'sans-serif'],
            },
        
            backgroundImage: {
                hero: "url('/src/assets/background/hero/background.png')",
                upgrade: "url('/src/assets/background/upgrade/bgUpgrade.webp')",
                upgrade1: "url('/src/assets/background/upgrade/bgUpgrade1.webp')",
                upgrade2: "url('/src/assets/background/upgrade/bgUpgrade2.webp')",
                upgrade3: "url('/src/assets/background/upgrade/bgUpgrade3.webp')",
                grid: `
                   linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
              `,
                dots: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)' // 50% opacity (0.1)
            },
            backgroundSize: {
                gridSize20: '20px 20px',
                gridSize40: '40px 40px', 
                dotsSize16: '16px 16px'
            },
            colors: {
                whitesmoke: '#f7f6f6',
            }
        },
    },
    plugins: [],
}
