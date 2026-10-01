/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        studio: {
          50: "#faf9f6",
          100: "#f4f1ea",
          200: "#eae4d7",
          300: "#d9d0be",
          400: "#b9ac95",
          500: "#988971",
          600: "#7b6e59",
          700: "#5e5445",
          800: "#3d362d",
          900: "#1f1b17",
          950: "#12100d",
        },
        sand: {
          50: "#fbfaf8",
          100: "#f6f4ee",
          200: "#ece7dc",
          300: "#ded5c2",
          400: "#c7b79a",
          500: "#ad9976",
        },
        noir: {
          900: "#121315",
          950: "#0b0c0d",
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        }
      }
    },
  },
  plugins: [],
};

