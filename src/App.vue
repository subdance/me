<template>
    <el-container>
        <div>
            <aplayer
                ref='aplayer'
                :audio="moePlayer.audio2"
                :volume='moePlayer.volume'
                :fixed="true"
                />
        </div>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
import toTop from "@/components/global/global_backToTop.vue"
export default {
    components: {
        toTop
    },
    data(){
        return {
            moePlayer: {
                volume: 0.5,
                audio2: [
                    {
                    name: 'あの日の夢',
                    artist: '百石元',
                    url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/dream.mp3',
                    cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/7.jpeg',
                    },
                    {
                    name: 'Autumn breeze with you',
                    artist: '百石元',
                    url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/autumn.mp3',
                    cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/1.jpeg',
                    },
                    {
                    name: 'いい夢見てね',
                    artist: '百石元',
                    url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/sweetdream.mp3',
                    cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/6.jpeg',

                    },
                    {
                    name: 'Winter night in a warm room',
                    artist: '百石元',
                    url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/winternight.mp3',
                    cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/5.jpeg',
                    },
                    {
                    name: 'U&I 〜夕日の綺麗なあの丘で〜',
                    artist: '百石元',
                    url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/instui.mp3',
                    cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/3.jpeg',
                    },
                ],
            },
        }
    }, 
    created() {
        // if (window.innerWidth < 1200) {
        //     setTimeout(() => {
        //         this.$message({
        //             type: 'success',
        //             message: '在大屏幕浏览可以获得完整体验',
        //             showClose: true
        //         });
        //     }, 1000)
        // }
    },
}
</script>
<style lang="scss" scoped>
    .el-header {
        background-color: rgba(156, 141, 141, 0.349);
        position: relative;
        z-index: 999;
        padding: 0px;
        backdrop-filter: blur(10px);
    }
    .el-main {
        padding: 0px;
        margin-top: -60px;
        position: relative;

        &.mito {
            margin-top: 0px;
        }
    }
    .el-footer {
        padding: 0px;
    }
</style>
