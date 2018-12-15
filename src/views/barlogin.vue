 <!----------Make By YourName---------------->
  <template>
 <div>
    <br><a @click="$router.push('/')" class="icon icon-chevron-left"></a>
    <label>ลงชื่อเข้าใช้</label><br><br>
    <form v-on:submit.prevent="login()">
        <input v-model="username" type="text" placeholder="ชื่อผู้ใช้" class="at-input__original" required /><br>
        <input v-model="password" type="password" placeholder="รหัสผ่าน" class="at-input__original" required /><br>
        <button type="submit" class=" box-brown shadow pd-6 wh circle">ล็อกอิน</button>
    </form><br>
    
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
         from:{},
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