 <!----------Make By YourName---------------->
  <template>
 <div>
     <h1>จัดการข้อมูลร้าน</h1>
     
     <at-menu-item @click="$router.push('/Datamanagement')" class="box shadow">จัดการข้อมูลร้าน</at-menu-item><br><br>


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