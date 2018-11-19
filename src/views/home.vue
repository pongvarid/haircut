<!----------Make By YourName---------------->
<template>
    <div>
    
        
        <v-container>
    
            <h1>Hair Cut</h1>
    
            <v-btn @click="$router.push('/xx')" class="box-red shadow" dark round>ลูกค้า</v-btn>
            <v-btn @click="$router.push('/xx')" class="box-green shadow" dark round>ร้านตัดผม</v-btn>
    
        </v-container>
    </div>
</template>

<script>
    export default {
    
        name: 'home',
    
        /*-------------------------Load Component---------------------------------------*/
    
        components: {
    
    
    
        },
    
        /*-------------------------Set Component---------------------------------------*/
    
        props: {
    
    
    
        },
    
        /*-------------------------DataVarible---------------------------------------*/
    
        data() {
    
            return {
    
    
    
            };
    
        },
    
        /*-------------------------Run Methods when Start this Page------------------------------------------*/
    
        async mounted() {
    
            /**** Call loading methods*/
    
            this.load();
    
        },
    
        /*-------------------------Run Methods when Start Routed------------------------------------------*/
    
        async beforeRouteEnter(to, from, next) {
    
            next()
    
        },
    
        /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    
        computed: {
    
    
    
        },
    
        /*-------------------------Methods------------------------------------------*/
    
        methods: {
    
    
    
    
    
            /******* Methods default run ******/
    
            load: async function() {}
    
        },
    
    }
</script>