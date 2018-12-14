 <!----------Make By YourName---------------->
  <template>
 <div>
    <br><a @click="$router.push('/')" class="icon icon-chevron-left"></a>
    <label>ลงชื่อเข้าใช้</label><br><br>
    <at-input  v-model="inputValue" placeholder="ชื่อผู้ใช้"></at-input><br>
    <at-input v-model="password" type="password" placeholder="รหัสผ่าน"></at-input><br>
    <at-button class="box-brown shadow">ล็อกอิน</at-button><br><br>
    <at-button  @click="$router.push('/barregis')" class="box-black shadow" dark round>สมัครสมาชิก</at-button><br>
   
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
