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
        'larguraTitulo': '51.2rem',
        'larguraCardsServico': '262px',
        'alturaImgsCardServico': '219px',
        'larguraGaleriaDivs': '17.5rem',
        'alturaGaleriaDivs': '5.6rem',
        '138': '138px',
        '127': '127px',
        'G3-A': '9rem',
        'G4-A': '11.6rem',
        'G5-W': '11.8rem',
        'G6-W': '5.3rem',
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
        '20': '20px',
        '25': '25px',
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
      'bannerHome': "url('/assets/imgs/banner.png')",
      'bannerQuemSomos': "url('/assets/imgs/bannerQuemSomos.png')",
      'bannerServicos': "url('/assets/imgs/bannerServicos.png')",
      'bannerGaleria': "url('/assets/imgs/bannerGaleria.png')",
      'bannerContato': "url('/assets/imgs/bannerContato.png')",
      'galeria1': "url('/assets/imgs/galeria1.webp')",
      'galeria2': "url('/assets/imgs/galeria2.webp')",
      'galeria3': "url('/assets/imgs/galeria3.webp')",
      'galeria4': "url('/assets/imgs/galeria4.webp')",
      'galeria5': "url('/assets/imgs/galeria5.webp')",
      'galeria6': "url('/assets/imgs/galeria6.webp')",
      'galeria7': "url('/assets/imgs/galeria7.webp')",
      'galeria8': "url('/assets/imgs/galeria8.webp')",
      'galeria9': "url('/assets/imgs/galeria9.webp')",
    }
  },
  plugins: [],
}

