/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './pages/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1e824c', // Main brand color
        secondary: '#f17228', // Accent color
        text: '#000000', // Default text
        background: '#f8f5e1', // Light background
        footerText: '#ffffff',
        navText: '#ffffff',
        textDetails: '#4A4A4A',
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        largeTitle: '4.5rem', // 72px
        heading1: '3.5rem', // 56px
        heading2: '3rem', // 48px
        heading3: '2.25rem', // 36px
        heading4: '1.75rem', // 28px
        heading5: '1.25rem', // 20px
        body: '1rem', // 16px
        caption: '0.875rem', // 14px
        excerpt: '0.75rem', // 12px
        navItem: '1rem', // 16px
        footerLink: '1rem', // 16px
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      maxWidth: {
        container: '66.56rem', // 1065px
      },
      spacing: {
        sectionPadding: '2rem', // Add this for sections
      },
    },
  },
  plugins: [],
};
