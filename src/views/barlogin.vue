 <!----------Make By YourName---------------->
  <template>
 <div>
    <icon @click="$router.push('/')" class="icon icon-chevron-left mrt-40"></icon>
    <label style="font-size:20px">ลงชื่อเข้าใช้</label><br><br>

    <form v-on:submit.prevent="login()" class="pd-40">
        <input v-model="form.username" type="text" placeholder="ชื่อผู้ใช้" class="at-input__original" required /><br>
        <input v-model="form.password" type="password" placeholder="รหัสผ่าน" class="at-input__original" required /><br>
        <center class="mrt-10"><button type="submit" class="box-brown pd-6 wh circle full-width">ล็อกอิน</button></center>
    </form><br>


    <at-button  @click="$router.push('/barregis')" class="box-black shadow" dark round>สมัครสมาชิก</at-button><br>
    <center><button  @click="$router.push('/barregis')" class="box-red pd-6 wh circle full-width" dark round>สมัครสมาชิก</button><br></center>
    
    <!--ค่อยลบ--><br><at-button @click="$router.push('/DataBarbershop')" class="box shadow" dark round>คิวลูกค้า</at-button><br>
    <!--ค่อยลบ--><br><at-button @click="$router.push('/account')" class="box shadow" drak round>การตั้งค่าบัญชีผู้ใช้</at-button><br>
   
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
     /******* Methods default run ******/
     load:async function(){
 }
 },
     }
 </script>