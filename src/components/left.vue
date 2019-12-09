<template>
<!-- 
    author：YanQingHai
    date：2019/07/31
    des:实现通过点击导航栏进入的详情内容页面
 -->
  <div>
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="absolutePositioning">
            <img v-if="booleans" src="../../static/img/banner.png" width="100%" alt="">  
            <img v-if="!booleans" src="../../static/img/app.png" width="100%" alt="">  
            <div v-if="booleans" class="absolutePositioning0823"><Test/></div>
            <!-- relativePositioning -->
            </el-col>
        </el-row> 
    
    <el-row>
    <el-col :xs="{span: 24, offset: 0}" :sm="{span: 24, offset: 0}" :md="{span: 24, offset: 0}" :lg="{span: 18, offset: 3}" :xl="{span: 12, offset: 6}">
      <div class="index-content">       
        <header class="flex-row main-justify-between cross-align-center"> 
          <div class="flex-row cross-align-center">
            <img class="computer" src="" alt="">
          </div>
        </header>
        <div>  
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :class="{'padding-l-sm':text_indent}" :to="{ path: '/Index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>当前位置</el-breadcrumb-item>
                <el-breadcrumb-item>{{messages}}</el-breadcrumb-item>
              </el-breadcrumb>
        </div>
        <hr>     <!-- 分割线 -->
        <div class="index-object flex-row">
            <el-container style=" border: 1px solid #eee">
                    <el-aside  v-if="booleans" width="165px" style="background-color: rgb(238, 241, 246)">
                        <el-menu :default-openeds="['1', '3']">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>导航</template>
                            <el-menu-item-group>
                            <div > 
                              <el-menu-item class="Tunderline" @click.native="events(p.id)" index="1-1" v-for="(p,index) in defaluts" :key="index">{{p.name}}</el-menu-item>
                            </div>                                        
                            </el-menu-item-group>                
                            </el-submenu>
                        </el-menu>
                    </el-aside>
                   
                      <!-- 详细内容展示div位置 -->
                      <div ref="bodys2" class="min">
                          <div v-if="suffix==1" class="pd">
                            <h2>润一科技</h2> 
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <div v-for="(it,index) in item" :key="index">
                                  <div style="line-height:35px;font-size:19px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{it.item1}}</div>
                                  <p>&nbsp;</p>     
                            </div>
                             <div> 
                                <img src="../../static/img/honour/企业介绍.jpg" alt="" width="100%" height="80%">
                             </div> 
                          </div>
                          <div v-if="suffix==13" class="pd">
                            <h2>企业文化</h2>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <div v-for="(itC,index) in itemCulture" :key="index">
                                  <div style="line-height:35px;font-size:19px;"><h4 v-if="index==0">感恩诚行:</h4><h4 v-if="index==3">学习文化:</h4><h4 v-if="index==4">执行文化:</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{itC.item2}}</div>

                                    <div v-if="index==1">
                                      <img src="../../static/img/video/02.jpg" alt="" width="100%">
                                    </div>
                                    <div v-if="index==2">
                                      <img src="../../static/img/video/01.jpg" alt="" width="100%">
                                    </div>
                                    <div v-if="index==3">
                                      <img src="../../static/img/video/学习文化.jpg" alt="" width="100%">
                                    </div>
                                    <div v-if="index==4">
                                      <img src="../../static/img/video/04.jpg" alt="" width="100%">
                                    </div>
                            </div>
                          </div>
                          <div v-if="suffix==2">
                             <p> <button class="button margin-b-sm">企业荣誉</button> </p>
                              <el-row :gutter="15" style="margin:0!important;">
                                <el-col class="pubs pubs_hight" :span="8" v-for="(result,index) in newResult_Set" :key="index">
                                        <img :src="result.file_url" alt="" title="" :data-index="index" width="100%"  @click="clickImg($event,result)">                            
                                </el-col> 
                              </el-row>     
                             <p>&nbsp;</p>        
                             <p> <button class="button margin-b-sm">产品荣誉</button> </p>
                              <el-row :gutter="15" style="margin:0!important;">
                                <el-col class="pubs pubs_hight" :span="8" v-for="(result,index) in newResult_Set2" :key="index">
                                        <img :src="result.file_url" alt="" title="" :data-index="newResult_Set.length+index" width="100%"  @click="clickImg($event,result)">                            
                                </el-col> 
                              </el-row>                  
                          </div>
                          <div v-if="suffix==3">
                              <p> <button class="button margin-b-sm">国际交流</button> </p>
                                <el-row :gutter="15" style="margin:0!important;">
                                  <el-col class="pubs pubs_hight" :span="8" v-for="(result,index) in newResult_Set" :key="index">                             
                                          <img :src="result.file_url" alt="" :title="result.file_name" :data-index="index" width="100%"  @click="clickImg($event)"> 
                                          <hr> 
                                          <div class="Jianjie" >{{result.file_name}}</div>  
                                  </el-col>
                                </el-row>
                                <p>&nbsp;</p>
                              <p><button class="button margin-b-sm">院校合作</button></p>
                                <el-row :gutter="15" style="margin:0!important;">
                                  <el-col class="pubs pubs_hight" :span="8" v-for="(results,index) in newResult_Set2" :key="index">                             
                                          <img :src="results.file_url" alt="" title="" :data-index="newResult_Set.length+index" width="100%"  @click="clickImg($event)">
                                          <div class="Jianjie">{{results.file_name}}</div>       
                                  </el-col>
                                </el-row>
                                <p>&nbsp;</p>
                              <p><button class="button margin-b-sm">科研实力</button> </p>
                                <el-row :gutter="15" style="margin:0!important;">
                                  <el-col class="pubs pubs_hight" :span="8" v-for="(results,index) in newResult_Set4" :key="index">                             
                                          <img :src="results.file_url" alt="" title="" :data-index="newResult_Set.length+newResult_Set2.length+newResult_Set3.length+index" width="100%"  @click="clickImg($event)">
                                          <div class="Jianjie">{{results.file_name}}</div>       
                                  </el-col>
                                </el-row>
                                <p>&nbsp;</p>
                              <p><button class="button margin-b-sm">论文发表</button> </p>
                                <el-row :gutter="15" style="margin:0!important;">
                                  <el-col class="pubs pubs_hight" :span="8" v-for="(results,index) in newResult_Set3" :key="index">                             
                                          <img :src="results.file_url" alt="" title="" :data-index="newResult_Set.length+newResult_Set2.length+index" width="100%"  @click="clickImg($event)">
                                          <div class="Jianjie">{{results.file_name}}</div>       
                                  </el-col>
                                </el-row>
                          </div>
                          <div v-if="suffix==4">
                              <el-row :gutter="15" style="margin:0!important;">
                                <el-col class="pubs" :span="8" v-for="(result,index) in Result_Set" :key="index">                             
                                        <img :src="result.file_url" alt="" title="" :data-index="index" width="100%"  @click="clickImg($event)">                            
                                </el-col>.
                              </el-row>
                          </div>
                          <div v-if="suffix==5">                            
                                    <div class="pubs2" v-for="(result,index) in Result_Set" :key="index">
                                        <input type='checkbox' :ref="'checked'+index"  name='checkboxinput' class='input-checkbox' @click='checkedOne(result.file_id)'>
                                        <a href="javascript:void(0)" :data-index="index" style="color:black"  @click="openfile($event)">{{result.file_name}}</a>
                                    </div>
                                      <!--默认删除按钮不能点击, 当选中某一checkbox时可以删除-->
                                      <hr>
                                      <!-- <button :disabled="!downloadFileIdArray.length>0" @click="getDownloadList()">下载</button> -->
                                        <el-button :disabled="!downloadFileIdArray.length>0" @click="getDownloadList()" type="primary">下载</el-button>
                                        <el-button :checked="downloadFileIdArray.length === Result_Set.length" @click="checkedAll()" type="primary">全选</el-button>
                                        <el-button type="primary">{{downloadFileIdArray.length}}/{{Result_Set.length}}</el-button>
                          </div>      
                          <div v-if="suffix==6">
                                    <div class="pubs2" v-for="(result,index) in Result_Set" :key="index">
                                        <input type='checkbox' :ref="'checked'+index"  name='checkboxinput' class='input-checkbox' @click='checkedOne(result.file_id)'>
                                        <a href="javascript:void(0)" :data-index="index" style="color:black" @click="openfile($event)">{{result.file_name}}</a>
                                    </div>
                                      <hr>
                                        <el-button :disabled="!downloadFileIdArray.length>0" @click="getDownloadList()" type="primary">下载</el-button>
                                        <el-button :checked="downloadFileIdArray.length === Result_Set.length" @click="checkedAll()" type="primary">全选</el-button>
                                        <el-button type="primary">{{downloadFileIdArray.length}}/{{Result_Set.length}}</el-button>
                          </div>
                          <div v-if="suffix==7">
                              <el-row :gutter="30" style="margin:0!important;">
                                <el-col class="pubs warp pubs_hight" :span="8" v-for="(result,index) in Result_Set" :key="index">                        
                                      <img :src="result.file_url" alt="" title="" :data-index="index" width="100%" height="90%" @click="lookDetails($event)">                                                        
                                      <hr>
                                    <div style="height:50px !important"> {{result.file_name}} </div>
                                </el-col>
                              </el-row>
                          </div>
                          <div v-if="suffix==8">
                            <el-row :gutter="30" style="margin:0!important;">
                                <el-col class="pubs warp pubs_hight" :span="8" v-for="(result,index) in Result_Set" :key="index">                        
                                        <img :src="result.file_url" alt="" title="" :data-index ="index"  width="100%"  @click="lookDetails($event)">    
                                        <hr>
                                        <div style="height:50px !important">{{result.file_name}} </div>                       
                                </el-col>
                            </el-row>
                          </div>
                          <div v-if="suffix==9">
                              <div class="pubs2" v-for="(result,index) in Result_Set" :key="index"> 
                                  <a href="javascript:void(0)" style="text-decoration:underline;color:black" @click="getDownload(result.file_id)">&nbsp;&nbsp;{{index+1}}、{{result.file_name}}</a>
                              </div>              
                          </div>
                          <div v-if="suffix==10">
                              <div class="pubs2" v-for="(result,index) in Result_Set" :key="index"> 
                                    <a href="javascript:void(0)" style="text-decoration:underline;color:black" @click="getDownload(result.file_id)">&nbsp;&nbsp;{{index+1}}、{{result.file_name}}</a>
                                    <!-- <a target='_black'  href='https://view.officeapps.live.com/op/view.aspx?src=http://mczaiyun.top/ht/123.xlsx'>&nbsp;&nbsp;{{index+1}}、{{result.file_name}}</a> -->
                              </div>
                          </div>
                          <div v-if="suffix==11">
                              <div class="pubs2" v-for="(result,index) in Result_Set" :key="index"> 
                                    <a href="javascript:void(0)" style="text-decoration:underline;color:black" @click="getDownload(result.file_id)">&nbsp;&nbsp;{{index+1}}、{{result.file_name}}</a>
                              </div>
                          </div>
                          <!-- 新增案例视频界面 -->
                          <div v-show="suffix==12" class="p">
                                  <el-row :gutter="15" style="margin:0!important;">
                                      <el-col :span="12">
                                            <video  controls>
                                                  <source src="http://yzt-tmp.raonecloud.com/raonecloud-saleTool/image/video/1.mp4" type="video/mp4">
                                            </video>  
                                            <p>1.电梯发生开门走梯事故</p>
                                      </el-col>
                                      <el-col :span="12">
                                            <video   controls>
                                                  <source src="http://yzt-tmp.raonecloud.com/raonecloud-saleTool/image/video/2.mp4" type="video/mp4">
                                            </video> 
                                            <p>2.电梯异常开关门事故</p> 
                                      </el-col>
                                      <el-col :span="12">
                                            <video  controls>
                                                  <source src="http://yzt-tmp.raonecloud.com/raonecloud-saleTool/image/video/6.mp4" type="video/mp4">
                                            </video>
                                            <p>3.配电室起火</p> 
                                      </el-col>
                                      <el-col :span="12">
                                            <video  controls>
                                                  <source src="http://yzt-tmp.raonecloud.com/raonecloud-saleTool/image/video/4.mp4" type="video/mp4">
                                            </video>
                                            <p>4.南京发生空调外机失火事故</p> 
                                      </el-col>
                                      <el-col :span="12">
                                            <video  controls>
                                                  <source src="http://yzt-tmp.raonecloud.com/raonecloud-saleTool/image/video/8.mp4" type="video/mp4">
                                            </video>
                                            <p>5.上海一农药仓库发生火灾事故</p> 
                                      </el-col>
                                      <el-col :span="12">
                                            <video  controls>
                                                  <source src="http://yzt-tmp.raonecloud.com/raonecloud-saleTool/image/video/9.mp4" type="video/mp4">
                                            </video>
                                            <p>6.扬州发生锅炉爆炸事故</p>
                                      </el-col>
                                       <el-col :span="12">
                                            <video  controls>
                                                  <source src="http://yzt-tmp.raonecloud.com/raonecloud-saleTool/image/video/3.mp4" type="video/mp4">
                                            </video>  
                                            <p>7.江苏发生煤气泄漏爆炸事故</p>
                                      </el-col>
                                       <el-col :span="12">
                                            <video  controls>
                                                  <source src="http://yzt-tmp.raonecloud.com/raonecloud-saleTool/image/video/5.mp4" type="video/mp4">
                                            </video>  
                                            <p>8.排水沟气体中毒事故</p>
                                      </el-col>
                                  </el-row>        
                          </div>
                          <div v-show="suffix==14" class="p">
                                  <el-row :gutter="15" style="margin:0!important;">
                                      <el-col :span="12">
                                            <video  controls>
                                                  <source src="http://yzt-tmp.raonecloud.com/raonecloud-saleTool/image/video/7.mp4" type="video/mp4">
                                            </video>  
                                            <p>1.润一科技宣传视频</p>
                                      </el-col>
                                      <el-col :span="12">
                                            <video   controls>
                                                  <source src="http://yzt-tmp.raonecloud.com/raonecloud-saleTool/image/video/10.mp4" type="video/mp4">
                                            </video> 
                                            <p>2.医卓通应用场景</p> 
                                      </el-col>
                                  </el-row>        
                          </div>
                          <!-- 点击放大功能的实现 -->
                            <div ref="bodys3">
                              <!-- 过渡动画 -->
                              <transition  v-if="showImg" name="fade">
                                  <div  class="img-view">
                                      <!-- 遮罩层 -->
                                      <div class="img-layer">                 
                                          <img class="relativePositioning photo" :src="imgSrc" @click="bigImg">
                                          
                                          <div v-if="booleans && this.suffix == 3" class="wenzi" style="padding:10px;color:#ffe7b4;" :text="detailsTitle">{{detailsTitle}}</div>
                                          <div v-if="!booleans && this.suffix == 3" class="wenziPhone" style="padding:10px;color:#ffe7b4;" :text="detailsTitle">{{detailsTitle}}</div>
                                          <img v-if="Arrow" class="left" src="..\..\static\img\detail\click-left.png"  @click="webLeft()"> 
                                          <img v-if="Arrow" class="right" src="..\..\static\img\detail\click-right.png" @click="webRight()" >
                                      </div>
                                      
                                  </div>
                              </transition>  
                            </div>
                          <!-- 应用案例详情div的实现 -->
                            <transition  v-if="display && booleans" name="fade">
                                  <div  class="img-views" @click="bigImg">
                                      <!-- 遮罩层 -->
                                      <div class="img-layer">
                                        <!-- 外部div -->
                                        <div class="details-img detailsDiv">
                                              <el-row >
                                              <el-col :span="12">
                                                   <img class="relativePositioning2" :src="detailImgSrc">
                                              </el-col>
                                              <el-col :span="12">
                                                   <h2 style="padding:10px;">{{detailsTitle}}</h2>
                                                   <hr>
                                                    <div  style="padding:10px !important;line-height:30px !important;font-size:18px !important"> {{detailsCooperation}}</div>
                                              </el-col>
                                            </el-row> 
                                        </div>
                                      </div>
                                  </div>
                            </transition>  
                          <!--适配手机端 应用案例详情div的实现 -->
                            <transition  v-if="display && !booleans" name="fade">
                                  <div  class="img-views" @click="bigImg">
                                      <!-- 遮罩层 -->
                                      <div class="img-layer">
                                        <!-- 外部div -->
                                        <div class="details-img_phone detailsDiv">
                                            <el-row >
                                              <el-col >
                                                   <img class="relativePositioningApp" :src="detailImgSrc">
                                              </el-col>
                                              <el-col >
                                                   <h2>{{detailsTitle}}</h2>                                                    
                                                   <hr>
                                                  <div style="padding:10px !important;line-height:25px !important;font-size:16px !important"> {{detailsCooperation}}</div>
                                              </el-col>
                                            </el-row> 
                                           
                                        </div>
                                      </div>
                                  </div>
                            </transition> 
                            <!-- 政策文件摘要查看 -->
                            <transition  v-if="openbooleans && booleans" name="fade">
                                    <div  class="img-views" @click="bigImg">
                                        <div class="img-layer">
                                          <!-- 外部div -->
                                          <div class="detailsfile detailsDiv ">
                                              <el-row >
                                                <el-col :span="24">
                                                    <h2 style="padding:10px;">{{detailsTitle}}</h2>
                                                    <hr>
                                                </el-col>
                                              </el-row> 
                                          </div>
                                        </div>
                                    </div>
                            </transition>
                            <transition  v-if="openbooleans && !booleans" name="fade">
                                    <div  class="img-views">
                               
                                        <div class="img-layer" @click="bigImg">
                                          <!-- 外部div -->
                                          <div class="details-img_phone detailsDiv ">
                                              <el-row >
                                                <el-col :span="24">
                                                   <h3 style="padding:10px;">{{detailsTitle}}</h3>
                                                   <hr>
                                                </el-col>
                                              </el-row> 
                                            
                                          </div>
                                        </div>
                                    </div>
                            </transition>
                      </div>   

            </el-container>
        </div>
        <!-- 移动端显示浮动导航信息 -->
        <div class="position-f" v-if="!booleans && !showImg && suffix<15"  :class="{'fixed-r':show_menu}">
            <el-aside class="" width="135px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">
                        <el-submenu index="1" style="background-color:#2789e9;">
                            <template slot="title"><i class="el-icon-message"></i>导航</template>
                            <el-menu-item-group>
                            <div > 
                                <el-menu-item @click.native="events(p.id)" index="1-1" v-for="(p,index) in defaluts" :key="index">{{p.name}}</el-menu-item>
                            </div>  
                            </el-menu-item-group>                
                        </el-submenu>
            </el-menu>
            </el-aside>
        </div>
       </div>
     </el-col>
    </el-row>
    <footer class="banner">
      <img src="../../static/img/footer.png" width="100%" alt="">
    </footer>
      <section v-if="booleans" ref="section" class="position-fixed float-type flex-column">
        <span class="return-top flex-row main-justify-center cross-align-center"  title="返回顶部" @click="returnTop">
          <img src="../../static/img/top.png" width="20px" height="20px">
        </span>
        <span class=" feedback margin-top-xs flex-row main-justify-center cross-align-center" title="反馈"  @click="jumpFeedBack">
          <img src="../../static/img/return.png" width="20px" height="20px">
        </span>
      </section>
      <!-- phone -->
      <section v-if="!booleans && !showImg" ref="section" class="position-fixed float-type2 flex-column">
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
//import BigImg from './BigImg'
import PhoneTest from './PhoneTest'
export default {
  name: 'Left',
  data () {
    return {
      index:6,
      show_menu:false,
      booleans:true,
      title:'',
      searchContent:'',
      object_data:[],
      Result_Set:[],
      newResult_Set:[],
      newResult_Set2:[],
      newResult_Set3:[],
      newResult_Set4:[],
      successfulCases:'',
      suffix:4,//页面跳转时后缀拼接的信息数值
      suffixName:0,//用于显示面包屑的判断属性
      id:0,//点击页面左侧选项是所传递的id值
      text_indent:true,
      terr_content:[],
      item:[
        {item1:`润一科技，总部位于山东济南，是一家以物联网技术研发应用为基础，结合人工智能、云计算和大数据分析应用，专注于为客户提供智慧安全整体解决方案的国家级高新技术企业。旗下拥有润一智能科技有限公司、润兴智慧环保科技有限公司、雄安润一智能科技有限公司、润一建鲁智能科技有限公司、润一智能科技（西安）有限公司等5家分、子公司。`},
        {item1:`公司秉承用匠心推动技术创新、高品质发展的理念，高度重视新技术在安全平台中的开发与应用，与国内外知名高校及科研机构建立战略合作关系，相继成立了院士专家工作站、应急管理部重点实验室、中以技术合作研究中心、智能安全创新研究院等，并作为主委单位建立了山东省人工智能学会安全智能管理专业委员会、山东省物联网协会智慧后勤专业委员会等机构，积极组织开展前瞻性、高水平的科研合作与交流。`},
        {item1:`以技术创新追求全球行业领先优势，公司目前拥有发明专利与软件著作权达百余项；参与物联网、大数据、人工智能专项课题研究达5项，参与行业标准制定6项，参编行业著作5部。企业先后被评为重点产业创新领军企业、山东物联网标准化示范企业、中国物联网技术创新企业、最具创新力物联网单位等荣誉。企业研发的安全智能管理平台获得世界物联网博览会优秀奖、全国物联网行业示范推广项目、智慧物联科技成果创新一等奖、智慧城市大数据创新应用大赛一等奖等奖项，赢得了社会各界的赞誉与信赖。`},
        {item1:`多年来，润一科技感恩诚行，以强烈的社会责任感积极投身社会公益事业。公司成立“润一蓝丝带”公益基金，积极参与和组织捐资助学、扶贫赈灾等公益活动。`},
        {item1:`公司以实际价值和需求作为创新源点和动力，用匠心精神追求高品质，持续加大安全技术研究和创新投入，为国内外客户提供最具价值的安全智能保障系统！`},
        {item1:`面向未来，我们将秉承企业的安全使命、社会责任和追求，以安全重于泰山为己任，打造国际一流的安全智慧化管理领军企业。以持续的技术创新，有责任使命的匠心追求，为安全社会、智慧社会、幸福社会的建设，感恩诚行，不懈努力！`},
      ],
      itemCulture:[
        {item2:`感恩是公司价值理念的核心，感恩家人，感恩客户，感恩社会，用真心爱心回报社会；诚实前行，提供最具价值的产品及服务。`},
        {item2:`感恩是家人文化的核心内容，为让员工多一点陪伴父母的时间，公司特别设立“父母生日假”，在父母生日当天返回家中与父母团聚，并在父母生日当天公司寄送温馨礼品；每年公司组织优秀员工的父母来到公司（为父母安排体检旅游），并且组织员工进行“爱老敬老”的活动，让孝道文化温暖润一家人；父母是子女成长的导师，润一感恩每位父母对员工的培养与支持，入职满三年的员工父母都会由公司设立的“孝敬父母基金”按月发放“工资”。因为我们的家人文化，虽大家来自五湖四海，但我们亲如一家。`},
        {item2:`2018年“润一蓝丝带公益基金”成立，先后参与了青海西宁贫困小学捐助，驰援遭遇洪涝灾害的山东寿光，援助山东济阳贫困人员衣物等多项公益活动，积极践行社会公益活动回馈社会。2019年润一科技爱心助力章丘灾后防疫，组织人员将防疫消毒物资送往章丘疾控中心和灾区一线，保障灾区人民生命和健康安全。`},      
        {item2:`润一坚持“以人为本”的价值理念，重视每位员工的培养与发展，建有完善的员工职业成长路线。“国学班”“管理沙龙”、“润一书苑”、“月度启动会”为员工提供学习成长的平台，公司定期组织线上与线下的学习，加强员工在管理能力、专业能力、职业素养三方面的提升，让员工与企业共同成长。`},
        {item2:`世界上管理效率最高的组织是军队，最有执行力的组织还是军队，最值得信赖的依旧是军队，润一提倡勇于担当，吃苦奉献，敬业爱岗，自上而下执行力的军人精神，把军队的管理思想、理念引入企业和工作中，保证企业战略与具体执行的高度统一`},
      ],
      itemCulturejpg:[
        {itemC:'../../static/img/video/1.jpg'},
        {itemC:'../../static/img/video/1.jpg'},
        {itemC:'../../static/img/video/1.jpg'},
        {itemC:'../../static/img/video/1.jpg'},
      ],
      obj:{
        first:[
          {name:'企业介绍',id:1},
          {name:'荣誉资质',id:2},
          {name:'科技实力',id:3},
          {name:'企业环境',id:4},
          {name:'企业文化',id:13}
        ],
        second:[
          {name:'国家政策',id:5},
          {name:'行业标准',id:6}
        ],
        third:[
          {name:'医卓通',id:7},
          {name:'易卓通',id:8}
        ],
        fourth:[
          {name:'医卓通',id:9},
          {name:'易卓通',id:10},
          {name:'标准图集',id:11},
        ],
        fifth:[
          {name:'案例视频',id:12},
          {name:'企业视频',id:14},
        ]
      },
      defaluts:[],
      currentLocation:[ //根据传入的suffixName-1来实现面包屑的对应显示
          {name:'企业介绍',id:1},
          {name:'荣誉资质',id:2},
          {name:'科技实力',id:3},
          {name:'企业环境',id:4}, 
          {name:'国家政策',id:5},
          {name:'行业标准',id:6},
          {name:'医卓通',id:7},
          {name:'易卓通',id:8},
          {name:'医卓通',id:9},
          {name:'易卓通',id:10},
          {name:'标准图集',id:11},
          {name:'案例视频',id:12},
          {name:'企业文化',id:13},
          {name:'企业视频',id:14},
      ],
      showImg:false,//图片未点击状态下的默认属性值
      imgSrc: '',//图片初始路径
      detailImgSrc:'',//详情显示的图片路径
      numbers:0,
      Arrow:true,
      display:false,
      detailsTitle:'',  //详情页展示标题
      detailsCooperation:[], //详情页显示内容
      abstract:'', //文档的摘要
      openbooleans:false, //查看文件摘要的判断值
      downloadFileIdArray:[], //封装下载文件id的数组
      isCheckedAll: false, //是否全选的判断值
    }
  },
  //2.映射组件
  components:{
    Test,
    //'big-img':BigImg,
    PhoneTest
  },
  watch: { //监听路由的变化，使在点击左侧导航栏时完成内容上的改变
    '$route'(val,oldval){
     this.suffix=parseInt(this.$route.params.num);
     this.judgeArray(this.suffix);
     this.suffixName=this.suffix;
     if(this.suffix>1 && this.suffix<12){
       this.getItems(this.suffix)
     }
    }
  },
  computed: {
        // 计算属性的 getter
        messages() {
          let num = Number(this.suffix)-1;
          return  this.currentLocation[num].name;
        }
      },
  methods:{
    //================================2019/09/03日写===========================================
    openfile(e){
      this.openbooleans = true;
      this.detailsTitle = this.Result_Set[e.target.dataset.index].file_name;
    },
    checkedOne(id){
      let elementIndex = this.downloadFileIdArray.indexOf(id);
      this.downloadFileIdArray.push(id);
      if (id == this.downloadFileIdArray[elementIndex]) {
        this.downloadFileIdArray.splice(elementIndex,1);
      }
    },
    getDownloadList(){
      for (let index = 0; index < this.downloadFileIdArray.length; index++) {
        let iframe = document.createElement('iframe');
        iframe.src ="http://api-app.raonecloud.com/tools/salestools/api/FileSell/download?file_id="+this.downloadFileIdArray[index];
        iframe.style.display ="none";
        document.body.appendChild(iframe);
        setTimeout(()=>{
          document.body.removeChild(iframe);
        },1000)
        // document.body.removeChild(iframe);
         //  window.open("http://api-app.raonecloud.com/tools/salestools/api/FileSell/download?file_id="+that.downloadFileIdArray[a]);  
        // console.log(num); 
      }
      this.Result_Set.forEach((val,index)=>{
            this.$refs['checked'+index][0].checked = false;
          })
     this.downloadFileIdArray = [];
  },
  checkedAll(){
    this.isCheckedAll = !this.isCheckedAll
          if (this.isCheckedAll) {
              // 全选时
              this.downloadFileIdArray = []
              this.Result_Set.forEach((val,index) =>{
                this.$refs['checked'+index][0].checked = true;
                console.log(this.$refs['checked'+index]);
                this.downloadFileIdArray.push(val.file_id)
              })
          } else {
              this.downloadFileIdArray = []
              this.Result_Set.forEach((val,index)=>{
                this.$refs['checked'+index][0].checked = false;
              })
          }
  },
  //===========================================================================
  //web端大图左翻页方法
  webLeft(){
    if (this.suffix == 3 || this.suffix == 2) {
      this.index = parseInt(this.index)%parseInt(this.all_arr.length-1);
        if (this.index==0) {
            this.index = this.all_arr.length-1;
          }
    } else {
      this.index = parseInt(this.index)%parseInt(this.Result_Set.length-1);
        if (this.index==0) {
            this.index = this.Result_Set.length-1;
          }
    }
    this.index--
    //let indexChange = this.index--
    this.changeImgSrc(this.index);
  },
  //web端大图右翻页方法
  webRight(){
    console.log(this.suffix);
    //console.log(this.index,this.all_arr.length);
    if (this.suffix==3 || this.suffix == 2) {
        this.index = parseInt(this.index)%parseInt(this.all_arr.length-1);
    } else {
        this.index = parseInt(this.index)%parseInt(this.Result_Set.length-1);
    }
    this.index++;
    this.changeImgSrc(this.index);
  },
  //显示隐藏的详情div
  lookDetails(e){
    this.display = true;
    this.detailImgSrc = e.currentTarget.src;
    this.detailsTitle = this.Result_Set[e.target.dataset.index].file_name;
    this.detailsCooperation = this.Result_Set[e.target.dataset.index].file_detail
  },
  //图片放大
  bigImg() {
    // 发送事件
    // this.$emit('clickit')
    //点击改变showImg的属性值，关闭放大显示框
    this.showImg = false;
    this.display = false;
    this.openbooleans = false;
  },
    //点击图片获取图片信息
    clickImg(e) {
            this.showImg = true;
            // 获取当前图片地址
            this.imgSrc = e.currentTarget.src;      
            this.index = e.target.dataset.index;
            // this.newResult_Set = this.Result_Set[0];
            this.detailsTitle = this.all_arr[e.target.dataset.index].file_name;
            //console.log(this.detailsTitle);

          },
    //改变图片引用路径和介绍
    changeImgSrc(indexChange){
          this.showImg = true;
          if (this.suffix == 3 || this.suffix == 2) {          
            this.imgSrc = this.all_arr[indexChange].file_url;  
            this.detailsTitle = this.all_arr[indexChange].file_name;  
          } else {
            this.imgSrc = this.Result_Set[indexChange].file_url;
            
          }
        
        
    },
    //是否显示
    viewImg(){
          this.showImg = false;
    },
    //选择侧边栏循环数组
    judgeArray(suffix){
      if(suffix<5 || this.suffix==13){
          this.defaluts=this.obj.first
      }
      else if(suffix==5 || suffix==6){
          this.defaluts=this.obj.second
      }
      else if(suffix==7 || suffix==8){
          this.defaluts=this.obj.third
      }
      else if(suffix==9 || suffix==10 || suffix==11){
          this.defaluts=this.obj.fourth
      }
      else{
          this.defaluts=this.obj.fifth
      }
    },
  
    //搜索键盘事件
    eventOnload(ev){
      if(ev.keyCode==13){
          this.searchs();  
        }
    },
    searchs(){
        let param = {
        platform_name:this.searchContent
      }
      if(this.searchContent){
        this.$axios.post('/PlatformSell/PlaList',this.$qs.stringify(param)) //Ajax请求，发送请求后跳转路径，沟通后台代码
        .then(response=>{
            if(response.data.status == 200){
              this.object_data = response.data.result
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
    // enlarge(photoId){

    // },
    events(id){  //左边栏点击事件通过ajax实现接口对接         
      this.suffix=id;
      this.suffixName=id;
      if(id>1 && id<12){
        this.getItems(this.suffix);
      }

      //alert(id);
    },
    //接口对接获得结果集合
    getItems(id){ 
      let param = {
        type:id
      }
        this.$axios.post('/FileSell/List',this.$qs.stringify(param))
        .then(response=>{
          if (response.data.status == 200) {
            this.Result_Set = response.data.result;
            //console.log(this.Result_Set);
            if (id == 3) {
              this.newResult_Set = this.Result_Set[0];
              this.newResult_Set2 = this.Result_Set[1];
              this.newResult_Set3 = this.Result_Set[2];
              this.newResult_Set4 = this.Result_Set[3];
              this.all_arr = this.newResult_Set.concat(this.newResult_Set2).concat(this.newResult_Set3).concat(this.newResult_Set4);
            } 
            if (id == 2) {
              this.newResult_Set = this.Result_Set[0];
              this.newResult_Set2 = this.Result_Set[1];
              //console.log(this.newResult_Set2);
              this.all_arr = this.newResult_Set.concat(this.newResult_Set2)
            }
            
          
            //this.newResult_Set = response.data.result;
            
            //console.log(response.data.result);
            //console.log(this.Result_Se);
          } else {
              this.errorTemplate('网络错误，请稍后再试')
          }
        })
    }, 
    //点击下载
    getDownload(id){  
      //   this.$axios.get('/FileSell/download?file_id='+id)
      //   .then(response=>{
      //     if(response.data.status == 200){
              
      //     }else{
      //       this.errorTemplate('网络错误');
      //     }
      //   })
      //console.log(id);

      // <iframe src='https://view.officeapps.live.com/op/view.aspx?src=../static/img/123.docx' />
      // window.open("http://api-app.raonecloud.com/tools/salestools/api/FileSell/download?file_id="+id);
    //  <a target='_black'  href='https://view.officeapps.live.com/op/view.aspx?src=http://mczaiyun.top/ht/123.xlsx'>预览文件</a>
      <iframe src='https://view.officeapps.live.com/op/view.aspx?src=http://mczaiyun.top/ht/123.xlsx' />

    },
    jumpDetail(num){
      this.$router.push({name: 'ObjectDetail', params: { num: num}});
    },
    jumpFeedBack(){
      this.$router.push({name:'FeedBack'})
    },
    updatePassword(){
      this.$router.push({name:'updatePassword'})
    },
    returnTop(){
      
      var dom = document.getElementsByTagName("html")[0];
      var dom1 = document.getElementsByTagName("body")[0];
      if(dom.scrollTop){
          dom.scrollTop =0
      }else{
          dom1.scrollTop =0
      }
    },
    getInfoList(){                                           
      let param = {
        platform_id:'0'
      }
      this.$axios.post('/PlatformSell/List',this.$qs.stringify(param))
      .then(response=>{
            if(response.data.status == 200){
              //this.$nextTick(()=>{
                  this.object_data = response.data.result;
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
      var bodyss = this.$refs.bodys2;
      
      //console.log(document.getElementById("#ttt"));
      //console.log(bodyss);
      if (Publics.getType().android ||Publics.getType().ios ||Publics.getType().iPad) { //判断设备
          this.booleans=false;
          this.Arrow = false;
          var bodys2 = this.$refs.bodys2;
          var banner_touch = this.$refs.bodys3;
          this.$refs.section.style.right="0.2rem";
          
          Publics.touchEvent(bodys2,false,(num)=>{  
                    console.log(this.Result_Set);
                  this.touchEevent(num);
              });

          Publics.touchEvent(banner_touch,true,(num)=>{  //传入dom元素,是否阻止冒泡，回调函数
                      this.judgeType(num);   //监听触屏事件后返回的是数字num   4 向右  1 向上  2 向下  3 向左
                      //alert(222);
              });
                  // console.log(num);
          
        }
    },
    judgeType(num){
      if(num == 3){
        //alert(44)
        this.webRight(); 
      }else if(num == 4){
        this.webLeft(); 
          //this.showRight();
          
      }
    },
    touchEevent(num){
        if(num == 4){
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
      },
    //放大图片后滑动触屏事件，左滑
    showLeft(){ 

      if (this.suffix == 3) {
        this.index = parseInt(this.index)%parseInt(this.all_arr.length-1);
      } else {
        this.index = parseInt(this.index)%parseInt(this.Result_Set.length-1);  
      }        
        this.index++;
        this.changeImgSrc(this.index);

      }
      }, 
    showRight(){ //右滑
      if (this.suffix == 3) {
        this.index = parseInt(this.index)%parseInt(this.all_arr.length-1);
        if (this.index == 0) {
              this.index = this.all_arr.length-1;
            }
      } else {
        this.index = parseInt(this.index)%parseInt(this.Result_Set.length-1);
        if (this.index == 0) {
              this.index = this.Result_Set.length-1;
            }
      }
      this.index--;
      this.changeImgSrc(this.index);
    
  },
created(){                                                 
    //this.getInfoList();
    //this.getAngle();
  },
mounted(){

    this.suffix =this.suffixName=parseInt(this.$route.params.num);  
    //console.log(typeof this.suffixName);
    //console.log(this.currentLocation[this.suffixName-1].name); 
    this.judgeArray(this.suffix);
    this.getAngle();
  //调用赋值方法
  if(this.suffix>1 && this.suffix<12){
    this.getItems(this.suffix);
  }    
  // console.log(this.suffix);
  // console.log(this);
    


     
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
  /* left: 350px; */
}
.float-type2{
  transform: translateY(50%);
  bottom:50%;
  transition: 1s;
  left: 83%;
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
.relativePositioning{
    position:absolute;
    bottom: 0px;
    left:50%;
    transform: translateX(-50%);
  }
  .absolutePositioning{
    position: relative ;
  }
  .pubs:nth-of-type(n+4){
      padding-top:20px;
  }
  .pubs_hight{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .pubs2{
    height: 60px;
    background:transparent;
    color:black;
    left:0;
    
  }
  .el-submenu .el-menu-item{
    min-width:135px;
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

/* 放大功能的样式设置 */
  /*动画*/
.fade-enter-active,
.fade-leave-active {
    transition: all .5s linear;
    opacity: 1;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}


/* bigimg */

.img-view {
    position: fixed;
    height: 100vh;
}

/*遮罩层样式*/
.img-view .img-layer {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    /* background: red; */
    width: 100%;
    height: 100%;
    overflow: hidden;
}

/*不限制图片大小，实现居中*/
.img-view .photo{
    max-width: 100%;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 1000;
}
.icon-left,.icon-right{
  -webkit-transform:translateY(-50%);
  -o-transform:translateY(-50%);
  transform:translateY(-50%);
}
/* 鼠标滑入放大 */
.warp{
  width:33%;
  margin: 0 auto;
  text-align: center;
  overflow:hidden;
}
.warp img{
   transition: all 0.6s; /* 过渡效果 */
}
.warp img:hover{
  transform: scale(1.1)  /* 放大倍数 */
}

/* 详情div的样式 */
.img-views .img-layer {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.details-img{
  width: 50%;
  height: 52%;
  background-color: #fff;
  position:relative;   
  bottom: 0px;
  left:50%;
  top: 5%;
  transform: translateX(-50%);
  border-radius:5px;
  animation-name:antzone;
  animation-duration:.5s;
   /* Safari和谷歌浏览器兼容 */
  -webkit-animation-name:antzone;
  -webkit-animation-duration:.5s;
}
.details-img_phone{
  width: 95%;
  height: 93%;
  background-color: #fff;
  position:relative;   
  bottom: 0px;
  left:50%;
  top: 5%;
  transform: translateX(-50%);
  border-radius:5px;
  animation-name:antzone;
  animation-duration:.5s;
   /* Safari和谷歌浏览器兼容 */
  -webkit-animation-name:antzone;
  -webkit-animation-duration:.5s;
}
.detailsfile{
  width: 35%;
  height: 53%;
  background-color: #fff;
  position:relative; 
  bottom: 0px;
  left:50%;
  top: 5%;
  transform: translateX(-50%);
  border-radius:5px;
  animation-name:antzone;
  animation-duration:.5s; 
   /* Safari和谷歌浏览器兼容 */
  -webkit-animation-name:antzone;
  -webkit-animation-duration:.5s;
}
.relativePositioning2{
  border-radius:5px;
  width:100%;
  height:110%;
  
}
.relativePositioningApp{
  border-radius:5px;
  width:100%;
  height:200px;
}
.relativePositioning3{
  width:50%;
  display: inline-block;
  border-radius:5px
}
.relativePositioning3 h2{
  align-items: center;
  align-self: center;
  align-content: center;
  color: #1165c9;
}
@keyframes antzone{
  from {top:-50px;}
  to {top:5%;}
}
/* Safari和谷歌浏览器兼容 */
@-webkit-keyframes antzone{
  from {top:-50px;}
  to {top:5%;}
}
.left{
  position:absolute;
  top:50%;
  left:20%;
}
.right{
  position:absolute;
  top:49%;
  left:75%;
}
.wenzi{
  position:absolute;
  top:75%;
  left:35%;
  width: 30%;
  height: 30%;
  text-align: center;
}
.wenziPhone{
  position:absolute;
  top:72%;
  left: 15%;
  width: 70%;
  height: 30%;
  text-align: center;
}
video {
  width:100%;
  height: 150px;
}
.p p{
  height: 50px;
}

.absolutePositioning0823{
    position:absolute;
    top:3%;
    bottom: 0px;
    left:42%;
  }
  .min{
    min-height: 600px;
  }
  .Tunderline:hover{
	border-bottom-color: #4c89f2 !important;
	border-bottom-width: 1px;
  }
  .Jianjie{
  height: 45px !important;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .pd{
    padding: 20px;
  }
  .el-icon-close:before{
	  content: icon;
  }
  .el-button{
    width: 25%;
  }
  .buts{
    position: absolute;
    top:90%;
    left:80%;
    width: 15% !important;
  
  }

</style>
