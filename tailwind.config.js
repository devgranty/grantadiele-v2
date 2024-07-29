/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'diesel-50': '#f2ede9', 
        'diesel-100': '#e8ded5', 
        'diesel-200': '#c4ab9b', 
        'diesel-300': '#a17a6a', 
        'diesel-400': '#5c2e26', 
        'diesel-500': '#140303', 
        'diesel-600': '#120202', 
        'diesel-700': '#0f0202', 
        'diesel-800': '#0d0101', 
        'diesel-900': '#0a0101', 
        'diesel-950': '#050000'
      }
    },
  },
  plugins: [],
}

=======
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'off-black': '#050505'
      }
    }
  },
  plugins: [],
}
>>>>>>> d7226d6d6ceb394a1eafef6b3911d449bf9ad269
