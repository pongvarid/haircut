<!----------Make By YourName---------------->
 <template>
<div class="mrt-10">
    
    ชื่อ : <br><br>
    เพศ : <br><br>
    เบอร์โทร : <br><br>
    ร้าน : <br><br>
    เวลา : <br><br>
    <center><button @click="$router.push('/listbar')" type="submit" class=" box-brown shadow pd-6 wh circle full-width" >ยกเลิกคิว</button></center>
    </div>
</template>

    <script>
    import { get } from "vuex-pathify";
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
        user:get('login/user')
},
    /*-------------------------Methods------------------------------------------*/
methods:{
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>