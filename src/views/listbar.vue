<!----------Make By YourName---------------->
 <template>
<div>
        <a style="width: 100px" @click="$router.push('/')" class="icon icon-chevron-left">
                <img style="width: 60px" src="../assets/logo.png">
        </a><br>
        <at-input v-model="inputValue4" placeholder="ค้นหา ร้านตัดผม" append-button>
            <template slot="append">
                <i class="icon icon-search"></i>
            </template>
        </at-input><br>
        <at-button  @click="$router.push('/queue')" style="width: 300px;" :body-style="{ padding: 0 }">
        <div>
            <img style="width: 100%" src="https://misc.aotu.io/koppthe/at-ui/cover.jpg">
            <div style="padding: 14px;">
            <p>barbername</p>
            </div>
        </div>
        </at-button><br><br>
        <at-button style="width: 300px;" :body-style="{ padding: 0 }">
            <div>
            <img style="width: 100%" src="https://misc.aotu.io/koppthe/at-ui/cover.jpg">
            <div style="padding: 14px;">
            <p>ร้านตัดผม</p>
            </div>
        </div>
        </at-button>
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