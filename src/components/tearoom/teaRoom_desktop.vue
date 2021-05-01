<template>
    <div class="main-container-inner">
        <div class="main-wrapper">
            <div class="title-wrapper">
                <div
                    v-for="(item, index) in article"
                    :key="index"
                    class="title-holder"
                    :class="{'showing-title': index == showingIndex}"
                    @click="toggleArticle(item.route)"
                    >
                    <p 
                        class="title-text" 
                        >
                        <i v-show="showingIndex == index" class="fa fa-dot-circle-o list-icon"></i>
                        <i v-show="showingIndex !== index" class="fa fa-circle-o list-icon"></i>
                        {{item.title}}
                    </p>
                    <p class="intro-text">{{item.intro}}</p>
                </div>
                <div
                    v-show="!isCoverShow"
                    class="title-holder"
                    @click="toggleArticle()"
                    >
                    <span class="switch-text">
                        合上书
                        <i class="fa fa-book"></i>
                    </span>
                </div>
            </div>
            <div class="content-wrapper">
              <div
                v-show="isCoverShow"
                class="cover-holder"
                @click="toggleArticle('kon-eternal')"
                >
                <div class="cover-text-holder">
                    极东<br />乐<br />园笔记
                </div>
              </div>
              <transition name="el-fade-in">
                <div v-if="isRoutingShowing">
                  <router-view></router-view>
                </div>
              </transition>
            </div>
            <div class="title-wrapper" />
        </div>
    </div>
</template>

<script>
import { articleData } from '@/components/tearoom/article.js'
export default {
    data() {
        return {
            isCoverShow: true,
            visibleController: false,
            statusController: null,
            articleInShow: null,
            article: [],
            isRoutingShowing: true,
        }
    },
    created() {
        this.article = articleData;
        this.isCoverShow = !this.$route.params.name;
    },
    watch: {
      $route(to) {
        this.isCoverShow = !to.params.name;
      }
    },
    computed: {
      showingIndex () {
        const name = this.$route.params.name;
        if (!name) return 'xx';
        return this.article.map(item => item.route).indexOf(name);
      },
    },
    methods: {
        toggleArticle(route) {
          if (!route)  {
            this.isCoverShow = true;
            this.$router.push('/');
            return;
          }
          this.isCoverShow = false;
          this.isRoutingShowing = false;
          this.$router.push(`/post/${route}`)
          .then(() => {
            setTimeout(() => {this.isRoutingShowing = true}), 1000}
          )
          .catch(err => {})
        }
    }
}
</script>

<style lang="css" scoped>
    * {
        box-sizing: border-box;
    }
    p {
        padding: 0px;
        margin: 0px;
        color: #303133;
    }
    .list-icon {
        color: #df000a;
    }
    .main-container-inner {
        position: relative;
        padding-top: 10vh;
    }
    .main-wrapper {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;  
        align-items: flex-start;
    }
    .title-wrapper {
        flex: 0 0 220px;
        position: relative;
    }
    .title-wrapper:first-child {
    }
    .title-wrapper:first-child .title-holder * {
        transition: 0.2s;
        opacity: 0.2;
    }
    .title-wrapper:first-child:hover * {
        opacity: 1;
    }
    .title-wrapper .title-holder {
        margin-bottom: 10px;
        cursor: pointer;
    }
    .switch-text {
        border-bottom: 1px solid #909399;
        transition: 0.2s;
        color: #909399;
        font-size: 12px;
    }
    .title-wrapper:first-child .title-holder:hover .title-text{
        color: #409EFF;
    }
    .title-text {
        font-weight: bold;
        font-size: 12px;
        line-height: 12px;
        cursor: pointer;
        transition: 0.2s;
    }
    .title-text:hover {
        color: #409EFF
    }
    .intro-text {
        font-size: 12px;
        color: #606266;
    }
    .showing-title .title-text {
        opacity: 1 !important;
    }
    .showing-title .intro-text {
        opacity: 1 !important;
    }
    .showing-title i {
        opacity: 1 !important;
    }
    .content-wrapper {
        flex: 0 0 500px;
        position: relative;
        padding: 20px 50px 40px 10px;
        margin: 0px 0px 60px 40px;
    }
    .content-wrapper > .cover-holder {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 600px;
        background-position: center;
        background-size: contain;
        background-image: url('https://konfan.oss-cn-beijing.aliyuncs.com/image/article/cover.jpg');
        box-shadow: 0px 0px 20px black;
        transition: 0.5s;
        cursor: pointer;
    }
    .content-wrapper > .cover-holder:hover {
        transform: scale(1.05) rotate(5deg);
        box-shadow: 6px 6px 10px black;
    }
    .cover-text-holder {
        color: white;
        display: block;
        position: absolute;
        top: 10%;
        right: 10%;
        font-size: 50px;
        font-weight: bold;
        font-family: 'ZCOOL XiaoWei', serif;
        text-orientation: upright;
        writing-mode: vertical-rl;
    }
</style>