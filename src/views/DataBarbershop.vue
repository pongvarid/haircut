<!----------Make By YourName---------------->
  <template>
  <div>
    <center><h1 class="mrt-10">ข้อมูลร้าน</h1></center><p class="mrt-20">สถานะของร้าน :
    <at-switch >
      <span slot="checkedText">เปิด</span>
      <span slot="unCheckedText">ปิด</span>
    </at-switch>
    </p> 
    <br>
    <at-tabs>
      <at-tab-pane label="คิวลูกค้า" name="name1" icon="icon-github">
        <p></p>
      </at-tab-pane>
      <at-tab-pane label="การตั้งค่าบัญชีผู้ใช้" name="name2" icon="icon-settings">
        <at-button @click="$router.push('/EditProfile')" type="text" icon="icon-user">ข้อมูลส่วนตัว</at-button>
        <br>
        <hr>
        <at-button
          @click="$router.replace('/logout')"
          class="mrt-10"
          type="text"
          icon="icon-log-out"
        >ออกจากระบบ</at-button>
        <br>
        <hr>
      </at-tab-pane>
    </at-tabs>
    <pre>{{user}}</pre>
  </div>
</template>
 
     <script>
     	import { get } from "vuex-pathify"; 
export default {
  name: "Root",
  /*-------------------------Load Component---------------------------------------*/
  components: {},
  /*-------------------------Set Component---------------------------------------*/
  props: {},
  /*-------------------------DataVarible---------------------------------------*/
  data() {
    return {};
  },
  /*-------------------------Run Methods when Start this Page------------------------------------------*/
  async mounted() {
    /**** Call loading methods*/
    this.load();
  },
  /*-------------------------Run Methods when Start Routed------------------------------------------*/
  async beforeRouteEnter(to, from, next) {
    next();
  },
  /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
  computed: {
    user:get('login/user')
  },
  /*-------------------------Methods------------------------------------------*/
  methods: {
    /******* Methods default run ******/
    load: async function() {}
  }
};
</script>