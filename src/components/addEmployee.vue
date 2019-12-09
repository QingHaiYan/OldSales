<template>
<!-- 
    author:
    data:
    des:
 -->
  <div ref="bodyss"> 
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="relativePositioning" >
            <img v-if="booleans" src="../../static/img/banner.png" width="100%" alt=""> 
            <img v-if="!booleans" src="../../static/img/app.png" width="100%" alt=""> 
            <!-- 使用Test子组件 -->
            <div class="absolutePositioning" v-if="booleans"><Test/></div>
            </el-col>
        </el-row>

    <el-row>
        <el-col :xs="{span: 24, offset: 0}" :sm="{span: 24, offset: 0}" :md="{span: 24, offset: 0}" :lg="{span: 18, offset: 3}" :xl="{span: 12, offset: 6}">
        <div class="index-content">
            
                <!-- 使用子组件PhoneTest -->
                <div class="absolutePositioning2" v-if="!booleans">
                    <div class="position-f"  :class="{'fixed-r':show_menu}"><PhoneTest/></div> 
                </div>
                <div class="">  
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :class="{'padding-l-sm':text_indent}" :to="{ path: '/Index' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>新增用户</el-breadcrumb-item>
                    </el-breadcrumb>
                    <hr>
                    <!-- 2019年10月21日 -->
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="30%" class="demo-ruleForm">
                        <el-form-item label="密码" prop="pass">
                            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="年龄" prop="age">
                            <el-input v-model.number="ruleForm.age"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </div> 
        </div>
        </el-col>
    </el-row>
    <footer class="banner">
      <img src="../../static/img/footer.png" width="100%" alt="">
    </footer>
    <section ref="section" class="position-fixed float-type flex-column">
    </section>
        
  </div>
</template>

<script>
//1.引入组件
import Test from './Test' 
import PhoneTest from './PhoneTest'
import form from './form'
export default {
  name: 'Index',
  data () {
      //2019年10月21日
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
    //   ----------------------------------------- 
      text_indent:true,
      show_menu:false,
      booleans:true,
      out_hide:false,
      Result_Set:[],
       name:'RevisePassword',
       rules:{

       }
					
    }
  },
  //2.映射组件
  components:{
    Test,
    PhoneTest,
    
  },
  methods:{
    //------------------2019年10月21
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    //   2019/09/04日写
      submitForm(n){
                let
                    new_pwd = this.revisePassword.new_pwd,
                    sell_user_id = this.$root._data.sell_user_id;
				let userPassword = {
					sell_user_id: sell_user_id,
					password: new_pwd,
				};
				if(new_pwd.length<6){
					this.$message({
						type:'warning',
						message:'新密码长度不能小于6位',
					});
					return;
				};
				if(new_pwd.length>14){
					this.$message({
						message: '新密码长度不能大于14位',
						type: 'warning'
					});
					return;
				};  
                    this.$axios.post('/UserSell/Edit',this.$qs.stringify(userPassword))
                    .then(response=>{
                        if (response.data.status == 200) {
                       this.$message({
								message: '恭喜您，密码更新成功',
                                type: 'success',
                                booleans:true
							});
							setTimeout((booleans) => {
                               window.location='http://yzt-tmp.raonecloud.com/raonecloud-saleTool/#/';
							}, 700);
                        } else {
                            this.errorTemplate('网络错误，请稍后再试')
                        }
                    })
			},
      outHide(){
         if(this.$route.path == '/'){
              this.out_hide = false;
          }else{
              this.out_hide = true;
          }
      },
    //获取员工的
    getEmployeeList(){
        this.$axios.post('/UserSell/List',this.$qs.stringify())
        .then(response=>{
          if (response.data.status == 200) {
            // this.Result_Set = response.data.result;
            this.tableData = response.data.result;
            console.log(this.tableData);
          } else {
              this.errorTemplate('网络错误，请稍后再试')
          }
        })
    },
    //移动端触屏事件
    getAngle(){
       if (Publics.getType().android ||Publics.getType().ios ||Publics.getType().iPad) {//判断设备
          this.booleans=false;
          var bodys = this.$refs.bodyss;
          this.$refs.section.style.right="0.2rem";
          Publics.touchEvent(bodys,false,(num)=>{  
                  this.touchEevent(num);
              });
        }
    },
    touchEevent(num){
        if(num ==4){
             this.show_menu = true; 
        }else if(num ==3){
             this.show_menu = false;  
        }
    },
    errorTemplate(msg){
                    this.$message({
                        message: msg,
                        type: 'warning',
                        center:true
                    });
            }
  },
  created(){                                                 

  },
  mounted(){
    this.getAngle();
    this.getEmployeeList();
  }
}
</script>

<style scoped>
.index-content{
  font-size:0.16rem;
  margin-top:0.6rem;
}
.row .col-50{
	float: left;
  -moz-box-sizing: border-box;
	box-sizing: border-box;
	width: 49%;
  margin-left: 2%
}
.row .col-50:nth-of-type(odd){
   margin-left:0%;
}
.object-img{
    width:80%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
 
}
.feedback{
  right:0.2rem;
  bottom:2rem;
}
.return-top{
  right:0.2rem;
  bottom:1rem;
}
.feedback,.return-top{
  cursor: pointer;  
  width:0.5rem;
  height:0.5rem;
  background:#2789e9;
  border-radius: 0.3rem;
}
.object-text{
  line-height: 0.4rem;
  color:#00275b;
}
.text-hidden,.object-text p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.float-type{
  right:1rem;
  transform: translateY(50%);
  bottom:50%;
  transition: 1s;
}
.out{
  z-index:10;
  top:0.2rem;
  right:0.7rem;
  width:2rem;
}
.out img{
  padding-bottom:20px;
}
.out:hover p{
   display:block;
}
@media  screen and (max-width:1000px) {
  .object-text{
    padding-left:0.2rem;
  }
  header{
    padding:0 0.2rem;
  }
  .computer{
    display:none;
  }
  .margin-l-sm{
    margin-left:0;
  }
  .float-type{
    right:0.2rem;
    transform: translateY(50%);
    bottom:50%;
    transition: 1s;
  }
}
  .position-f{
    display:inline-block;
    position:fixed;
    left:-130px;
    top:50%;
    z-index:1000;
    transform: translateY(-50%);
    transition:all .7s;
  }
  .fixed-r{
    left:0;
    top: 10;
  }
  .raone-form-box{
	width: 32%;
	margin: 0 auto;
	min-height: 500px;
	align-items: center
  }
  .raone-form-box2{
	width: 90%;
	margin: 0 auto;
	min-height: 345px;
	align-items: center
 }


</style>
