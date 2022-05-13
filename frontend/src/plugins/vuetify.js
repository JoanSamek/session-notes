// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
import colors from "vuetify/lib/util/colors";

export default createVuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        colors: {
          primary: "#aa004f",
          secondary: colors.red.lighten4,
          background: "#f2eeeb",
        },
      },
      dark: {
        colors: {
          surface: "#c00d44",
          "on-surface": colors.white,
        },
      },
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
