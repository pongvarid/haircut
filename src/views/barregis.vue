 <!----------Make By YourName---------------->
  <template>
 <div>
    <br> <label>สมัครสมาชิก</label><br><br>
    <form v-on:submit.prevent="register()" class="pd-50">
        <input v-model="form.username" type="text" placeholder="ชื่อผู้ใช้" class="at-input__original" required /><br>
        <input v-model="form.email" type="email" placeholder="อีเมล์" class="at-input__original" required /><br>
        <input v-model="form.password" type="password" placeholder="รหัสผ่าน" class="at-input__original" required /><br>
        <input v-model="password_check" type="password" placeholder="ยืนยันรหัสผ่าน" class="at-input__original" required /><br>
        <center><button v-if="form.password == password_check" type="submit" class=" box-blue pd-6 wh circle mr-50">สมัครสมาชิก</button></center>
    </form><br>

    <center><at-button  @click="$router.push('/bardetail')" class="box">ลงชื่อเข้าใช้</at-button></center><br>
   
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
         password_check:'',
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

     register:async function(){
       let user =   await this.checkUsername()
    if(user != 0){
            console.log('Register Form',this.form);
            this.$store.dispatch('user/storeData',this.form); //dispatch คือ ส่งค่าไปหา vuex
            this.$router.replace('/bardetail'); //ไปหน้าต่อไปแต่ไม่สามารถย้อนกลับมาหน้านี้ได้
    }else{
        alert('มีผู้ใช้นี้แล้ว');
    } 
     },
     checkUsername:async function(){
            let check = await this.$store.dispatch('user/checkUsername',this.form.username);
            console.log('username result : ',check);
            return check;
     },
     /******* Methods default run ******/
     load:async function(){
 }
 },
     }
 </script>