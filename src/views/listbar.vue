<!----------Make By YourName---------------->
 <template>
<div>
        <a style="width: 100px" @click="$router.push('/')" class="icon icon-chevron-left mrt-20">
                <img style="width: 60px" class="mrt-20" src="../assets/logo.png">
        </a><br>
       
        <center><at-button class="mrt-20 box-brown shadow " @click="$router.push('/queue')" style="width: 300px;" :body-style="{ padding: 0 }">
        <div>
            <img style="width: 100%" src="../assets/maxresdefault.jpg">
            <div style="padding: 14px;">
            <p class="wh">barbername</p>
            </div>
        </div>
        </at-button></center><br><br>
        
    </div> 
</template>

    <script>
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {

    },
  /*-------------------------Set Component---------------------------------------*/
props:{

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
    computed:{

},
    /*-------------------------Methods------------------------------------------*/
methods:{
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>