 <!----------Make By YourName---------------->
  <template>
 <div>
    <br> <center><h1>สมัครสมาชิก</h1></center><br><br>
    <form v-on:submit.prevent="register()" class="pd-40">
        <input v-model="form.username" type="text"  placeholder="ชื่อผู้ใช้" class="at-input__original" required /><br>
        <input v-model="form.email" type="email" placeholder="อีเมล์" class="at-input__original" required /><br>
        <input v-model="form.password" type="password" placeholder="รหัสผ่าน" class="at-input__original" required /><br>
        <input v-model="password_check" type="password" placeholder="ยืนยันรหัสผ่าน" class="at-input__original" required /><br>
    <center>   <button v-if="form.password == password_check" type="submit" class=" box-brown shadow pd-6 wh circle full-width">สมัครสมาชิก</button></center> 
    </form><br>

    <center><button  @click="$router.push('/barlogin')" class="box blue pd-6 circle full-width">ลงชื่อเข้าใช้</button></center><br>
   
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
    if(user == 0){
            console.log('Register Form',this.form);
            this.$store.dispatch('user/storeData',this.form);
            await this.$router.replace('/barlogin');
           
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