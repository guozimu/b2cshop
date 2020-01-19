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
                // {
                //     icon: 'el-icon-lx-global',
                //     index: 'i18n',
                //     title: '国际化功能'
                // },
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
                            title: this.$t('i18n.basicconfig'),
                            subs:[
                                {
                                    index:'basicconfig',
                                    title:this.$t('i18n.basicconfig')
                                },
                                {
                                    index:'databaseconfig',
                                    title:this.$t('i18n.databaseconfig')
                                },
                                {
                                    index:'searchconfig',
                                    title:this.$t('i18n.searchconfig')
                                },
                                {
                                    index:'multilanguageconfig',
                                    title:this.$t('i18n.multilanguageconfig')
                                },
                                {
                                    index:'currencyconfig',
                                    title:this.$t('i18n.currencyconfig')
                                },
                                {
                                    index:'emailconfig',
                                    title:this.$t('i18n.emailconfig')
                                }
                            ]
                        },
                        {
                            index:'14-2',
                            title:this.$t('i18n.payconfig'),
                            subs:[
                                {
                                    index:'paypalconfig',
                                    title:this.$t('i18n.paypalconfig')
                                },
                                {
                                    index:'alipayconfig',
                                    title:this.$t('i18n.alipayconfig')
                                },
                                {
                                    index:'wxpayconfig',
                                    title:this.$t('i18n.wxpayconfig')
                                }
                            ]
                        },
                        {
                            index:'14-3',
                            title:this.$t('i18n.appfront'),
                            subs:[
                                {
                                    index:'afbasicconfig',
                                    title:this.$t('i18n.basicconfig')
                                },
                                {
                                    index:'afindexconfig',
                                    title:this.$t('i18n.indexconfig')
                                },
                                {
                                    index:'afcacheconfig',
                                    title:this.$t('i18n.cacheconfig')
                                },
                                {
                                    index:'afstoreconfig',
                                    title:this.$t('i18n.storeconfig')
                                },
                                {
                                    index:'afproductconfig',
                                    title:this.$t('i18n.prokindconfig')
                                },
                                {
                                    index:'afaccountconfig',
                                    title:this.$t('i18n.accountconfig')
                                },
                                {
                                    index:'afpayconfig',
                                    title:this.$t('i18n.payconfig')
                                }
                            ]
                        },
                        {
                            index:'14-4',
                            title:this.$t('i18n.apphtml5'),
                            subs:[
                                {
                                    index:'ahbasicconfig',
                                    title:this.$t('i18n.basicconfig')
                                },
                                {
                                    index:'ahindexconfig',
                                    title:this.$t('i18n.indexconfig')
                                },
                                {
                                    index:'ahcacheconfig',
                                    title:this.$t('i18n.cacheconfig')
                                },
                                {
                                    index:'ahstoreconfig',
                                    title:this.$t('i18n.storeconfig')
                                },
                                {
                                    index:'ahproductconfig',
                                    title:this.$t('i18n.prokindconfig')
                                },
                                {
                                    index:'ahaccountconfig',
                                    title:this.$t('i18n.accountconfig')
                                },
                                {
                                    index:'ahpayconfig',
                                    title:this.$t('i18n.payconfig')
                                }
                            ]
                        },
                        {
                            index:'14-5',
                            title:this.$t('i18n.appserver'),
                            subs:[
                                {
                                    index:'asbasicconfig',
                                    title:this.$t('i18n.basicconfig')
                                },
                                {
                                    index:'asindexconfig',
                                    title:this.$t('i18n.indexconfig')
                                },
                                {
                                    index:'ascacheconfig',
                                    title:this.$t('i18n.cacheconfig')
                                },
                                {
                                    index:'asstoreconfig',
                                    title:this.$t('i18n.storeconfig')
                                },
                                {
                                    index:'asstorelangconfig',
                                    title:this.$t('i18n.storelang')
                                },
                                {
                                    index:'asproductconfig',
                                    title:this.$t('i18n.prokindconfig')
                                },
                                {
                                    index:'asaccountconfig',
                                    title:this.$t('i18n.accountconfig')
                                },
                                {
                                    index:'aspayconfig',
                                    title:this.$t('i18n.payconfig')
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
