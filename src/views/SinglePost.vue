<template>
  <div>
    <p>
      <span class="para-title">{{title}}</span>
      <span class="para-intro">{{intro}}</span>
    </p>
    <content-render 
      v-for="(item, index) in content" 
      :line="item"
      :key="index">
    </content-render>
  </div>
</template>

<script>
import contentRender from '@/components/tearoom/content_render.vue';
import { articleData } from '@/components/tearoom/article.js'
export default {
  name: "SinglePost",
  components: {
    contentRender
  },
  data() {
    return {
      articleName: '',
      content: '',
      intro: '',
      title: '',
    }
  },
  created() {
    this.articleName = this.$route.params.name;
    this.getArticleByName(this.articleName);
  },
  watch: {
    $route(to) {
      this.articleName = to.params.name;
      this.getArticleByName(this.articleName);
    }
  },
  methods: {
    getArticleByName(name) {
      const snigleArticle = articleData.filter(item => item.route === name)[0];
      this.content = snigleArticle.para;
      this.intro = snigleArticle.intro;
      this.title = snigleArticle.title;
    }
  },
}
</script>

<style lang="scss" scoped>
   .para-title {
        font-size: 30px;
        line-height: 3px;
        padding-left: 20px;
        font-family: 'ZCOOL XiaoWei', serif;
    }
    .para-intro {
        text-align: right;
        display: block;
        font-size: 12px;
        font-style: italic;
        color: #909399;
        margin-bottom: 10px;
    }
</style>