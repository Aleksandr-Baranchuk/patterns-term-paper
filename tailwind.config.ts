import daisyui from 'daisyui';
export default {
  content: ['./src/**/*.{js,vue,ts}'],
  theme: {
    fontFamily: {
      sans: ['Sono', 'sans-serif']
    }
  },
  daisyui: {
    themes: ['dark']
  },
  plugins: [daisyui]
};
