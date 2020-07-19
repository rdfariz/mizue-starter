import colors from 'vuetify/es5/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('mizuedarkmode') || false
}

const base = {
  primary: colors.blue.base, // primary main
  primarylight: colors.blue.lighten4, // primary light
  primarydark: colors.blue.darken4, // primary dark
  secondary: colors.blueGrey.base, // secondary main
  secondarylight: colors.blueGrey.lighten4, // secondary light
  secondarydark: colors.blueGrey.darken3, // secondary dark
  anchor: colors.blue.base // link
}

const palette = {
  base
}

export const theme = {
  ...palette.base
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  },
  breakpoint: {
    thresholds: {
      xs: 340,
      sm: 540,
      md: 800,
      lg: 1280
    },
    scrollBarWidth: 24
  },
  icons: {
    iconfont: 'mdi' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  }
}
