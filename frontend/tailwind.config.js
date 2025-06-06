/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        abyss: {
          "primary": "oklch(92% 0.2653 125)",
          "primary-content": "oklch(50% 0.2653 125)",
          "secondary": "oklch(83.27% 0.0764 298.3)",
          "secondary-content": "oklch(43.27% 0.0764 298.3)",
          "accent": "oklch(43% 0 0)",
          "accent-content": "oklch(98% 0 0)",
          "neutral": "oklch(30% 0.08 209)",
          "neutral-content": "oklch(90% 0.076 70.697)",
          "base-100": "oklch(20% 0.08 209)",
          "base-200": "oklch(15% 0.08 209)",
          "base-300": "oklch(10% 0.08 209)",
          "base-content": "oklch(90% 0.076 70.697)",
          "info": "oklch(74% 0.16 232.661)",
          "info-content": "oklch(29% 0.066 243.157)",
          "success": "oklch(79% 0.209 151.711)",
          "success-content": "oklch(26% 0.065 152.934)",
          "warning": "oklch(84.8% 0.1962 84.62)",
          "warning-content": "oklch(44.8% 0.1962 84.62)",
          "error": "oklch(65% 0.1985 24.22)",
          "error-content": "oklch(27% 0.1985 24.22)",
        }
      },
      // other included themes
      "light", "dark", "pastel", "retro", "coffee", "forest", 
      "cyberpunk", "synthwave", "luxury", "autumn", "valentine", 
      "aqua", "business", "night", "dracula"
    ]
  }
}
