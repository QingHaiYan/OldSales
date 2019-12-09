<template>
    <div >
        <el-row>
            
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-menu 
                    background-color="transparent"
                    :router="booleams"
                    text-color="#fff"
                    font-weight="bold"
                    active-text-color="red"
                />
                <el-aside width="135px" style="background-color: rgb(238, 241, 246)">
                    <el-menu :default-openeds="['1', '3']">
                        <el-submenu index="1" style="background-color:#2789e9;">
                            <template slot="title"><i class="el-icon-message"></i>导航</template>
                            <el-menu-item-group>
                            <div> 
                              <el-menu-item index="1-1" @click="jnmpLeft(1)">关于我们</el-menu-item>
                              <el-menu-item index="/index">产品展示</el-menu-item>
                              <el-menu-item index="1-3" @click="jnmpLeft(5)">政策文件</el-menu-item>
                              <el-menu-item index="1-4" @click="jnmpLeft(7)">成功案例</el-menu-item>
                              <el-menu-item index="1-5" @click="jnmpLeft(9)">资源下载</el-menu-item>
                              <el-menu-item index="1-5" @click="jnmpLeft(12)">案例视频</el-menu-item>
                              <el-menu-item index="1-5" @click="updatePassword()">修改密码</el-menu-item>
                            </div>
                            </el-menu-item-group>                
                        </el-submenu>
                    </el-menu>
                </el-aside>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            booleams:true //是否开启路由的布尔值
        }
    },
    methods:{
        getItems(id){
        let param = {
          type:id
        }
          this.$axios.post('/FileSell/List',this.$qs.stringify(param))
          .then(response=>{
            if (response.data.status == 200) {
              this.Result_Set = response.data.result;
              //Result_Set[0].file

              console.log(response.data.result);
            } else {
                this.errorTemplate('网络错误，请稍后再试')
            }
          })
        },
        updatePassword(){
        this.$router.push({name:'updatePassword'})
        },
        jnmpLeft(num){
            this.$router.push({name: 'left', params: { num: num}});
            if (num>1 && num<12) {
                 this.getItems(num);
            }
        },
         errorTemplate(msg){
				 	 this.$message({
							message: msg,
							type: 'warning',
							center:true
						});
			 }  
    }
}
</script>


<style>
.el-submenu .el-menu-item{
    min-width:135px;
  }
</style>