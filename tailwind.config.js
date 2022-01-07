module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  content: ["./src/app/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
