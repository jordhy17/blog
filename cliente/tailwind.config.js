// esta configuracion de tailwindcss permitira escanear la carpeta SRC y los siguientes archivos con extensiones js,ts
// jsx,tsx para todas las clases de CSS 

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}