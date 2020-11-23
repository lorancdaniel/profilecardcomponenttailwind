module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'card-top': "url('/images/bg-pattern-top')",
        'card-bot': "url('/images/bg-pattern-bottom')",
      }),
      backgroundColor: (theme) => ({
        primary: '#19a2ae',
      }),
      fontFamily: {
        body: ['Kumbh Sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
