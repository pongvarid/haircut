<!----------Make By YourName---------------->
 <template>
    <div>
        <br><a @click="$router.push('/listbar')" class="icon icon-chevron-left"></a>
        <form v-on:submit.prevent="queue()">
        ชื่อ :  <input v-model="form.customer_name" placeholder="ชื่อ" class="at-input__original" style="width:100px" required><br>
        เพศ : <input type="radio" v-model="form.customer_sex" class="at-radio" value="ชาย" required>ชาย
              <input type="radio" v-model="form.customer_sex" class="at-radio" value="หญิง" required>หญิง 
              <br><br>   
        เบอร์โทร : <input v-model="form.customer_number" placeholder="เบอร์โทร" class="at-input__original" style="width:100px" required><br>
        <button v-if="form.customer_sex!=null" type="submit" class=" box-brown shadow pd-6 wh circle">จองคิว</button>
        
        </form>
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
        form:{},
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
    queue:async function(){
        this.$router.push('/booking');
    },
    
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>