<template>
<!-- 
    modify:
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
         <!-- 手机banner -->
        <!-- <el-row v-if="!booleans">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="absolutePositioning">
            <img src="../../static/img/app.png" width="100%" alt="">  
            </el-col>
        </el-row>  -->

    <el-row>
     <el-col :xs="{span: 24, offset: 0}" :sm="{span: 24, offset: 0}" :md="{span: 24, offset: 0}" :lg="{span: 18, offset: 3}" :xl="{span: 12, offset: 6}">
      <div class="index-content">
        
        <!-- 使用子组件PhoneTest -->
        <div class="absolutePositioning2" v-if="!booleans">
            <div class="position-f"  :class="{'fixed-r':show_menu}"><PhoneTest/></div> 
        </div>

        <header class="flex-row main-justify-between cross-align-center"> 
          <div class="flex-row cross-align-center">
            <img class="computer" src="../../static/img/computer.png" alt="">
            <h3 class="margin-l-sm">润一展示平台</h3>
          </div>
          <div>
            <el-input ref="input" placeholder="请输入搜索内容" @change="changeEvent" @keydown.native="eventOnload($event)" v-model="searchContent" class="">
                  <el-button class="button" slot="append" icon="el-icon-search" @click="searchs()"></el-button>
            </el-input> 
          </div>
        </header>
        <hr>
        <el-row>
        </el-row>
        <p v-if="indexbooleans" style="height:35px !important"><button class="button margin-b-sm">医卓通相关平台展示</button></p>
        <p v-if="!indexbooleans" style="height:35px !important"><button class="button margin-b-sm">相关平台展示</button></p>
        <section class="index-object">
          <div class="row clearfix">
            <div  class="margin-top-sm col-50" v-for="item in object_data" :key="item.id" @click="jumpDetail(item.id)">
              <div class="object-bg flex-row main-justify-center cross-align-center">
                
                <img :src="item.img" class="object-img" alt="" width="100%">
              </div>
              <div class="padding-t-lg object-text">
                <h4 class="text-hidden">{{item.title}}</h4>
                <p>{{item.syn1}}</p>
                <p>{{item.syn2}}</p>
                <p>{{item.syn3}}</p>
              </div>
            </div>
         </div>
        <p>&nbsp;</p>
        </section>
        <p v-if="indexbooleans" style="height:35px !important"><button class="button margin-b-sm">易卓通相关平台展示</button></p>
        <section class="index-object">
          <div class="row clearfix">
            <div  class="margin-top-sm col-50" v-for="item in object_data2" :key="item.id" @click="jumpDetail(item.id)">
              <div class="object-bg flex-row main-justify-center cross-align-center">
                
                <img :src="item.img" class="object-img" alt="" width="100%">
              </div>
              <div class="padding-t-lg object-text">
                <h4 class="text-hidden">{{item.title}}</h4>
                <p>{{item.syn1}}</p>
                <p>{{item.syn2}}</p>
                <p>{{item.syn3}}</p>
              </div>
            </div>
         </div>
        <p>&nbsp;</p>
        </section>
        <p v-if="indexbooleans" style="height:35px !important"><button class="button margin-b-sm">水务安全智能管理平台展示</button></p>
        <section class="index-object">
          <div class="row clearfix">
            <div  class="margin-top-sm col-50" v-for="item in object_data3" :key="item.id" @click="jumpDetail(item.id)">
              <div class="object-bg flex-row main-justify-center cross-align-center">
                
                <img :src="item.img" class="object-img" alt="" width="100%">
              </div>
              <div class="padding-t-lg object-text">
                <h4 class="text-hidden">{{item.title}}</h4>
                <p>{{item.syn1}}</p>
                <p>{{item.syn2}}</p>
                <p>{{item.syn3}}</p>
              </div>
            </div>
         </div>
        </section>
        <p>&nbsp;</p>
        <p v-if="indexbooleans" style="height:35px !important"><button class="button margin-b-sm">其他平台展示</button></p>
        <section class="index-object">
          <div class="row clearfix">
            <div  class="margin-top-sm col-50" v-for="item in object_data4" :key="item.id" @click="jumpDetail(item.id)">
              <div class="object-bg flex-row main-justify-center cross-align-center">
                
                <img :src="item.img" class="object-img" alt="" width="100%">
              </div>
              <div class="padding-t-lg object-text">
                <h4 class="text-hidden">{{item.title}}</h4>
                <p>{{item.syn1}}</p>
                <p>{{item.syn2}}</p>
                <p>{{item.syn3}}</p>
              </div>
            </div>
         </div>
        </section>
        
       </div>
     </el-col>
    </el-row>
    <footer class="banner">
      <img src="../../static/img/footer.png" width="100%" alt="">
    </footer>
    <!-- <section class="position-fixed feedback flex-row main-justify-center cross-align-center" title="反馈">
          <img src="../../static/img/return.png" width="20px" height="20px">      
    </section> -->
    <section ref="section" class="position-fixed float-type flex-column">
        <span class="return-top flex-row main-justify-center cross-align-center"  title="返回顶部" @click="returnTop">
          <img src="../../static/img/top.png" width="20px" height="20px">
        </span>
        <span class=" feedback margin-top-xs flex-row main-justify-center cross-align-center" title="反馈"  @click="jumpFeedBack">
          <img src="../../static/img/return.png" width="20px" height="20px">
        </span>
       
    </section>
        
  </div>
