 <!----------Make By YourName---------------->
  <template>
 <div>
     <h1>การตั้งค่าบัญชีผู้ใช้</h1>
     <at-button @click="$router.push('/EditProfile')" class="box shadow" icon="icon-user">ข้อมูลส่วนตัว</at-button><br>
     <at-button @click="$router.push('/barlogin')" class="box shadow" icon = "icon-log-out">ออกจากระบบ</at-button><br>
     <!--<at-menu-item @click="$router.push('/account')" class="box shadow">การตั้งค่าบัญชีผู้ใช้</at-menu-item><br><br>-->
     

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