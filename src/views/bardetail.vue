 <!----------Make By YourName---------------->
<template>
    <div>
    <br><center>
     <h1>ลงทะเบียนร้านตัดผม</h1></center><br><br>
     <form v-on:submit.prevent="barberdetail()">
        ชื่อร้าน : <input v-model="form.registration_name" type="text" placeholder="ชื่อร้าน" style="width:100px" class="at-input__original" required><br>
        เบอร์โทร : <input v-model="form.registration_number" type="text" placeholder="เบอร์โทร" style="width:100px" class="at-input__original" required><br>
        ที่ตั้งร้าน : <textarea v-model="form.registration_address" type="text" placeholder="ที่ตั้งร้าน" style="width:200px" class="at-input__original" required></textarea><br>
        วันปิดทำการ : &nbsp;<checkbox-group v-model="form.registration_timeclose" class="at-checkbox_" type="checkbox" required>
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
    </checkbox-group><br><br>
    เวลาเปิด : <input v-model="form.registration_timeopen" class="at-input__original" style="width:100px" type="time" required>
    เวลาปิด : <input v-model="form.registration_timeclose" class="at-input__original" style="width:100px" type="time" required><br><br>
    เวลาตัดผมต่อหัว :
        <input v-model="inputValue" placeholder="ชาย" class="at-input__original" style="width:60px" required> นาที
        <input v-model="inputValue" placeholder="ราคา" class="at-input__original" style="width:60px" required> บาท<br>
        <input v-model="inputValue" placeholder="หญิง" class="at-input__original" style="width:60px" required> นาที
        <input v-model="inputValue" placeholder="ราคา" class="at-input__original" style="width:60px" required> บาท<br><br>
    รูปโปรไฟล์ :<image-uploader
    :debug="1"
    :maxWidth="512"
    :quality="0.5"
    :autoRotate=true
    outputFormat="blob"
    :preview=false
    accept="image/*"
    doNotResize="['gif', 'svg']"
    required
    ></image-uploader><br>

    <at-button type="submit" class=" box-brown shadow pd-6 wh circle" >ลงทะเบียน</at-button>

    </form> 
    <br>
    <at-button  @click="$router.push('/barlogin')" class="box shadow">ยกเลิก</at-button><br>
    
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