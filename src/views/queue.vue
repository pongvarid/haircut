<!----------Make By YourName---------------->
 <template>
    <div><br>
    <a style="width: 100px" @click="$router.push('/')" class="icon icon-chevron-left mrt-20">
                <img style="width: 60px" class="mrt-20" src="../assets/logo.png">
        </a><br>
    <form v-on:submit.prevent="queue()" class="pd-40">
    <input v-model="form.customer_name" type="text"  placeholder="ชื่อ" class="at-input__original" required /><br>
    <at-select   v-model="form.customer_sex" placeholder="เพศ" required >
        <at-option  value="ชาย">ชาย</at-option >
           <at-option tion value="หญิง">หญิง</at-option>
    </at-select >
    <input v-model="form.customer_number" type="text"  placeholder="เบอร์โทร" class="at-input__original mrt-20" required /><br>
    <center> <button v-if="form.customer_sex != null" type="submit" class=" box-brown shadow pd-6 wh circle full-width">จองคิว</button></center> 
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
    
    
            console.log('Queue Form',this.form);
            this.$store.dispatch('queue/storeData',this.form);
            await this.$router.replace('/queue_view');
    
     },
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>