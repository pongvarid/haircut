<!----------Make By YourName---------------->
 <template>
    <div><br>
    <at-input v-model="inputValue" placeholder="ชื่อ" style="width:100px"></at-input><br>
    <at-radio-group v-model="gender">
        <at-radio label="M">ชาย</at-radio>
        <at-radio label="F">หญิง</at-radio>
    </at-radio-group><br><br>
    <at-input v-model="inputValue" placeholder="เบอร์โทร" style="width:100px"></at-input><br>
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