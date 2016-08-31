import App from './App'

import Csssecret from './csssecret'
import C1_1 from './csssecret/c1-1'

module.exports = {
  '/': {
    component: App
  },
  '/csssecret': {
    component: Csssecret,
    subRoutes: {
      '1-1': {
        component: C1_1
      }
    }
  }
}
