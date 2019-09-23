import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const bets = [{
  address: '0x97BcBE5185A929FfBC493f3d7CF4692797029fF0',
  amount: '1',
  ticker: 'eth'
},
{
  address: '0x27BcBE5185A929FfBC493f3d7CF4692797029fF0',
  amount: '2',
  ticker: 'link'
},
{
  address: '0x07BcBE5185A929FfBC493f3d7CF4692797029fF0',
  amount: '3',
  ticker: 'rep'
}
]
export default new Vuex.Store({
  state: {
    polls: [
      // finished / timelocked / done
      {
        type: 'finished',
        bets
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
