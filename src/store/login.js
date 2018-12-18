import axios from '@/axios'
import _ from 'lodash'
const state = {
user:JSON.parse(localStorage.getItem("user"))
}
const getters = {

}

const mutations = {

}

const actions = {
    async checklogin(context, params) {
        let check = false;
        let user = null;
        let load = await axios.get('/api/login?username='+ params.username+'&password='+params.password)
        .then((r) => { 
             user =  r.data;
             check = true;
        }).catch((e) => { 
           // return e
        });
        if(user){
            localStorage.setItem("user", JSON.stringify(user) );
            check = true;
        }else{
            alert('Username or Password is wrong!!!!');
        }
        return check;
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }