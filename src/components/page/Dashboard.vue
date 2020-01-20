<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height:252px;">
                    <div class="user-info">
                        <img src="../../assets/img/img.jpg" class="user-avator" alt />
                        <div class="user-info-cont">
                            <div class="user-info-name">{{name}}</div>
                            <div>{{role}}</div>
                        </div>
                    </div>
                    <div class="user-info-list">
                        {{$t('common.lastlogintime')}}：
                        <span>{{ userinfo.last_login_time }}</span>
                    </div>
                    <div class="user-info-list">
                        {{$t('common.lastloginplace')}}：
                        <span>{{ userinfo.last_login_place }}</span>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="16" v-if="userinfo">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-lx-people grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ userinfo.visit_times }}</div>
                                    <div>{{ $t('common.visitnum') }}</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-lx-notice grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ userinfo.system_message }}</div>
                                    <div>{{ $t('common.systemmessage') }}</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-lx-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ userinfo.num }}</div>
                                    <div>{{ $t('common.num') }}</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <ve-histogram :data="chartData"></ve-histogram>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <ve-histogram :data="chartData1"></ve-histogram>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'dashboard',
    data() {
        return {
            name: localStorage.getItem('ms_username'),

            chartData: {
                columns: ['日期', '订单总额', '支付订单总额','比率'],
                rows: [
                    { '日期': '2019-11-19', '订单总额': 1393, '支付订单总额': 1093, '比率': 0.32 },
                    { '日期': '2019-11-23', '订单总额': 3530, '支付订单总额': 3230, '比率': 0.26 },
                    { '日期': '2019-11-27', '订单总额': 2923, '支付订单总额': 2623, '比率': 0.76 },
                    { '日期': '2019-12-01', '订单总额': 1723, '支付订单总额': 1423, '比率': 0.49 },
                    { '日期': '2019-12-05', '订单总额': 3792, '支付订单总额': 3492, '比率': 0.323 },
                    { '日期': '2019-12-09', '订单总额': 4593, '支付订单总额': 4293, '比率': 0.78 }
                ]
            },
            chartData1: {
                columns: ['日期', '订单总数', '支付订单总数','比率'],
                rows: [
                    { '日期': '2019-11-19', '订单总数': 1200, '支付订单总数': 1093, '比率': 0.32 },
                    { '日期': '2019-11-23', '订单总数': 5000, '支付订单总数': 3230, '比率': 0.26 },
                    { '日期': '2019-11-27', '订单总数': 3000, '支付订单总数': 2623, '比率': 0.76 },
                    { '日期': '2019-12-01', '订单总数': 1723, '支付订单总数': 1423, '比率': 0.49 },
                    { '日期': '2019-12-05', '订单总数': 3792, '支付订单总数': 3492, '比率': 0.323 },
                    { '日期': '2019-12-09', '订单总数': 4593, '支付订单总数': 4293, '比率': 0.78 }
                ]
            }
        };
    },
    components: {

    },
    computed: {
        role() {
            return this.name === 'admin' ? this.$t('common.superadmin') : this.$t('common.ordinaryusers');
        },
        ...mapGetters('userInfo',{
            userinfo:'renderuserinfo'
        })
    },
    created() {

    },
    methods: {

    },
    mounted() {
        this.$store.dispatch('userInfo/getUserInfo');
    }
};
</script>


<style scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>
