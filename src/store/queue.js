import axios from '@/axios'
import _ from 'lodash'
const state = {

}
const getters = {

}

const mutations = {

}

const actions = {

    async storeData(context, params) {
        let load = axios.post('/api/customer', params)
        .then((r) => { 
            alert('Save Data Success');  
        }).catch((e) => {
    
            alert('Error Save');
    
        }); 
    },

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }