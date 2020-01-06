<template>
    <div ref="tagbox" class="tags" v-if="showTags">
        <span v-if="showArrow" class="span-left"><i class="el-icon-lx-back"></i></span>
        <ul :style="{width:ulwidth + 'px'}">
            <li ref="ulli" class="tags-li" v-for="(item,index) in tagsList" :class="{'active': isActive(item.path)}" :key="index">
                <router-link :to="item.path" class="tags-li-title">
                    {{item.title}}
                </router-link>
                <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
            </li>
        </ul>
        <span v-if="showArrow" class="span-right"><i class="el-icon-lx-right"></i></span>
        <div class="tags-close-box">
            <el-dropdown @command="handleTags">
                <el-button size="mini" type="primary">
                    标签选项<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu size="small" slot="dropdown">
                    <el-dropdown-item command="other">关闭其他</el-dropdown-item>
                    <el-dropdown-item command="all">关闭所有</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    import bus from './bus';
    export default {
        data() {
            return {
                tagsList: [],
                ulwidth:0,
                showArrow:false
            }
        },
        methods: {
            isActive(path) {
                return path === this.$route.fullPath;
            },
            // 关闭单个标签
            closeTags(index) {
                if(this.tagsList[index].path === '/dashboard' && this.tagsList.length === 1){// 如果当前tag只有首页则无法关闭
                    return false;
                }else{
                    const delItem = this.tagsList.splice(index, 1)[0];
                    const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
                    if (item) {
                        delItem.path === this.$route.fullPath && this.$router.push(item.path);
                    }else{
                        this.$router.push('/');
                    }
                }

            },
            // 关闭全部标签
            closeAll(){
                this.tagsList = [];
                this.$router.push('/');
            },
            // 关闭其他标签
            closeOther(){
                const curItem = this.tagsList.filter(item => {
                    return item.path === this.$route.fullPath;
                })
                this.tagsList = curItem;
            },
            // 设置标签
            setTags(route){
                const isExist = this.tagsList.some(item => {
                    return item.path === route.fullPath;
                })
                if(!isExist){
                    // if(this.tagsList.length >= 8){
                    //     this.tagsList.shift();
                    // }
                    this.tagsList.push({
                        title: route.meta.title,
                        path: route.fullPath,
                        name: route.matched[1].components.default.name
                    })
                }
                bus.$emit('tags', this.tagsList);
            },
            handleTags(command){
                command === 'other' ? this.closeOther() : this.closeAll();
            }
        },
        computed: {
            showTags() {
                return this.tagsList.length > 0;
            },

        },
        watch:{
            $route(newValue, oldValue){
                this.setTags(newValue);
            },
            tagsList:function(){
                // console.log(this.$refs.tagbox.offsetWidth)

                this.$nextTick(()=>{
                    this.ulwidth = 0;
                    this.$refs.ulli.forEach(el => {
                        this.ulwidth = this.ulwidth + (el.offsetWidth+20)*2;
                    });
                });
            },
            ulwidth:function(value){
                this.$nextTick(()=>{
                    if(value/2 > this.$refs.tagbox.offsetWidth){
                        this.showArrow = true;
                    }else{
                        this.showArrow = false;
                    }
                })

            }
        },
        created(){
            this.setTags(this.$route);
            // 监听关闭当前页面的标签页
            bus.$on('close_current_tags', () => {
                for (let i = 0, len = this.tagsList.length; i < len; i++) {
                    const item = this.tagsList[i];
                    if(item.path === this.$route.fullPath){
                        if(i < len - 1){
                            this.$router.push(this.tagsList[i+1].path);
                        }else if(i > 0){
                            this.$router.push(this.tagsList[i-1].path);
                        }else{
                            this.$router.push('/');
                        }
                        this.tagsList.splice(i, 1);
                        break;
                    }
                }
            })
        },
        mounted() {

        }
    }

</script>


<style>
    .tags {
        position: relative;
        height: 30px;
        overflow: hidden;
        background: #fff;
        padding-right: 120px;
        box-shadow: 0 5px 10px #ddd;
    }

    .tags ul {
        box-sizing: border-box;
        /*width: 200%;*/
        height: 100%;
        overflow: hidden;
    }

    .tags-li {
        float: left;
        margin: 3px 5px 2px 3px;
        border-radius: 3px;
        font-size: 12px;
        overflow: hidden;
        cursor: pointer;
        height: 23px;
        line-height: 23px;
        border: 1px solid #e9eaec;
        background: #fff;
        padding: 0 5px 0 12px;
        vertical-align: middle;
        color: #666;
        -webkit-transition: all .3s ease-in;
        -moz-transition: all .3s ease-in;
        transition: all .3s ease-in;
    }

    .tags-li:not(.active):hover {
        background: #f8f8f8;
    }

    .tags-li.active {
        color: #fff;
    }

    .tags-li-title {
        float: left;
        max-width: 80px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 5px;
        color: #666;
    }

    .tags-li.active .tags-li-title {
        color: #fff;
    }

    .tags-close-box {
        position: absolute;
        right: 0;
        top: 0;
        box-sizing: border-box;
        padding-top: 1px;
        text-align: center;
        width: 110px;
        height: 30px;
        background: #fff;
        box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);
        z-index: 10;
    }
    .span-left{
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100%;
        line-height: 30px;
        cursor: pointer;
        background: rgba(0,0,0,0.3);
    }
    .span-left i{
        padding: 0px 0px;
        color: #000;
    }
    .span-right{
        position: absolute;
        right: 110px;
        top: 0px;
        height: 100%;
        line-height: 30px;
        cursor: pointer;
        background: rgba(0,0,0,0.3);
    }
</style>
