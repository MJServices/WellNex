/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF4D00",
          cyan: "#00F6FF",
        },
        dark: {
          bg: "#0B0B0C",
          text: "#B8B8B8",
          heading: "#FFFFFF",
          glass: "rgba(255, 255, 255, 0.07)",
        },
        light: {
          bg: "#F7F8FA",
          text: "#333333",
          heading: "#111111",
          glass: "rgba(255, 255, 255, 0.5)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        heading: ["Montserrat", "Raleway", "sans-serif"],
        body: ["Inter", "sans-serif"],
        display: ["Raleway", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "40px",
      },
      boxShadow: {
        "glow-orange":
          "0 0 20px rgba(255, 77, 0, 0.3), 0 0 40px rgba(255, 77, 0, 0.1)",
        "glow-cyan":
          "0 0 20px rgba(0, 246, 255, 0.3), 0 0 40px rgba(0, 246, 255, 0.1)",
        "glow-orange-lg":
          "0 0 30px rgba(255, 77, 0, 0.4), 0 0 60px rgba(255, 77, 0, 0.2)",
        "glow-cyan-lg":
          "0 0 30px rgba(0, 246, 255, 0.4), 0 0 60px rgba(0, 246, 255, 0.2)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss/plugin")(({ addUtilities }) => {
      addUtilities({
        ".glass-light": {
          background: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
        ".glass-dark": {
          background: "rgba(255, 255, 255, 0.07)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
        ".glow-orange": {
          boxShadow:
            "0 0 20px rgba(255, 77, 0, 0.3), 0 0 40px rgba(255, 77, 0, 0.1)",
        },
        ".glow-cyan": {
          boxShadow:
            "0 0 20px rgba(0, 246, 255, 0.3), 0 0 40px rgba(0, 246, 255, 0.1)",
        },
        ".gradient-brand": {
          background: "linear-gradient(135deg, #FF4D00 0%, #00F6FF 100%)",
        },
      });
    }),
  ],
};
