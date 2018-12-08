 <!----------Make By YourName---------------->
  <template>
    <div>
        <button style="width: auto;">
            <div  @click="$router.push('/listbar')">
                <img style="width: 100%" src="../assets/backcus.jpg">
            </div>
        </button>
        <button style="width: auto;" >
            <div @click="$router.push('/barlogin')">
                <img style="width: 100%" src="../assets/backbar.png">
            </div>
        </button>
        
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