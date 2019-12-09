<template>
  <div class="">
    <div v-if="booleans" class="login">
      <div  class=" block flex-column main-justify-around">
          <div class="flex-row user-block cross-align-center">
              <img src="../../static/img/user.png" alt="用户" width="26px" height="26px">
              <input ref="user" v-model="user"  class="input" type="text"  placeholder="用户名">
          </div>
         <div class="flex-row user-block  cross-align-center">
              <img src="../../static/img/password.png" alt="用户" width="26px" height="26px">
              <input ref="pw" v-model="pw" class="input" type="password" placeholder="密码">
          </div>
          <div class="save-password">
            <el-checkbox v-model="checked">记住密码</el-checkbox>
          </div>
          <div ref="login2" class="login-button" @click="login()">登录</div>
      </div>
    </div>
      
      <!-- 手机app -->
    <div  v-if="!booleans" class="login2">
       <img class="logoPicture" src="../../static/img/logo.png" width="140px" height="50px">
      <div class="block2 flex-column main-justify-around">  
          <div class="flex-row user-block2 cross-align-center">
              <img src="../../static/img/用户名.png" alt="用户" width="40px" height="40px">
              <input ref="user" v-model="user"  class="input2" type="text"  placeholder="用户名" style="outline:none !important">
          </div>
         <div class="flex-row user-block2  cross-align-center ">
              <img src="../../static/img/密码.png" alt="用户" width="40px" height="40px">
              <input ref="pw" v-model="pw" class="input2" type="password" placeholder="密码" style="outline:none !important">
          </div>
          <div class="save-password2">
            <el-checkbox v-model="checked">下次自动登录</el-checkbox>
          </div>
          <div ref="login" class="login-button2" @click="login()">登&nbsp;&nbsp;录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data () {
    return {
       booleans:true,
       checked: true,
       user:'',
       pw:''
    }
  },
  methods:{
    getAngle(){
      if (Publics.getType().android ||Publics.getType().ios ||Publics.getType().iPad) {

        this.booleans = false;

      }
    },
    eventOnload(){
      //用户名键盘事件
      this.$refs.user.focus();
      this.$refs.user.onkeydown=(ev)=>{
        if(ev.keyCode==13){
          if(this.user){
               this.$refs.pw.focus();
          }else{
            
          }
        }
      }
      //密码键盘事件
      this.$refs.pw.onkeydown=(ev)=>{
         if(ev.keyCode==13){
              if(this.pw){
                  this.login();
              }else{
                  this.$message({
                    message: '请输入登录密码',
                    type: 'warning',
                    center:true
                  });
              }
              
          }
      }
    },
    login(){
      let name = this.user.replace(/(^\s*)|(\s*$)/g,'');
      let pw = this.pw;
      let param = {
          name:name,
          password :pw
      }
       this.$axios.post('/UserSell/Login', this.$qs.stringify(param)) //登录接口调用
                    .then(response => {
                       //console.log(response.data);
                        if(response.data.status == 200){
                            let obj = response.data.result;
                            this.$root._data.sell_user_id = obj.sell_user_id;
                           //console.log(obj.sell_user_id);
                            Publics.setLocal('user_id',obj.sell_user_id);
                            Publics.setLocal('user_name',obj.department)
                            this.$message({
                              message: '登录成功',
                              type: 'success',
                              center:true
                            });
                            setTimeout(()=>{
                              this.$router.push({ path: '/index' })
                            },500)
                            
                        }else{
                            this.$message({
                            message: response.data.msg,
                            type: 'warning',
                            center:true
                          });
                        }
                    })
                    .catch(error => {
                            this.$message({
                            message: '网络错误，请稍后再试',
                            type: 'warning',
                            center:true
                          });
                      
                    })
           
      
    }
  },
  mounted() {
      this.eventOnload();
      this.getAngle();
   // publics.setLocal('name','丁祖歌')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logoPicture{
  padding-top: 80px;
  padding-left: 50%;
  transform: translateX(-25%);

}
.login{
   height:100vh;
   background: url('../../static/img/login-bg.png');
   background-size: 100% 100%;
}
.login2{
   height:100vh;
   background: url('../../static/img/appbg.png');
   background-size: 100% 100%;
}

.block{
  width:3.2rem;
  height:3.2rem;
  padding:0.4rem;
  border-radius:0.04rem;
  background:rgba(12,29,78,0.6);
  position:absolute;
  right:10%;
  top:50%;
  margin-top:-2rem;
}
.block2{
  width:100%;
  height:3.2rem;
  padding:0.2rem 0;
  border-radius:0.04rem;
  background:transparent;
  position:absolute;
  right:10%;
  top:50%;
  margin-top:-2rem;
}
.user-block{
  border:solid 1px #3277af;
  height:0.5rem;
  font-size:0.16rem;
  box-sizing: border-box;
  border-radius: 0.04rem;

}
.user-block2{
  background-color: none;
  padding: 0 0.2rem;
}
.save-password{
  font-size:0.16rem;
  /* padding-left: 50px; */
  text-align: left;
  padding-bottom: 20px;

}
.save-password2{
  font-size:0.16rem;
  padding-left: 60px;
  padding-bottom: 30px;
  text-align: left;
}
.login-button{
  height:0.5rem;
  text-align:center;
  font-size:0.16rem;
  background: #f0a31e;
  box-sizing: border-box;
  border-radius: 0.04rem;
  line-height: 0.5rem;
  color:#fff;
  cursor: pointer;
}
.login-button2{
  margin: 0 0.2rem;
  height:0.5rem;
  text-align:center;
  font-size:0.16rem;
  background: transparent;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: #fff;
  line-height: 0.5rem;
  color:#fff;
  cursor: pointer;
}
.user-block img{
  margin-left:0.2rem;
}
.input{
   height:50px;
    width:100%;
    margin-left:0.2rem;
    font-size:0.16rem;
    /* color: #f8f8f8; */
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    outline: none;

    
}
.input2{
    height:50px;
    width:100%;
    margin-left:0.2rem;
    font-size:0.16rem;
    color: #3277af;
    text-decoration: underline padding 20px;
    border-bottom: .5px solid #fff;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
}
.input-check{
  width:0.16rem;
  height:0.16rem;
  background:transparent;
  border:1px solid #3277af;
  box-sizing: border-box;
}
.user-block{
  background-color: #f8f8f8;
}
.input{
  height: 47px;
  /* color: white; */
}
@media  screen and (max-width:800px) {
  .block{
    left:50%;
    top:50%;
    margin-top:-2rem;
    margin-left:-2rem;
  }
  .block2{
    left:50%;
    transform: translateX(-50%);
    padding-top: 5%;
  }
}
@media  screen and (max-width:400px) {
  .block{
    width:2.6rem;
    height:2.6rem;
    padding:0.2rem;
    border-radius:0.2rem;
    left:50%;
    top:50%;
    margin-top:-1.5rem;
    margin-left:-1.5rem;
  }
}

.input::-webkit-input-placeholder{
  /* border-bottom: 1px solid #fff; */
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-transition-delay: 99999s;
    -webkit-transition: color 99999s ease-out, background-color 99999s ease-out;

}
</style>
