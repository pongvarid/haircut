import axios from '@/axios'
import _ from 'lodash'
const state = {

}
const getters = {

}

const mutations = {

}

const actions = {
    async getData(context, params) {
        let data = null;
        let load = await axios.get('/api/registration/' + params)
            .then((r) => {
                data = r.data;
            }).catch((e) => {

            });
        return data;
    },
    async storeData(context, params) {
        let load = axios.post('/api/registration', params)
            .then((r) => {
                alert('Save Data Success');
            }).catch((e) => {
                alert('Error Save');
            });
    },

    async updateData(context, params) {
        let load = axios.put('/api/registration/' + params.id, params)
            .then((r) => {
                alert('Update Data Success');
            }).catch((e) => {
                alert('Error Update');
            });
    },

    async destroyData(context, params) {
        let load = axios.delete('' + params.id)
            .then((r) => {
                alert('Delete Data Success');
            }).catch((e) => {
                alert('Error Delete');
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