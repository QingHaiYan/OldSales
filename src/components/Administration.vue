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
                        <el-breadcrumb-item :class="{'padding-l-sm':text_indent}" :to="{ path: '/addEmployee' }">新增员工</el-breadcrumb-item>
                        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                    </el-breadcrumb>
                    <hr>
                    <!-- 2019年10月21日 -->
                    <template>
                        <el-table :data="tableData" border style="width: 50% max-height:500px" :row-class-name="tableRowClassName">
                            <el-table-column fixed prop="created_on" label="创建时间" width="180"> </el-table-column>
                            <el-table-column prop="name" label="账户" width="120"></el-table-column>
                            <el-table-column prop="password" label="密码" width="120"></el-table-column>
                            <el-table-column prop="phone" label="手机号" width="150"></el-table-column>
                            <el-table-column prop="true_name" label="真实姓名" width="120"> </el-table-column>
                            <el-table-column prop="role" label="权限" width="50"> </el-table-column>
                            <el-table-column prop="department" label="所属部门" width="150"></el-table-column>
                            <el-table-column fixed="right" label="操作" width="100">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <!-- <el-button type="text" size="small">编辑</el-button> -->
                                <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">移除</el-button>
                            </template>
                            </el-table-column>
                        </el-table>
                    </template>
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
    return {
      
      //表格模拟数据
      tableData: [{
          created_on: '2016-05-02',
          name: '王小虎',
          password: '123123',
          phone: '18745697225',
          email: '18745697225@qq.com',
          department: '人事'
        }, {
          created_on: '2016-05-04',
          name: '王小虎',
          password: '123123',
          phone: '187456972455',
          email: '187456972455@qq.com',
          department: '前台'
        }, {
          created_on: '2016-05-01',
          name: '王小虎',
          password: '123123',
          phone: '187456972455',
          email: '187456972455@qq.com',
          department: '后台'
        }, {
          created_on: '2016-05-03',
          name: '王小虎',
          password: '123123',
          phone: '159456972455',
          email: '187456972455@qq.com',
          department: '销售'
        },{
          created_on: '2016-06-03',
          name: '王小虎',
          password: '123123',
          phone: '159456972455',
          email: '187456972455@qq.com',
          department: '研发'
        }],
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
    tableRowClassName({row}) {
        //console.log(row.role);
        if ((row.role) == 1) {
            return 'warning-row';
        } else {
            return 'success-row';
        }
        return '';
    },
    deleteRow(index, rows) {
        rows.splice(index, 1);
    },
    handleClick(row) {
        console.log(row);
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
 .el-table .warning-row {
    background: rgb(0, 253, 55);
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

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
