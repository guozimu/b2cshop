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
                    title: this.$t('i18n.index')
                },
                // {
                //     icon: 'el-icon-lx-cascades',
                //     index: 'table',
                //     title: '基础表格'
                // },
                {
                    icon: 'el-icon-lx-copy',
                    index: 'tabs',
                    title: this.$t('i18n.messagetips')
                },
                // {
                //     icon: 'el-icon-lx-calendar',
                //     index: '3',
                //     title: '表单相关',
                //     subs: [
                //         {
                //             index: 'form',
                //             title: '基本表单'
                //         },
                //         {
                //             index: '3-2',
                //             title: '三级菜单',
                //             subs: [
                //                 {
                //                     index: 'editor',
                //                     title: '富文本编辑器'
                //                 },
                //                 {
                //                     index: 'markdown',
                //                     title: 'markdown编辑器'
                //                 }
                //             ]
                //         },
                //         {
                //             index: 'upload',
                //             title: '文件上传'
                //         }
                //     ]
                // },
                // {
                //     icon: 'el-icon-lx-emoji',
                //     index: 'icon',
                //     title: '自定义图标'
                // },
                // {
                //     icon: 'el-icon-pie-chart',
                //     index: 'charts',
                //     title: 'schart图表'
                // },
                // {
                //     icon: 'el-icon-rank',
                //     index: '6',
                //     title: '拖拽组件',
                //     subs: [
                //         {
                //             index: 'drag',
                //             title: '拖拽列表'
                //         },
                //         {
                //             index: 'dialog',
                //             title: '拖拽弹框'
                //         }
                //     ]
                // },
                {
                    icon: 'el-icon-lx-global',
                    index: 'i18n',
                    title: '国际化功能'
                },
                // {
                //     icon: 'el-icon-lx-warn',
                //     index: '7',
                //     title: '错误处理',
                //     subs: [
                //         {
                //             index: 'permission',
                //             title: '权限测试'
                //         },
                //         {
                //             index: '404',
                //             title: '404页面'
                //         }
                //     ]
                // },

                {
                    icon: 'el-icon-lx-qrcode',
                    index: '9',
                    title: this.$t('i18n.productkind'),
                    subs: [
                        {
                            index: '9-1',
                            title: this.$t('i18n.promanager'),
                            subs:[
                                {
                                    index: 'productinfo',
                                    title: this.$t('i18n.productinfo')
                                },
                                {
                                    index: 'productattr',
                                    title: this.$t('i18n.productattr')
                                },
                                {
                                    index: 'productattrgroup',
                                    title: this.$t('i18n.productattrgroup')
                                },
                                {
                                    index: 'productparams',
                                    title: this.$t('i18n.productparams')
                                },
                                {
                                    index: 'productcommon',
                                    title: this.$t('i18n.productcommon')
                                },
                                {
                                    index: 'productcollection',
                                    title: this.$t('i18n.productcollection')
                                },
                                {
                                    index: 'productbatchupload',
                                    title: this.$t('i18n.productbatchupload')
                                }
                            ]
                        },
                        {
                            index: '9-2',
                            title: this.$t('i18n.sortkind'),
                            subs: [
                                {
                                    index: 'sortinfo',
                                    title: this.$t('i18n.sortinfo')
                                },
                                {
                                    index: 'sortconfig',
                                    title: this.$t('i18n.sortconfig')
                                }
                            ]
                        },
                        {
                            index: 'URl',
                            title: this.$t('i18n.url')
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-shop',
                    index: '10',
                    title: this.$t('i18n.shop'),
                    subs: [
                        {
                            index: '10-1',
                            title: this.$t('i18n.order'),
                            subs:[
                                {
                                    index: 'ordermanager',
                                    title: this.$t('i18n.ordermanager')
                                },
                                {
                                    index: 'orderparamsmanager',
                                    title: this.$t('i18n.orderparamsmanager')
                                }
                            ]
                        },
                        {
                            index: 'carparamsconfig',
                            title: this.$t('i18n.carparamsconfig')

                        },
                        {
                            index: 'coupon',
                            title: this.$t('i18n.coupon')
                        },
                        {
                            index: '10-2',
                            title: this.$t('i18n.account'),
                            subs:[
                                {
                                    index: 'accountmanager',
                                    title: this.$t('i18n.accountmanagement')
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
                    title: this.$t('i18n.controlpanel'),
                    subs:[
                        {
                            index: '11-1',
                            title: this.$t('i18n.backgrounduser'),
                            subs:[
                                {
                                    index: 'myaccount',
                                    title: this.$t('i18n.myaccount')
                                },
                                {
                                    index: 'accountmanagement',
                                    title: this.$t('i18n.accountmanagement')
                                },
                                {
                                    index: 'privilegemanagement',
                                    title: this.$t('i18n.privilegemanagement')
                                },
                                {
                                    index: 'resourcemanagement',
                                    title: this.$t('i18n.resourcemanagement')
                                }
                            ]
                        },
                        {
                            index:'operationlog',
                            title:this.$t('i18n.operationlog')
                        },
                        {
                            index:'logstatistics',
                            title:this.$t('i18n.logstatistics')
                        },
                        {
                            index:'cachemanagement',
                            title:this.$t('i18n.cachemanagement')
                        },
                        {
                            index:'backgroundconfiguration',
                            title:this.$t('i18n.backgroundconfiguration')
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-goods',
                    index: '12',
                    title: this.$t('i18n.appcenter'),
                    subs:[
                        {
                            index: '12-1',
                            title: this.$t('i18n.appmanagement'),
                            subs:[
                                {
                                    index: 'applicationmarket',
                                    title: this.$t('i18n.applicationmarket')
                                },
                                {
                                    index: 'installedapplication',
                                    title: this.$t('i18n.installedapplication')
                                }
                            ]
                        },
                        {
                            index:'12-2',
                            title:this.$t('i18n.developercenter'),
                            subs:[
                                {
                                    index: 'applicationgeneration',
                                    title: this.$t('i18n.applicationgeneration')
                                }
                            ]
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-global',
                    index: '13',
                    title: this.$t('i18n.cms'),
                    subs:[
                        {
                            index: 'pagemanagement',
                            title: this.$t('i18n.pagemanagement')
                        },
                        {
                            index:'staticblock',
                            title:this.$t('i18n.staticblock')
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-global',
                    index: '14',
                    title: this.$t('i18n.webconfig'),
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
                },
                {
                    icon: 'el-icon-lx-redpacket',
                    index: 'donate',
                    title: this.$t('i18n.supportauthor')
                },
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
