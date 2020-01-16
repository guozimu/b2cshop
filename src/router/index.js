import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: 'i18n.index' }
                },
                // {
                //     path: '/icon',
                //     component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                //     meta: { title: '自定义图标' }
                // },
                // {
                //     path: '/table',
                //     component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
                //     meta: { title: '基础表格' }
                // },
                {
                    path: '/tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: { title: 'i18n.messagetips' }
                },
                // {
                //     path: '/form',
                //     component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
                //     meta: { title: '基本表单' }
                // },
                // {
                //     // 富文本编辑器组件
                //     path: '/editor',
                //     component: () => import(/* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
                //     meta: { title: '富文本编辑器' }
                // },
                // {
                //     // markdown组件
                //     path: '/markdown',
                //     component: () => import(/* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
                //     meta: { title: 'markdown编辑器' }
                // },
                // {
                //     // 图片上传组件
                //     path: '/upload',
                //     component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                //     meta: { title: '文件上传' }
                // },
                // {
                //     // vue-schart组件
                //     path: '/charts',
                //     component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                //     meta: { title: 'schart图表' }
                // },
                // {
                //     // 拖拽列表组件
                //     path: '/drag',
                //     component: () => import(/* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
                //     meta: { title: '拖拽列表' }
                // },
                // {
                //     // 拖拽Dialog组件
                //     path: '/dialog',
                //     component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
                //     meta: { title: '拖拽弹框' }
                // },
                {
                    // 国际化组件
                    path: '/i18n',
                    component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                    meta: { title: '国际化' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '/donate',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/Donate.vue'),
                    meta: { title: '支持作者' }
                },
                {
                    path: '/productinfo',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/ProductInfo.vue'),
                    meta: { title: '产品信息管理' }
                },
                {
                    path: '/productattr',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/ProductAttr.vue'),
                    meta: { title: '产品属性管理' }
                },
                {
                    path: '/productattrgroup',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/ProductAttrGroup.vue'),
                    meta: { title: '产品属性组管理' }
                },
                {
                    path: '/productparams',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/ProductParams.vue'),
                    meta: { title: '产品参数管理' }
                },
                {
                    path: '/productcommon',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/ProductCommon.vue'),
                    meta: { title: '产品评论' }
                },
                {
                    path: '/productcollection',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/ProductCollection.vue'),
                    meta: { title: '产品收藏' }
                },
                {
                    path: '/productbatchupload',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/ProductBatchUpload.vue'),
                    meta: { title: '产品批量上传' }
                },
                {
                    path: '/sortinfo',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/SortInfo.vue'),
                    meta: { title: '分类信息' }
                },
                {
                    path: '/sortconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/SortConfig.vue'),
                    meta: { title: '分类排序配置' }
                },
                {
                    path: '/url',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/Url.vue'),
                    meta: { title: 'URL重写功能' }
                },
                {
                    path: '/ordermanager',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/OrderManager.vue'),
                    meta: { title: '订单管理' }
                },
                {
                    path: '/orderparamsmanager',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/OrderParamsManager.vue'),
                    meta: { title: '订单参数配置' }
                },
                {
                    path: '/carparamsconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/CarParamsConfig.vue'),
                    meta: { title: '购物车参数配置' }
                },
                {
                    path: '/coupon',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/Coupon.vue'),
                    meta: { title: '优惠券' }
                },
                {
                    path: '/accountmanager',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/AccountManager.vue'),
                    meta: { title: '账户管理' }
                },
                {
                    path: '/newsletter',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/NewsLetter.vue'),
                    meta: { title: 'NewsLetter' }
                },
                {
                    path: '/myaccount',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/MyAccount.vue'),
                    meta: { title: '我的账户' }
                },
                {
                    path: '/accountmanagement',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/AccountManagement.vue'),
                    meta: { title: '账户管理' }
                },
                {
                    path: '/privilegemanagement',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/PrivilegeManagement.vue'),
                    meta: { title: '权限管理' }
                },
                {
                    path: '/resourcemanagement',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/ResourceManagement.vue'),
                    meta: { title: '资源管理' }
                },
                {
                    path: '/operationlog',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/OperationLog.vue'),
                    meta: { title: '操作日志' }
                },
                {
                    path: '/logstatistics',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/LogStatistics.vue'),
                    meta: { title: '日志统计' }
                },
                {
                    path: '/cachemanagement',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/CacheManagement.vue'),
                    meta: { title: '缓存管理' }
                },
                {
                    path: '/backgroundconfiguration',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/BackgroundConfiguration.vue'),
                    meta: { title: '后台配置' }
                },
                {
                    path: '/applicationmarket',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/ApplicationCenter/ApplicationMarket.vue'),
                    meta: { title: '应用市场' }
                },
                {
                    path: '/installedapplication',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/ApplicationCenter/InstalledApplication.vue'),
                    meta: { title: '已安装应用' }
                },
                {
                    path: '/applicationgeneration',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/ApplicationCenter/ApplicationGeneration.vue'),
                    meta: { title: '应用Gii生成' }
                },
                {
                    path: '/pagemanagement',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/CMS/PageManagement.vue'),
                    meta: { title: 'page管理' }
                },
                {
                    path: '/staticblock',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/CMS/StaticBlock.vue'),
                    meta: { title: '静态块' }
                },
                {
                    path: '/basicconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/basicConfig/BasicConfig.vue'),
                    meta: { title: '基础配置' }
                },
                {
                    path: '/databaseconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/basicConfig/DatabaseConfig.vue'),
                    meta: { title: 'Service数据库配置' }
                },
                {
                    path: '/searchconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/basicConfig/SearchConfig.vue'),
                    meta: { title: '搜索引擎配置' }
                },
                {
                    path: '/multilanguageconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/basicConfig/MultilanguageConfig.vue'),
                    meta: { title: '多语言配置' }
                },
                {
                    path: '/currencyconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/basicConfig/CurrencyConfig.vue'),
                    meta: { title: '货币配置' }
                },
                {
                    path: '/emailconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/basicConfig/EmailConfig.vue'),
                    meta: { title: '邮件配置' }
                },
                {
                    path: '/paypalconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/payConfig/PaypalConfig.vue'),
                    meta: { title: 'PayPal支付配置' }
                },
                {
                    path: '/alipayconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/payConfig/AlipayConfig.vue'),
                    meta: { title: '支付宝支付配置' }
                },
                {
                    path: '/wxpayconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/payConfig/WXpayConfig.vue'),
                    meta: { title: '微信支付配置' }
                },
                {
                    path: '/afbasicconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/appfrontConfig/AfBasicConfig.vue'),
                    meta: { title: '基础配置' }
                },
                {
                    path: '/afindexconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/appfrontConfig/AfIndexConfig.vue'),
                    meta: { title: '首页配置' }
                },
                {
                    path: '/afcacheconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/appfrontConfig/AfCacheconfig.vue'),
                    meta: { title: '缓存配置' }
                },
                {
                    path: '/afstoreconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/appfrontConfig/AfStoreConfig.vue'),
                    meta: { title: 'Store配置' }
                },
                {
                    path: '/afproductconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/appfrontConfig/AfProductConfig.vue'),
                    meta: { title: '分类产品配置' }
                },
                {
                    path: '/afaccountconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/appfrontConfig/AfAccountConfig.vue'),
                    meta: { title: '账户配置' }
                },
                {
                    path: '/afpayconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/appfrontConfig/AfPayConfig.vue'),
                    meta: { title: '支付配置' }
                },
                {
                    path: '/ahbasicconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/apphtml5Config/AhBasicConfig.vue'),
                    meta: { title: '基础配置' }
                },
                {
                    path: '/ahindexconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/apphtml5Config/AhIndexConfig.vue'),
                    meta: { title: '首页配置' }
                },
                {
                    path: '/ahcacheconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/apphtml5Config/AhCacheconfig.vue'),
                    meta: { title: '缓存配置' }
                },
                {
                    path: '/ahstoreconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/apphtml5Config/AhStoreConfig.vue'),
                    meta: { title: 'Store配置' }
                },
                {
                    path: '/ahproductconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/apphtml5Config/AhProductConfig.vue'),
                    meta: { title: '分类产品配置' }
                },
                {
                    path: '/ahaccountconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/apphtml5Config/AhAccountConfig.vue'),
                    meta: { title: '账户配置' }
                },
                {
                    path: '/ahpayconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/apphtml5Config/AhPayConfig.vue'),
                    meta: { title: '支付配置' }
                },
                {
                    path: '/asbasicconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/appserverConfig/AsBasicConfig.vue'),
                    meta: { title: '基础配置' }
                },
                {
                    path: '/asindexconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/appserverConfig/AsIndexConfig.vue'),
                    meta: { title: '首页配置' }
                },
                {
                    path: '/ascacheconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/appserverConfig/AsCacheconfig.vue'),
                    meta: { title: '缓存配置' }
                },
                {
                    path: '/asstoreconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/appserverConfig/AsStoreConfig.vue'),
                    meta: { title: 'Store配置' }
                },
                {
                    path: '/asstorelangconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/appserverConfig/AsStorelangConfig.vue'),
                    meta: { title: 'Store语言配置' }
                },
                {
                    path: '/asproductconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/appserverConfig/AsProductConfig.vue'),
                    meta: { title: '分类产品配置' }
                },
                {
                    path: '/asaccountconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/appserverConfig/AsAccountConfig.vue'),
                    meta: { title: '账户配置' }
                },
                {
                    path: '/aspayconfig',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/WebsiteConfig/appserverConfig/AsPayConfig.vue'),
                    meta: { title: '支付配置' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
