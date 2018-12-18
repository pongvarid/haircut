 <!----------Make By YourName---------------->
  <template>
 <div>

    <i @click="$router.push('/')" style="width=20px" class="icon icon-chevron-left mrt-40"></i>
    <label style="font-size:20px">ลงชื่อเข้าใช้</label><br><br>


    <form v-on:submit.prevent="login()">
        <input v-model="form.username" type="text" placeholder="ชื่อผู้ใช้" class="at-input__original" required /><br>
        <input v-model="form.password" type="password" placeholder="รหัสผ่าน" class="at-input__original" required /><br>
    <center>   <button type="submit" class=" box-brown shadow pd-6 wh circle full-width">ล็อกอิน</button></center> 
    </form><br>

    <center><button  @click="$router.push('/barregis')" class="box-red pd-6 wh circle full-width" dark round>สมัครสมาชิก</button><br></center>

    
    
   
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
     login:async function(){ 
            console.log('login result : ',this.form);
        let check = await  this.$store.dispatch('login/checklogin',this.form);
        if(check){
           await this.$router.replace('/DataBarbershop');
       await location.reload();
        }
     },
     


     /******* Methods default run ******/
     load:async function(){
 }
 },
     }
 </script>