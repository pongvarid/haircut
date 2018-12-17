 <!----------Make By YourName---------------->
  <template>
    <div class="box-brown full"> <center>
        <p><img style="width: auto" class="mrt-50" src="../assets/logo.png"></p><br>
        <button style="width: auto;">
            <div  @click="$router.push('/listbar')">
                <img style="width: 100%" src="../assets/backcus.jpg">
            </div><h1>ลูกค้า</h1>
        </button>
        <button style="width: auto;" >
            <div @click="$router.push('/barlogin')">
                <img style="width: 100%" src="../assets/backbar.png">
                <h1>ร้านตัดผม</h1>
            </div>
        </button>
        </center>
         
       
    </div>    
 </template>
 <style>
 .full{
     height : 100vh;
 }
 </style>
 
 