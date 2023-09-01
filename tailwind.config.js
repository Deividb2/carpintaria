/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      spacing: {
        'cabecalhoH': '6.5rem',
        'cabecalhoHMobile': '8.8rem',
        'conteudoCMobile': '22.5rem',
        'telefoneAltura': '2.6rem',
        'tamanhoBanner': '83vh',
        'larguraParagrafo': '32.9rem',
        'larguraTitulo': '51.2rem'
      },
      colors: {
        'amareloPrincipal': '#F7D57F',
        'cinzaEscuro': '#262626',
        'textoQuemSomos': '#3B3B3B',
        branco: {
          100: '#FFF',
          200: '#FCFCFC'
        }
      },
      fontSize: {
        '14': '14px',
        '15': '15px',
        '19': '19px',
        '27': '27px',
        '30': '30px',
        '40': '40px',
        '70': '70px',
        '88': '88px',
        }
    },
    fontFamily: {
      playfair: "'Playfair Display', serif",
      grotesk: "'Familjen Grotesk', sans-serif",
    },
    zIndex: {
      'negativo': '-1',
      1: '1',
      2: '2'
    },
    backgroundImage: {
      'bannerHome': "url('./src/assets/imgs/banner.png')",
      'bannerQuemSomos': "url('./src/assets/imgs/bannerQuemSomos.png')",
      'bannerServicos': "url('./src/assets/imgs/bannerServicos.png')",
      'bannerGaleria': "url('./src/assets/imgs/bannerGaleria.png')",
      'bannerContato': "url('./src/assets/imgs/bannerContato.png')",
    }
  },
  plugins: [],
}

