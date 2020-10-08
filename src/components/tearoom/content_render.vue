<template>
  <div class="single-content">
    <p class="paragraph">
      <img 
        class="article-img" 
        v-if="classChecker === 'image'" 
        :src="line.substr(1)"
      />
      <span v-else-if="classChecker === 'normal'">
        {{line}}
      </span>
      <span v-else-if="classChecker === 'special'" class="special">
        {{line.substr(1)}}
      </span>
      <span v-else-if="classChecker === 'quote'" class="quote">
        {{line.substr(1)}}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "ContentRender",
  props: {
    line: {
      type: String,
      default: 'qweqweqwe',
    },
  },
  computed: {
    classChecker() {
      const identify = this.line[0];
      switch (identify) {
        case '~': {
            return 'quote';
            break;
        }
        case '@': {
            return 'special';
            break;
        }
        case '!': {
            return 'image';
            break;
        }
        default: {
            return 'normal';
            break;
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.paragraph {
        line-height: 20px;
        font-size: 16px;
        margin-bottom: 12px;
        font-family: 'Noto Serif SC', serif;
        color: #303133;
    }
    .quote {
        display: block;
        font-size: 16px;
        color: #909399;
        border-left: 2px solid #909399;
        padding: 10px 10px;
        padding-bottom: 15px;
        font-family: 'Noto Serif SC', serif;
        line-height: 20px;
    }
    .special {
        font-style: italic;
        font-weight: bold;
    }
    .article-img {
        width: 400px;
        margin: auto;
        display: block;
        margin-top: 15px;
        margin-bottom: 15px;
        border: 10px solid white;
    }
    .paragraph::first-letter {
        padding-left: 20px;
    }
</style>