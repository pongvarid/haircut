 <!----------Make By YourName---------------->
  <template>
 <div>

     <center><h1 class="mrt-20">ข้อมูลส่วนตัว</h1></center>
   
              <h2 class="mrl-20">ชื่อผู้ใช้ : {{user.username}}</h2>
     <h2 class="mrl-20">อีเมล์ : {{user.email}}</h2><br>

้<hr>
 <center><h1 class="mrt-20">แก้ไขข้อมูลร้าน</h1></center>
    <form v-on:submit.prevent="storeData()" class="pd-40">

        ชื่อร้าน : <input v-model="form.registration_name" type="text" placeholder="ชื่อร้าน" class="at-input__original" required><br>
        เบอร์โทร : <input v-model="form.registration_number" type="text" placeholder="เบอร์โทร" class="at-input__original" required><br>
        ที่ตั้งร้าน : <textarea v-model="form.registration_address" type="text" placeholder="ที่ตั้งร้าน" class="at-input__original" required></textarea><br>
        วันปิดทำการ : &nbsp; 

    <at-select   v-model="form.registration_closedate" required>
        <at-option  value="จ.">จ.</at-option >
           <at-option tion value="อ.">อ.</at-option>
              <at-option  value="พ.">พ.</at-option >
                 <at-option  value="พฤ.">พฤ.</at-option >
                    <at-option  value="ศ.">ศ.</at-option >
                       <at-option  value="ส.">ส.</at-option >
                          <at-option  value="อา.">อา.</at-option >
    </at-select >
 
    
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

    <button  @click="$router.push('/DataBarbershop')" class="box shadow pd-6 circle full-widt">บันทึกข้อมูล</button><br>

    </form>
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
         update:false,
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
         user:get('login/user')
 },
     /*-------------------------Methods------------------------------------------*/
 methods:{
    
     //Store data to vuex --post
      storeData: async function () {
          if(!this.update){
          this.form.barber_id = this.user.id;
          this.$store.dispatch('barber/storeData',this.form);}
          else{
              this.updateData();
          }
            this.load();
     },
     //Update data to vuex --put
     updateData: async function () {
      this.$store.dispatch('barber/updateData',this.form);
        this.load();
     },
       //Delete data to vuex --delete
     destroyData: async function (params) {
     
      },
     /******* Methods default run ******/
     load:async function(){
         let data = await this.$store.dispatch('barber/getData',this.user.id);
         if(data){
             this.form = data;
             this.update = true;
         }else{
             this.update = false;
         }
         console.log(data);
 }
 },
     }
 </script>