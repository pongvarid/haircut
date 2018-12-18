import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify';
import loading from './loading'; 
import user from './user';
import login from './login';
import userdetail from './userdetail';
import barber from './barber';
Vue.use(Vuex)

const modules = {
    loading : loading, 
 
    user:user,
    login:login,
    userdetail:userdetail,
    barber:barber
}

export default new Vuex.Store({
    plugins: [pathify.plugin],
    modules : modules
})
