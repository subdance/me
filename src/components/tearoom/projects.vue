<template>
    <div class="main-container-inner">
        <div 
            v-for="(item, index) in projects"
            :key="index"
            class="single-project-wrap"
            >
            <div class="single-project" @click="toLink(item.link)">
                <div class="thumbnail">
                    <img :src="item.thumbnail" alt="">
                </div>
                <div class="name">
                    {{item.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    name: "K-ON轻音少女主题站",
                    thumbnail: "https://konfan.oss-cn-beijing.aliyuncs.com/assets/3.png",
                    link: "https://yuiyuan.xyz/k-on"
                },
                {
                    name: "PCR角色距离计算器",
                    thumbnail: "https://konfan.oss-cn-beijing.aliyuncs.com/assets/peco.png",
                    link: "https://yuiyuan.xyz/pcrrang-io"
                },
                {
                    name: "Nhentai 收藏夹加载插件",
                    thumbnail: "https://static.nhentai.net/img/logo.650c98bbb08e.svg",
                    link: "https://github.com/subdance/nhentai-page-loader"
                },
            ]
        }
    },
    methods: {
        toLink(url) {
            window.open(url)
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-container-inner {
        max-width: 900px;
        width: 100%;
        margin: auto;
        padding-top: 80px;

        .single-project-wrap {
            margin: auto;
            position: relative;
            height: 80px;
            max-width: 400px;
            width: 80%;
            box-sizing: border-box;
            filter: drop-shadow(1px 3px 2px rgba(50, 50, 0, 0.5));
            cursor: pointer;

            .single-project {
                width: 100%;
                height: 100%;
                clip-path: polygon(93% 0, 100% 37%, 100% 100%, 7% 100%, 0 63%, 0 0);
                background-color: rgb(53, 50, 50);
                padding: 5px 10px;
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: center;
                transition: all 0.5s;
                &:hover {
                    transition: all 0.5s;
                    clip-path: polygon(100% 0, 100% 37%, 100% 100%, 0 100%, 0 66%, 0 0);
                }

                .thumbnail {
                    width: 60px;
                    overflow: hidden;
                    margin-right: 20px;

                    img {
                        width: 60px;
                        display: block;
                    }
                }
                .name {
                    font-size: 16px;
                    color: white;
                    color: #fcee0a;
                    // font-family: 'ZCOOL XiaoWei', serif;
                    font-family: 'ZCOOL QingKe HuangYou', cursive;
                    letter-spacing: 2px;
                }
            }

            &:not(:last-of-type) {
                margin-bottom: 40px;
            }
        }
    }
</style>