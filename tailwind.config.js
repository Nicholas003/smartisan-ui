module.exports = {
  content: [],
  purge: ['index.html', 'src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    // color:{
    //   'indigo':{
    //     light: '#000',
    //     DEFAULT: '#000',
    //     dark: '#000',
    //   }
    // }
  },
  variants:{
    extend: {
      backgroundColor: ['active'],
    }
  },
  
}
