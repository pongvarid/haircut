 <!----------Make By YourName---------------->
<template>
    <div>
    <br><a @click="$router.push('/barregis')" class="icon icon-chevron-left"></a>
     <label>ลงทะเบียนร้านตัดผม</label><br><br>
    ชื่อร้าน :<at-input v-model="inputValue" placeholder="ชื่อร้าน"></at-input><br>
    เบอร์โทร :<at-input v-model="inputValue" placeholder="เบอร์โทร" ></at-input><br>
    ที่ตั้งร้าน :<at-input v-model="inputValue" placeholder="ที่ตั้งร้าน"></at-input><br>
    <at-checkbox-group v-model="checkboxcloseday">
        วันปิดทำการ : 
        <at-checkbox label="จันทร์">จ.</at-checkbox>
        <at-checkbox label="อังการ">อ.</at-checkbox>
        <at-checkbox label="พุธ">พ.</at-checkbox>
        <at-checkbox label="พฤหัสบดี">พฤ.</at-checkbox>
        <at-checkbox label="ศุกร์">ศ.</at-checkbox>
        <at-checkbox label="เสาร์">ส.</at-checkbox>
        <at-checkbox label="อาทิตย์">อา.</at-checkbox>
    </at-checkbox-group><br>
    ตัวเลือกในร้าน : <at-select v-model="model2" style="width:100px" placeholder="เลือกรายการ">
        <at-option value="ตัดผม">ตัดผม</at-option>
        <at-option value="สระผม" disabled>สระผม</at-option>
        <at-option value="ทำสีผม" disabled>ทำสีผม</at-option>
        <at-option value="ดัดผม" disabled>ดัดผม</at-option>
        <at-option value="อบไอน้ำ" disabled>อบไอน้ำ</at-option>
    </at-select><br><br>
    
    <at-button class="box-brown shadow">สมัครสมาชิก</at-button><br><br>
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