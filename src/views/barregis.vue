 <!----------Make By YourName---------------->
  <template>
 <div>
    <br> <label>สมัครสมาชิก</label><br><br>
    <form v-on:submit.prevent="register()">
        <input v-model="form.username" type="text" style="width:200px" placeholder="ชื่อผู้ใช้" class="at-input__original" required /><br>
        <input v-model="form.email" type="email" style="width:200px" placeholder="อีเมล์" class="at-input__original" required /><br>
        <input v-model="form.password" type="password" style="width:200px" placeholder="รหัสผ่าน" class="at-input__original" required /><br>
        <input v-model="password_check" type="password" style="width:200px" placeholder="ยืนยันรหัสผ่าน" class="at-input__original" required /><br>
        <button v-if="form.password == password_check" type="submit" class=" box-brown shadow pd-6 wh circle">สมัครสมาชิก</button>
    </form><br>

    <at-button  @click="$router.push('/bardetail')" class="box shadow">ลงชื่อเข้าใช้</at-button><br>
   
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
            this.$store.dispatch('user/storeData',this.form);
            this.$router.replace('/bardetail');
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