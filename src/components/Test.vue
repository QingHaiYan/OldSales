<template>
<!-- 
    author:YanQingHai
    date:2019/07/31
    des:实现主界面导航栏的子组件
 -->
<div class="date">
        <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="transparent"
        :router="booleams"
        text-color="#fff"
        font-weight="bold"
        active-text-color="#4c89f2">          <!--  menu-trigger="click"    style="background-color:transparent"   style="background-color:#11306D;"-->
        <el-submenu index="1">
            <template slot="title">关于我们</template>
            <div class="ss" >
                <el-menu-item  index="/left/1" @click="jnmpLeft(1)">企业介绍</el-menu-item>
                <el-menu-item index="/left/2" @click="jnmpLeft(2)">荣誉资质</el-menu-item>
                <el-menu-item index="/left/3" @click="jnmpLeft(3)">科技实力</el-menu-item>
                <el-menu-item index="/left/4" @click="jnmpLeft(4)">企业环境</el-menu-item>    
                <el-menu-item index="/left/13" @click="jnmpLeft(13)">企业文化</el-menu-item>
            </div>
        </el-submenu>
        <el-submenu index="2" >
            <template slot="title">项目展示</template>
            <div style="background-color:#11306D;" class="ss">
                <el-menu-item index="/index">润一科技产品展示</el-menu-item>
            </div>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">政策文件</template>
            <div style="background-color:#11306D;" class="ss">
                <el-menu-item index="/left/5" @click="jnmpLeft(5)">国家政策</el-menu-item>
                <el-menu-item index="/left/6" @click="jnmpLeft(6)">行业标准</el-menu-item>
            </div>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title" >应用案例</template>
            <div style="background-color:#11306D;" class="ss">
                <el-menu-item index="/left/7" @click="jnmpLeft(7)">医卓通</el-menu-item>
                <el-menu-item index="/left/8" @click="jnmpLeft(8)">易卓通</el-menu-item>
            </div>
        </el-submenu>
        <el-submenu index="5">
            <template slot="title">资料区</template>
            <div style="background-color:#11306D;" class="ss">
                <el-menu-item index="/left/9" @click="jnmpLeft(9)">医卓通</el-menu-item>
                <el-menu-item index="/left/10" @click="jnmpLeft(10)">易卓通</el-menu-item>
                <el-menu-item index="/left/11" @click="jnmpLeft(11)">标准图集</el-menu-item>
            </div>
        </el-submenu>
        <el-submenu index="6">
            <template slot="title">视频案例</template>
            <div style="background-color:#11306D;" class="ss">
                  <el-menu-item index="/left/12" @click="jnmpLeft(12)">事故案例</el-menu-item>
                  <el-menu-item index="/left/14" @click="jnmpLeft(14)">企业视频</el-menu-item>
            </div>
        </el-submenu>

        </el-menu>
</div>

</template>


<script>

export default {
    

    data(){
        return {
            activeIndex: '1',
            activeIndex2: '1',
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
              //console.log(response.data.result);
            } else {
              //  this.errorTemplate('网络错误，请稍后再试')
            }
          })
      },
        // errorTemplate(msg){
		// 		 	 this.$message({
		// 					message: msg,
		// 					type: 'warning',
		// 					center:true
		// 				});
		// 	 },
        handleSelect(key, keyPath) {
        },
        jnmpLeft(num){
            //完成路由的跳转
            // this.$router.push({name: 'left', params: { num: num}});
            this.getItems(num);
        },

    },
    

}//
</script>

<style>
.el-submenu__title{
    margin: 0 20px !important;
    padding: 0 5px !important;
} 
.el-icon-arrow-down:before{
    content: none !important;
}
/* element.style {
    border-bottom-color: darkblue !important;
} */
.date:hover {
 background-image: none;
 border-bottom-color: darkblue !important;

/* background-image: none;
-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
-moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15); */
}
 .ss{
    text-align:left;
    padding-top: 20px;
    padding-left: 10px;
    background-color: #11306D !important;
    
    /* background-color: #2789e9 */

}
 a{
    color: #fff;
    text-decoration: none;
    }
    ul {
    margin: 0;
    list-style: none;
    }
    #menu {
    width: 600px;
    height: 60px;
    background: #2789e9;
    border-radius: 6px;
    box-shadow: 2px 2px 5px snow;
    }
    #menu li {
    float: left;
    margin-top: 10px;
    line-height: 22px;
    padding: 0;
    position: relative;
    }
    #menu li a {
    padding: 10px 20px;
    display: inline-block;
    }
    #menu li .hover {
    background: #fff;
    opacity: 0.5;
    color: gray;
    border-radius: 5px;
    }
    #menu li .lis {
    width: 400px;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    background: lightblue;
    position: absolute;
    top: 70px;
    }
    #menu li .lis a {
    padding: 0 10px;
    background: none;
    opacity: 1;
    color: #fff;
    }
    #menu li .lis a:hover {
    text-decoration: underline;
    }
    


</style>

