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
        'rosaPrincipal': '#f5bdd6',
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
      montserrat: "'Montserrat', sans-serif",
    },
    zIndex: {
      'negativo': '-1',
      1: '1',
      2: '2'
    },
    backgroundImage: {
      'daniSoares': "url('./src/assets/imgs/daniSoares.jpeg')",
      'banner_ds' : "url('./src/assets/imgs/ds_banner.jpeg')",
      'bannerHome': "url('./src/assets/imgs/banner.png')",
      'bannerQuemSomos': "url('./src/assets/imgs/bannerQuemSomos.png')",
      'fundoRosaEstrelado': "url('./src/assets/imgs/fundoRosaEstrelado.png')",
      'fundoRosaEstrelado2': "url('./src/assets/imgs/fundoRosaEstrelado2.png')",
      'fundoRosaEstrelado3': "url('./src/assets/imgs/fundoRosaEstrelado3.png')",
      'bannerServicos': "url('./src/assets/imgs/bannerServicos.png')",
      'bannerGaleria': "url('./src/assets/imgs/bannerGaleria.png')",
      'bannerContato': "url('./src/assets/imgs/bannerContato.png')",
      'galeria1': "url('./src/assets/imgs/galeria1.webp')",
      'galeria2': "url('./src/assets/imgs/galeria2.webp')",
      'galeria3': "url('./src/assets/imgs/galeria3.webp')",
      'galeria4': "url('./src/assets/imgs/galeria4.webp')",
      'galeria5': "url('./src/assets/imgs/galeria5.webp')",
      'galeria6': "url('./src/assets/imgs/galeria6.webp')",
      'galeria7': "url('./src/assets/imgs/galeria7.webp')",
      'galeria8': "url('./src/assets/imgs/galeria8.webp')",
      'galeria9': "url('./src/assets/imgs/galeria9.webp')",
    }
  },
  plugins: [],
}

