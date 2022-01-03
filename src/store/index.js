import { createStore } from 'vuex'

import oauth from '@/store/modules/oauth'
import loading from '@/store/modules/loading'
import error from '@/store/modules/error'
export default createStore({

  modules: {
    oauth,
    loading,
    error
  }
})
