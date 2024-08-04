/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      container: {
        center: true,
        padding: "4rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
    extend: {
      
      scrollbar: {
        hide: 'overflow: hidden; scrollbar-width: none; -ms-overflow-style: none;',
        hideWebkit: 'overflow: hidden; scrollbar-width: none; -ms-overflow-style: none;'
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        purple: {
          100: "#F4F7FE",
          200: "#BCB6FF",
          400: "#868CFF",
          500: "#7857FF",
          600: "#4318FF",
        },
        dark: {
          400: "#7986AC",
          500: "#606C80",
          600: "#2B3674",
          700: "#384262",
        },
        primary: "#060724",
        secondary: "#eb7f67",
        destructive: "#051C2C",
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
        IBMPlex: ["var(--font-ibm-plex)"],
      },
      backgroundImage: {
        "purple-gradient": "url('/assets/images/gradient-bg.svg')",
        banner: "url('/assets/images/banner-bg.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          scrollbarColor: 'rgb(6, 7, 36) rgb(229, 231, 235)',
          scrollbarWidth: 'thin',
        },
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width: '1px',
            height: '1px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgb(6, 7, 36)',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgb(6, 7, 36)',
            borderRadius: '5px',
            border: '1px solid rgb(6, 7, 36)',
          },
        },
        '.scrollbar-hidden': {
          /* Hide scrollbar for IE, Edge, and Firefox */
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
          /* Hide scrollbar for Chrome, Safari, and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  
}