<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    icon: 'el-icon-lx-home',
                    index: 'dashboard',
                    title: '系统首页'
                },
                {
                    icon: 'el-icon-lx-cascades',
                    index: 'table',
                    title: '基础表格'
                },
                {
                    icon: 'el-icon-lx-copy',
                    index: 'tabs',
                    title: 'tab选项卡'
                },
                {
                    icon: 'el-icon-lx-calendar',
                    index: '3',
                    title: '表单相关',
                    subs: [
                        {
                            index: 'form',
                            title: '基本表单'
                        },
                        {
                            index: '3-2',
                            title: '三级菜单',
                            subs: [
                                {
                                    index: 'editor',
                                    title: '富文本编辑器'
                                },
                                {
                                    index: 'markdown',
                                    title: 'markdown编辑器'
                                }
                            ]
                        },
                        {
                            index: 'upload',
                            title: '文件上传'
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-emoji',
                    index: 'icon',
                    title: '自定义图标'
                },
                {
                    icon: 'el-icon-pie-chart',
                    index: 'charts',
                    title: 'schart图表'
                },
                {
                    icon: 'el-icon-rank',
                    index: '6',
                    title: '拖拽组件',
                    subs: [
                        {
                            index: 'drag',
                            title: '拖拽列表'
                        },
                        {
                            index: 'dialog',
                            title: '拖拽弹框'
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-global',
                    index: 'i18n',
                    title: '国际化功能'
                },
                {
                    icon: 'el-icon-lx-warn',
                    index: '7',
                    title: '错误处理',
                    subs: [
                        {
                            index: 'permission',
                            title: '权限测试'
                        },
                        {
                            index: '404',
                            title: '404页面'
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-redpacket_fill',
                    index: '/donate',
                    title: '支持作者'
                },
                {
                    icon: 'el-icon-lx-calendar',
                    index: '9',
                    title: '产品分类',
                    subs: [
                        {
                            index: '9-1',
                            title: '产品管理',
                            subs:[
                                {
                                    index: 'productinfo',
                                    title: '产品信息管理'
                                },
                                {
                                    index: 'productattr',
                                    title: '产品属性管理'
                                },
                                {
                                    index: 'productattrgroup',
                                    title: '产品属性组管理'
                                },
                                {
                                    index: 'productparams',
                                    title: '产品参数管理'
                                },
                                {
                                    index: 'productcommon',
                                    title: '产品评论'
                                },
                                {
                                    index: 'productcollection',
                                    title: '产品收藏'
                                },
                                {
                                    index: 'productbatchupload',
                                    title: '产品批量上传'
                                }
                            ]
                        },
                        {
                            index: '9-2',
                            title: '分类管理',
                            subs: [
                                {
                                    index: 'sortinfo',
                                    title: '分类信息'
                                },
                                {
                                    index: 'sortconfig',
                                    title: '分类排序配置'
                                }
                            ]
                        },
                        {
                            index: 'URl',
                            title: 'URL重写功能'
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-cascades',
                    index: '10',
                    title: '商城管理',
                    subs: [
                        {
                            index: '10-1',
                            title: '订单',
                            subs:[
                                {
                                    index: 'ordermanager',
                                    title: '订单管理'
                                },
                                {
                                    index: 'orderparamsmanager',
                                    title: '订单参数配置'
                                }
                            ]
                        },
                        {
                            index: 'carparamsconfig',
                            title: '购物车参数配置'

                        },
                        {
                            index: 'coupon',
                            title: '优惠券'
                        },
                        {
                            index: '10-2',
                            title: '用户',
                            subs:[
                                {
                                    index: 'accountmanager',
                                    title: '账户管理'
                                }
                            ]
                        },
                        {
                            index: 'newsletter',
                            title: 'NewsLetter'
                        }
                    ]
                }
            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            console.log(msg)
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
