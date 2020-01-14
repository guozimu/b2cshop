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
                    icon: 'el-icon-lx-qrcode',
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
                    icon: 'el-icon-lx-shop',
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
                },
                {
                    icon: 'el-icon-lx-settings',
                    index: '11',
                    title: '控制面板',
                    subs:[
                        {
                            index: '11-1',
                            title: '后台用户',
                            subs:[
                                {
                                    index: 'myaccount',
                                    title: '我的账户'
                                },
                                {
                                    index: 'accountmanagement',
                                    title: '账户管理'
                                },
                                {
                                    index: 'privilegemanagement',
                                    title: '权限管理'
                                },
                                {
                                    index: 'resourcemanagement',
                                    title: '资源管理'
                                }
                            ]
                        },
                        {
                            index:'operationlog',
                            title:'操作日志'
                        },
                        {
                            index:'logstatistics',
                            title:'日志统计'
                        },
                        {
                            index:'cachemanagement',
                            title:'缓存管理'
                        },
                        {
                            index:'backgroundconfiguration',
                            title:'后台配置'
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-goods',
                    index: '12',
                    title: '应用中心',
                    subs:[
                        {
                            index: '12-1',
                            title: '应用管理',
                            subs:[
                                {
                                    index: 'applicationmarket',
                                    title: '应用市场'
                                },
                                {
                                    index: 'installedapplication',
                                    title: '已安装应用'
                                }
                            ]
                        },
                        {
                            index:'12-2',
                            title:'开发者中心',
                            subs:[
                                {
                                    index: 'applicationgeneration',
                                    title: '应用Gii生成'
                                }
                            ]
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-global',
                    index: '13',
                    title: 'CMS',
                    subs:[
                        {
                            index: 'pagemanagement',
                            title: 'Page管理'
                        },
                        {
                            index:'staticblock',
                            title:'静态块'
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-global',
                    index: '14',
                    title: '网站配置',
                    subs:[
                        {
                            index: '14-1',
                            title: '基础配置',
                            subs:[
                                {
                                    index:'basicconfig',
                                    title:'基础配置'
                                },
                                {
                                    index:'databaseconfig',
                                    title:'Service数据库配置'
                                },
                                {
                                    index:'searchconfig',
                                    title:'搜索引擎配置'
                                },
                                {
                                    index:'multilanguageconfig',
                                    title:'多语言配置'
                                },
                                {
                                    index:'currencyconfig',
                                    title:'货币配置'
                                },
                                {
                                    index:'emailconfig',
                                    title:'邮件配置'
                                }
                            ]
                        },
                        {
                            index:'14-2',
                            title:'支付参数配置',
                            subs:[
                                {
                                    index:'paypalconfig',
                                    title:'PayPal支付配置'
                                },
                                {
                                    index:'alipayconfig',
                                    title:'支付宝支付配置'
                                },
                                {
                                    index:'wxpayconfig',
                                    title:'微信支付配置'
                                }
                            ]
                        },
                        {
                            index:'14-3',
                            title:'Appfront配置',
                            subs:[
                                {
                                    index:'afbasicconfig',
                                    title:'基础配置'
                                },
                                {
                                    index:'afindexconfig',
                                    title:'首页配置'
                                },
                                {
                                    index:'afcacheconfig',
                                    title:'缓存配置'
                                },
                                {
                                    index:'afstoreconfig',
                                    title:'Store配置'
                                },
                                {
                                    index:'afproductconfig',
                                    title:'分类产品配置'
                                },
                                {
                                    index:'afaccountconfig',
                                    title:'账户配置'
                                },
                                {
                                    index:'afpayconfig',
                                    title:'支付配置'
                                }
                            ]
                        },
                        {
                            index:'14-4',
                            title:'Apphtml5配置',
                            subs:[
                                {
                                    index:'ahbasicconfig',
                                    title:'基础配置'
                                },
                                {
                                    index:'ahindexconfig',
                                    title:'首页配置'
                                },
                                {
                                    index:'ahcacheconfig',
                                    title:'缓存配置'
                                },
                                {
                                    index:'ahstoreconfig',
                                    title:'Store配置'
                                },
                                {
                                    index:'ahproductconfig',
                                    title:'分类产品配置'
                                },
                                {
                                    index:'ahaccountconfig',
                                    title:'账户配置'
                                },
                                {
                                    index:'ahpayconfig',
                                    title:'支付配置'
                                }
                            ]
                        },
                        {
                            index:'14-5',
                            title:'Appserver配置',
                            subs:[
                                {
                                    index:'asbasicconfig',
                                    title:'基础配置'
                                },
                                {
                                    index:'asindexconfig',
                                    title:'首页配置'
                                },
                                {
                                    index:'ascacheconfig',
                                    title:'缓存配置'
                                },
                                {
                                    index:'asstoreconfig',
                                    title:'Store配置'
                                },
                                {
                                    index:'asstorelangconfig',
                                    title:'Store语言配置'
                                },
                                {
                                    index:'asproductconfig',
                                    title:'分类产品配置'
                                },
                                {
                                    index:'asaccountconfig',
                                    title:'账户配置'
                                },
                                {
                                    index:'aspayconfig',
                                    title:'支付配置'
                                }
                            ]
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
