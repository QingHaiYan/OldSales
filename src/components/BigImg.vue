<template>
<!-- 
    author:YanqingHai
    date:2019/08/07
    des:实现点击图片达到放大查看效果的子组件
    state：弃用
 -->

    <!-- 过渡动画 -->
    <transition name="fade">
        <div ref="bodys" class="img-view" @click="bigImg">
            <!-- 遮罩层 -->
            <div ref="banner_touch" class="img-layer">                 
                <img class="relativePositioning" :src="imgSrc" >
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    data(){
        return{
            icon_show:true,
            imgSrc:''
        }
    },
    props: [
            'imgSrc',
            'Result_Set',
            'index'
        ],
    }
</script>
<style scoped>
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
    width: 100%;
    height: 100%;
    overflow: hidden;
}

/*不限制图片大小，实现居中*/
.img-view  img {
    max-width: 100%;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 1000;
}

.absolutePositioning{
    position:absolute;
    bottom: 0px;
    left:100%;
    right: 20%;
    /* transform: translateX(-50%); */
    /* width:100%; */
  }
  .relativePositioning{    
    position: relative;
  }
  .icon-left,.icon-right{
  -webkit-transform:translateY(-50%);
  -o-transform:translateY(-50%);
  transform:translateY(-50%);
}
</style>