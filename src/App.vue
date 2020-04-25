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
}
</script>
<style lang="scss" scoped>
    .el-main {
        padding: 0px;
        position: relative;
    }
</style>