</template>

<script>
//1.引入组件
import Test from './Test' 
import PhoneTest from './PhoneTest'
export default {
  name: 'Index',
  data () {
    return {
      indexbooleans:true,
      show_menu:false,
      searchContent:'',
      object_dataTitle:[
        
      ],
      object_data:[
      ],
      object_data2:[
      ],
      object_data3:[
      ],
      object_data4:[
      ],

      booleans:true,
      out_hide:false 
    }
  },
  //2.映射组件
  components:{
    Test,
    PhoneTest
  },
  watch:{
    searchContent(val,oldval){
        if (val == '') {
          this.indexbooleans = true;
          this.getInfoList();
        }
    }
  },
  methods:{
      changeEvent(){
        if(this.searchContent.length == 0){

          this.getInfoList();
          this.indexbooleans = true;
           console.log('123456s');

        }
      },
      outHide(){
         if(this.$route.path == '/'){
              this.out_hide = false;
          }else{
              this.out_hide = true;
          }
      },


       //搜索键盘事件
      eventOnload(ev){
        if(ev.keyCode==13){
            this.searchs();  
          }
      },
      //点击搜索
      searchs(){
        this.indexbooleans = false;
          let param = {
          platform_name:this.searchContent
        }
        if(this.searchContent){
          this.$axios.post('/PlatformSell/PlaList',this.$qs.stringify(param)) //Ajax请求，发送请求后跳转路径，沟通后台代码
          .then(response=>{
              if(response.data.status == 200){
                this.object_data = response.data.result;
              
                console.log(this.object_data);
              }else{
                this.errorTemplate(response.data.msg);
              }
          })  
          .catch(error => {
						this.errorTemplate('网络错误，请稍后再试');
					})
        }else{
          this.getInfoList();
        }
      },
      jumpDetail(num){
        this.$router.push({name: 'ObjectDetail', params: { num: num}});
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
      getInfoList(){                                           
        let param = {
          platform_id:'0'
        }
        this.$axios.post('/PlatformSell/List',this.$qs.stringify(param))
        .then(response=>{
              if(response.data.status == 200){
                //this.$nextTick(()=>{
                   this.object_data = response.data.result[0];
                   this.object_data2 = response.data.result[1];
                   this.object_data3 = response.data.result[2];
                   this.object_data4 = response.data.result[3];
                  //  console.log(this.object_data);
                  //   console.log(JSON.stringify(this.object_data));
                  //  for (let i = 0; i < this.object_data.length; i++) {
                     
                  //    this.object_data[i].img = "http://192.168.2.66:8091/salestools/image/yzt/yzt1.png";
                  //     console.log( this.object_data[i].img);
                  //  }
                //})
               
              }else{
                this.errorTemplate(response.data.msg);
              }
        })
        .catch(error => {
						this.errorTemplate('网络错误，请稍后再试');
					})
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
    // this.getInfoList();
    // this.getAngle();
  },
  mounted(){
    this.getInfoList();
    this.getAngle();
    // this.changeEvent();
   // console.log(this.$root._data.sell_user_id);
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
  /* .index-content{
     width:100%;
  } */
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
    /* transform: translateX(-10%); */
    /* width:100%; */
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
  /* padding:0.1rem 0.2rem; */
  color:#fff;
  /* font-weight: bold; */
  height: 40px;
  }
  /* element .style{
  top:93px !important;
  left: 896px !important;
  } */

</style>
