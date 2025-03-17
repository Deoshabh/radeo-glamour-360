
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				leather: {
					DEFAULT: '#3E2723',
					light: '#5D4037',
					dark: '#2E1E18',
				},
				gold: {
					DEFAULT: '#D4AF37',
					light: '#F7DC6F',
					dark: '#A67C00',
				},
				maroon: {
					DEFAULT: '#800020',
					light: '#C41E3A',
					dark: '#560014',
				},
				ivory: {
					DEFAULT: '#FFFFF0',
					light: '#FEFEFC',
					dark: '#E6E6D8',
				},
				royalblue: {
					DEFAULT: '#002366',
					light: '#0039A6',
					dark: '#001233',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'roboto': ['Roboto', 'sans-serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-400px 0' },
					'100%': { backgroundPosition: '400px 0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				'scale-up': {
					'0%': { transform: 'scale(0.9)' },
					'100%': { transform: 'scale(1)' },
				},
				'twirl': {
					'0%': { transform: 'rotate(0deg) scale(0.8)', opacity: '0' },
					'100%': { transform: 'rotate(360deg) scale(1)', opacity: '1' },
				},
				'slide-in': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' },
				},
				'wave': {
					'0%, 100%': { transform: 'translateY(0)' },
					'25%': { transform: 'translateY(-5px)' },
					'50%': { transform: 'translateY(0)' },
					'75%': { transform: 'translateY(5px)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'fade-in': 'fade-in 0.8s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.8s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.8s ease-out forwards',
				'gradient-shift': 'gradient-shift 6s ease infinite',
				'scale-up': 'scale-up 0.5s ease-out forwards',
				'twirl': 'twirl 1.2s ease-out forwards',
				'slide-in': 'slide-in 0.8s ease-out forwards',
				'glow': 'glow 2s ease-in-out infinite',
				'wave': 'wave 3s ease-in-out infinite',
			},
			transitionProperty: {
				'width': 'width',
				'height': 'height',
			},
			backgroundImage: {
				'leather-texture': "url('https://images.unsplash.com/photo-1606097542340-ccc707188a3e?q=80&w=2070')",
				'silk-texture': "url('https://images.unsplash.com/photo-1618922615859-7c2a918cdff9?q=80&w=2070')",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
