// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require('path')
const BASE_DIR = join(__dirname, 'src')
const VUE_FILE = join('**', '*.vue')

const config = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      boxShadow:{
        'll':'0px 17px 31px rgba(204, 12, 123, 0.18), 0px 7.10219px 12.9511px rgba(204, 12, 123, 0.129394), 0px 3.79717px 6.92426px rgba(204, 12, 123, 0.107299), 0px 2.12866px 3.88168px rgba(204, 12, 123, 0.09), 0px 1.13052px 2.06153px rgba(204, 12, 123, 0.0727007), 0px 0.470434px 0.85785px rgba(204, 12, 123, 0.0506062)'
      }
    },
  },
  variants: {},
  plugins:[],
}

module.exports = config
