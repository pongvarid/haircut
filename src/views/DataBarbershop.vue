<!----------Make By YourName---------------->
  <template>
 <div>
     <h1>ข้อมูลร้าน</h1>

     <at-menu mode="horizontal" active-name="1">
     <at-menu-item name="1"><i class="icon icon-info"></i>คิวลูกค้า</at-menu-item>
     <at-menu-item name="2"><i class="icon icon-edit-1"></i>จัดการข้อมูลร้าน</at-menu-item>
     <at-menu-item name="3"><i class="icon icon-users"></i>การตั้งค่าบัญชีผู้ใช้</at-menu-item>
     </at-menu>    

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