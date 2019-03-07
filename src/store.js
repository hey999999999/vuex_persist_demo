import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    c2:0,
    hoge:null
  },
  plugins: [(store) => {
    store.subscribe((mutation, state) => {
      state.hoge = 'fuga';
      console.log('subscribe>>>', mutation, state);
    });
  }, createPersistedState({
    paths: ['c2'], 
    storage: window.localStorage
  }), createPersistedState({
    paths: ['count'],
    setState: (...args) => console.log('set>>>', args),
    getState: (...args) => console.log('get>>>', args),
    /*key: 'vuex_persist_demo',
    filter: (hoge) => {
      console.log('filter>>>', hoge);
      return (hoge.type === 'inc2' || hoge.type === 'dec2');
    },*/
    reducer: (state, paths) => {
      state.hoge = new Date();
      console.log('reducer>>>', state, paths);
      return state[paths[0]];
    },
    /*subscriber: (store) => {
      console.log('subscriber1>>>', store);
      store.hoge = new Date();
      return () => {
        console.log('subscriber2>>>', store);
      };
    },*/
    storage: window.sessionStorage/*{
      getItem: (k) => window.sessionStorage.getItem(k),
      setItem: (k, v) => window.sessionStorage.setItem(k, v),
      removeItem: (k) => window.sessionStorage.removeItem(k)
    }*/
  })],
  mutations: {
    increment: (state, n=1) => state.count+=n,
    decrement: (state, n=1) => state.count-=n,
    inc2: (state, n=1) => state.c2+=n,
    dec2: (state, n=1) => state.c2-=n,
  },
  actions: {
  }
});
