<template>
  <div class="position-re" id="app">
    <div v-if="out_hide" class="position-ab out flex-column main-justify-center cross-align-center hidden-xs-only">
       <img src="static/img/out.png" alt="">
         <p ref="show_hide"  @click="outLogin()">当前账户：{{name}}</p>
         <p ref="show_hide"  @click="updatePasswordAndadministration(1)"><span style="color:black;">修改密码</span></p>
         <!-- <p ref="show_hide"  @click="updatePasswordAndadministration(2)"><span style="color:black;">管理员权限</span></p> -->
         <p ref="show_hide"  @click="outLogin()"><span style="color:red;">退出登录</span></p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      visible:false,
      // show_hide:false,
      name:'demo',
      out_hide:false,
      sell_user_id:'1',
    }
  },
  watch:{
      $route(to,from){
         this.outHide();
         this.name = Publics.getLocal('user_name');
      }
  },
  methods:{
    // showHide(){
    //     this.show_hide =!this.show_hide;
    //     if(this.show_hide){
    //         this.$refs.show_hide.style.display="block"
    //     }else{
    //         this.$refs.show_hide.style.display="none"
    //     }
    // },
    outLogin(){
        
      Publics.loginJump(()=>{
        this.$router.push({path:'/'})
      })
    },
    outHide(){
         if(this.$route.path == '/'){
              this.out_hide = false;
          }else{
              this.out_hide = true;
          }
    },
    updatePasswordAndadministration(id){
      if (id == 1) {
        this.$router.push({name:'updatePassword'});
      } else {
        this.$router.push({name:'Administration'});
      }
        
    }

  },
  mounted(){
    this.outHide();
    this.name = Publics.getLocal('user_name');
    Publics.loginJudge(()=>{
      this.$router.push({path:'/'})
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
 
}
.out{
  z-index:10;
  top:0.2rem;
  right:0.7rem;
  width:2rem;
}
.out img{
  padding-bottom:20px;
  padding-top: 15px;
}
.out p{
  display: none;
  font-size:16px;
  width:1.5rem;
  background:#fff;
  color:#717171;
  padding:6px 10px;
  cursor: pointer;
  border-radius: 4px;
  text-align:center;
  display:none;
  transition:display 1s;
}
.out:hover p{
   display:block;
}
</style>
