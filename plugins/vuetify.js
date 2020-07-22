import Vue from 'vue'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {})

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: 'red.darken-2',
        accent: 'red.accent-2',
        secondary: 'grey.lighten-1',
        info: 'blue.lighten-1',
        warning: 'amber.darken-2',
        error: 'red.accent-4',
        success: 'green.lighten-2'
      }
    }
  }
})
