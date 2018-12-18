 <!----------Make By YourName---------------->
<template>
    <div>
    <br><center>
     <h1>ลงทะเบียนร้านตัดผม</h1></center><br><br>
     <form v-on:submit.prevent="barberdetail()" class="pd-40">
        ชื่อร้าน : <input v-model="form.registration_name" type="text" placeholder="ชื่อร้าน" class="at-input__original" required><br>
        เบอร์โทร : <input v-model="form.registration_number" type="text" placeholder="เบอร์โทร" class="at-input__original" required><br>
        ที่ตั้งร้าน : <textarea v-model="form.registration_address" type="text" placeholder="ที่ตั้งร้าน" class="at-input__original" required></textarea><br>
        วันปิดทำการ : &nbsp;<checkbox  class="at-checkbox_" type="checkbox" required>
        <input type="checkbox" value="จ.">
		<label>จ.</label>&nbsp;
		<input type="checkbox"  value="อ.">
		<label>อ.</label>&nbsp;
		<input type="checkbox" value="พ.">
		<label>พ.</label>&nbsp;
		<input type="checkbox" value="พฤ.">
		<label>พฤ.</label>&nbsp;
		<input type="checkbox" value="ศ.">
		<label>ศ.</label>&nbsp;
		<input type="checkbox" value="ส.">
		<label>ส.</label>&nbsp;
		<input type="checkbox" value="อา.">
		<label>อา.</label>&nbsp;
    </checkbox><br><br>
    เวลาเปิด : <input v-model="form.registration_timeopen" class="at-input__original" style="width:100px" type="time" required>
    เวลาปิด : <input v-model="form.registration_timeclose" class="at-input__original" style="width:100px" type="time" required><br><br>
    เวลาตัดผมต่อหัว :
        <input v-model="form.manu_timemale" placeholder="ชาย" class="at-input__original" style="width:60px" required> นาที
        <input v-model="form.manu_timefemale" placeholder="ราคา" class="at-input__original" style="width:60px" required> บาท<br>
        <input v-model="form.manu_pricemale" placeholder="หญิง" class="at-input__original" style="width:60px" required> นาที
        <input v-model="form.manu_pricefemale" placeholder="ราคา" class="at-input__original" style="width:60px" required> บาท<br><br>

    รูปโปรไฟล์ :<image-uploader
    :debug="1"
    :maxWidth="512"
    :quality="0.5"
    :autoRotate=true
    outputFormat="blob"
    :preview=false
    accept="image/*"
    doNotResize="['gif', 'svg']"
    v-model="registration_profile"
    ></image-uploader><br>
    


    <center><button type="submit" class=" box-brown shadow pd-6 wh circle full-width" >ลงทะเบียน</button></center>

    </form> 
    <br>

    <center><button  @click="$router.push('/barlogin')" class="box red shadow pd-6 wh circle full-width" >ยกเลิก</button></center><br>
    
    </div>
</template>
 
     <script>
     import { get } from "vuex-pathify"; 
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
        user:get('user/user'),
 },
     /*-------------------------Methods------------------------------------------*/
 methods:{
     barberdetail:async function(){

         console.log('barberdetail form',this.form);
         
         this.$router.replace('/DataBarbershop');

     },
     /******* Methods default run ******/
     load:async function(){
 }
 },
     }
 </script>