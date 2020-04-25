<template>
    <div class="main-container-sns">

        <a 
            v-for="(item, index) in links"
            :key="index"
            :href="item.link" target="_blank"
            >
            <i :class="item.icon"></i>
            {{item.alt}}
        </a>
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
            color: #9a9da3;
            font-style: italic;
            transition: all 0.2s;

            &:not(:first-of-type) {
                margin-right: 20px;
            }
            &:hover {
                transition: all 0.2s;
                color: #343538;
            }
        }
    }
</style>