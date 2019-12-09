<template>
<!-- 
    author:
    data:
    des:
 -->
  <div ref="bodyss"> 
        <el-row>
            <!-- <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="relativePositioning" > -->
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
                    <el-breadcrumb-item>当前位置</el-breadcrumb-item>
                    <el-breadcrumb-item>资料修改</el-breadcrumb-item>
                </el-breadcrumb>
                        
                <hr>
                <!--编辑部分-->
                <!-- padding-tb-sm margin-tb-sm bg-fff raone-box-shadow raone-radius -->
                <div class="padding-tb-sm margin-tb-sm bg-fff raone-box-shadow raone-radius">
                    <div v-if="booleans" class="raone-form-box">
                        <Form :rules="rules" :data="revisePassword" :label="label" label-width="160px" submitName="修改" @submitForm="submitForm"></Form>
                    </div>	
                    <div v-if="!booleans" class="raone-form-box2">
                        <Form :rules="rules" :data="revisePassword" :label="label" label-width="160px" submitName="修改" @submitForm="submitForm"></Form>
                    </div>			  		
                </div>
                 
            </div> 
           
       </div>
     </el-col>
    </el-row>
    <footer class="banner">
      <img src="../../static/img/footer.png" width="100%" alt="">
    </footer>
    <section ref="section" class="position-fixed float-type flex-column">
        <!-- <span class="return-top flex-row main-justify-center cross-align-center"  title="返回顶部" @click="returnTop">
          <img src="../../static/img/top.png" width="20px" height="20px">
        </span>
        <span class=" feedback margin-top-xs flex-row main-justify-center cross-align-center" title="反馈"  @click="jumpFeedBack">
          <img src="../../static/img/return.png" width="20px" height="20px">
        </span> -->
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
    return {
      text_indent:true,
      show_menu:false,
      booleans:true,
      out_hide:false,
//2019/09/04日写
       name:'RevisePassword',
       rules:{
					// old_pwd: [{
					// 	required: true,
					// 	message: '请至少输入6个字符',
					// 	trigger: 'blur'
					// }],
					new_pwd: [{
						required: true,
						message: '请至少输入6个字符',
						trigger: 'blur'
					}],
					two_pwd: [{
						required: true,
						message: '请至少输入6个字符',
						trigger: 'blur'
					}]	
				},
	            revisePassword: {
					// old_pwd: '',
					new_pwd: '',
					// two_pwd: ''	
				},
				//传递给表单需要的字段，字段名和接口的字段名字一致
				label:{
					// old_pwd:{
            		// 	prop:true,//是否是必填项
            		// 	type:'input',//表单的类型
            		// 	readonly:false,//是否可修改
            		// 	title:'旧密码 / Pwd',//label的标题
            		// },
            		new_pwd:{
            			prop:true,//是否是必填项
            			type:'input',//表单的类型
            			readonly:false,//是否可修改
            			title:'新密码 / Pwd',//label的标题
            		},
            		two_pwd:{
            			prop:true,//是否是必填项
            			type:'input',//表单的类型
            			readonly:false,//是否可修改
            			title:'确认密码 / Pwd',//label的标题
            		}
                },
                //2019/09/04日尾
    }
  },
  //2.映射组件
  components:{
    Test,
    PhoneTest,
    
  },
  methods:{
    //   2019/09/04日写
      submitForm(n){
                let
                //  old_pwd = this.revisePassword.old_pwd,
                    new_pwd = this.revisePassword.new_pwd,
                   
					// two_pwd = this.revisePassword.two_pwd,
                    sell_user_id = this.$root._data.sell_user_id;
                    //console.log(sell_user_id);
                    //console.log(this.revisePassword.new_pwd)
				let userPassword = {
					sell_user_id: sell_user_id,
					// old_pwd: old_pwd,
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
								// if (/yzt-tmp.raonecloud.com/.test(String(window.location.href))){
								// 	window.location='http://yzt-tmp.raonecloud.com/raonecloud-login';
								// }else{
								// window.location='http://192.168.177.100:8080/#/';
								// }
							}, 700);
                        } else {
                            this.errorTemplate('网络错误，请稍后再试')
                        }
                    })

			},
      //2019/09/04日尾
      outHide(){
         if(this.$route.path == '/'){
              this.out_hide = false;
          }else{
              this.out_hide = true;
          }
      },

      jumpFeedBack(){
        this.$router.push({name:'FeedBack'})
      },
      returnTop(){
        
        var dom = document.getElementsByTagName("html")[0];
        var dom1 = document.getElementsByTagName("body")[0];
        if(dom.scrollTop){
            dom.scrollTop =0
        }else{
            dom1.scrollTop =0
        }

        //dom.scrollTop =0;
      },
      
    //移动端触屏事件
    getAngle(){
          //  var bodys = this.$refs.bodyss;
          //  console.log(bodys);
       if (Publics.getType().android ||Publics.getType().ios ||Publics.getType().iPad) { //判断设备
          
          this.booleans=false;
          var bodys = this.$refs.bodyss;
          // alert(bodys);
          // console.log(JSON.stringify(this.$refs));
          this.$refs.section.style.right="0.2rem";
          Publics.touchEvent(bodys,false,(num)=>{  
                //  alert(111);
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
  }
}
</script>

<style scoped>


.index-content{
  /* width:10rem; */
  font-size:0.16rem;
  /* margin: 0 auto; */
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
.absolutePositioning{
    position:absolute;
    top:3%;
    bottom: 0px;
    left:42%;
  }
  .relativePositioning{    
    position: relative;
  }
  .absolutePositioning2{
    position: absolute;
    bottom: 0px;
    left: 0%;
    top: 7.5%;
    ;
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
  .button{
  background:#1165c9;
  border:none;
  color:#fff;
  height: 40px;
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
