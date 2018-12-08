 <!----------Make By YourName---------------->
  <template>
 <div>
    <br> <label>สมัครสมาชิก</label><br><br>
    <at-input v-model="inputValue" placeholder="ชื่อผู้ใช้"></at-input><br>
    <at-input v-model="inputValue" placeholder="อีเมล์" ></at-input><br>
    <at-input v-model="password" type="password" placeholder="รหัสผ่าน"></at-input><br>
    <at-input v-model="password" type="password" placeholder="ยืนยันรหัสผ่าน"></at-input><br>
    <at-button @click="$router.push('/bardetail')" class="box-brown shadow">สมัครสมาชิก</at-button><br><br>
    <at-button  @click="$router.push('/barlogin')" class="box shadow">ลงชื่อเข้าใช้</at-button><br>
   
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