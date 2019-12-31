<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    import './mock/mokeServer'
    import {mapActions} from 'vuex'
    export default {
        computed: {

        },
        methods:{
            ...mapActions(['getUserInfo'])
        },
        mounted() {
            this.getUserInfo();
        }
    }
</script>
<style>
    @import "./assets/css/main.css";
    /*@import "./assets/css/color-dark.css";     !*深色主题*!*/
    @import "./assets/css/theme-green/color-green.css";
</style>
