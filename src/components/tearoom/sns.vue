<template>
    <div class="main-container-sns">
            <a 
                v-for="(item, index) in urlLinks"
                :key="index+10"
                :href="item.link" target="_blank"
                >
                <i :class="item.icon"></i>
                {{item.alt}}
            </a>
            <router-link 
                v-for="(item, index) in routerLinks"
                :key="index"
                :to="item.link"
                >
                <i :class="item.icon"></i>
                <span class="router-text">{{item.alt}}</span>
            </router-link>
    </div>
</template>

<script>
export default {
    props: {
        links: {
            type: Array,
            required: true,
            validator: (arr) => {
                return arr.filter(item => item.link && item.icon)
            }
        }
    },
    data() {
        return {
        }
    },
    computed: {
        urlLinks() {
            return this.links.filter(item => !item.isRouter);
        },
        routerLinks() {
            return this.links.filter(item => item.isRouter);
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-container-sns {
        position: absolute;
        bottom: 6px;
        right: 0px;
        display: flex;
        flex-flow: row-reverse nowrap;
        overflow: hidden;
        padding-right: 10px;

        a {
            font-size: 12px;
            display: block;
            color: black;
            transition: all 0.2s;

            &:not(:first-of-type) {
                margin-right: 20px;
            }
            &:hover {
                transition: all 0.2s;
                color: #343538;
            }
        }

        .router-text {
            color: #bd0b14;
        }
    }
</style>