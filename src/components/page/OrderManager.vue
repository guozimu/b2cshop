<template>
    <div>
        <el-form size="mini">
            <el-row :gutter="10" class="formsty">
                <el-col :span="3">
                    <el-form-item>
                        <el-input size="mini" placeholder="订单号"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <el-form-item>
                        <el-select size="mini" v-model="orderstatu" placeholder="订单状态">
                            <el-option
                                    v-for="item in orderstatus"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <el-form-item>
                        <el-input size="mini" placeholder="订单邮箱"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <div class="block">
                        <el-date-picker
                                class="datesty"
                                v-model="datevalue"
                                size="mini"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="更新开始日期"
                                end-placeholder="更新结束日期"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="2" :offset="8" style="text-align: right">
                    <el-button size="mini" type="primary">查询</el-button>
                </el-col>
            </el-row>
        </el-form>
        <el-row>
            <el-col>
                <el-button size="mini" type="primary">导出Excel</el-button>
            </el-col>
        </el-row>
        <el-row class="table-style">
            <el-table
                    :data="orders.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                    :height="450"
                    ref="table"
                    border
                    :cell-style="cellStyle"
                    :header-cell-style="rowStyle"
                    style="width: 100%;"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="ID"
                        width="50">
                </el-table-column>
                <el-table-column
                        prop="orderno"
                        label="订单号"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="creattime"
                        label="创建时间"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="order_status"
                        label="订单状态"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="orderall"
                        label="订单总数"
                        width="120">

                </el-table-column>
                <el-table-column
                        prop="orderweight"
                        label="订单总重量"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="orderamount"
                        label="订单总金额(基础货币)"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="paytype"
                        label="支付方式"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="deliverytype"
                        label="运货方式"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="deliverycost"
                        label="订单运费(基础货币)"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="country"
                        label="国家"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="email"
                        label="用户邮箱"
                        width="250">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="150">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" icon="el-icon-edit"></el-button>
                        <el-button size="mini" type="primary" icon="el-icon-delete"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    class="page-style"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="pageSize"
                    layout="sizes, prev, pager, next"
                    :total="totle">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                orderstatus:[
                    {
                        label:'等待支付(payment_pending)',
                        value:'payment_pending'
                    },
                    {
                        label:'支付处理中(payment_processing)',
                        value:'payment_processing'
                    },
                    {
                        label:'支付成功(payment_confirmed)',
                        value:'payment_confirmed'
                    },
                    {
                        label:'支付取消(payment_canceled)',
                        value:'payment_canceled'
                    },
                    {
                        label:'欺诈订单(payment_suspected_fraud)',
                        value:'payment_suspected_fraud'
                    },
                    {
                        label:'审核订单(holded)',
                        value:'holded'
                    },
                    {
                        label:'备货中订单(processing)',
                        value:'processing'
                    },
                    {
                        label:'已发货订单(dispatched)',
                        value:'dispatched'
                    },
                    {
                        label:'已退货订单(refunded)',
                        value:'refunded'
                    },
                    {
                        label:'已完成订单(completed)',
                        value:'completed'
                    },


                ],
                orderstatu:'',
                datevalue:'',
                totle:6,
                currentPage:1,
                pageSize:10,
                multipleSelection:[],
                orders:[
                    {
                        id:1,
                        orderno:'22252352365',
                        creattime:'2019-12-26',
                        order_status:'等待支付',
                        orderall:30,
                        orderweight:'30kg',
                        orderamount:40000.00,
                        paytype:'支付宝',
                        deliverytype:'邮政',
                        deliverycost:80.00,
                        country:'中国',
                        email:'937517563@qq.com'
                    },
                    {
                        id:2,
                        orderno:'15452352365',
                        creattime:'2019-12-26',
                        order_status:'等待支付',
                        orderall:30,
                        orderweight:'30kg',
                        orderamount:40000.00,
                        paytype:'支付宝',
                        deliverytype:'邮政',
                        deliverycost:80.00,
                        country:'中国',
                        email:'937517563@qq.com'
                    },
                    {
                        id:3,
                        orderno:'33352352365',
                        creattime:'2019-12-26',
                        order_status:'等待支付',
                        orderall:30,
                        orderweight:'30kg',
                        orderamount:40000.00,
                        paytype:'微信',
                        deliverytype:'邮政',
                        deliverycost:80.00,
                        country:'中国',
                        email:'937517563@qq.com'
                    },
                    {
                        id:4,
                        orderno:'44452352365',
                        creattime:'2019-12-26',
                        order_status:'等待支付',
                        orderall:30,
                        orderweight:'30kg',
                        orderamount:40000.00,
                        paytype:'支付宝',
                        deliverytype:'邮政',
                        deliverycost:80.00,
                        country:'中国',
                        email:'937517563@qq.com'
                    },
                    {
                        id:5,
                        orderno:'55552352365',
                        creattime:'2019-12-26',
                        order_status:'等待支付',
                        orderall:30,
                        orderweight:'30kg',
                        orderamount:40000.00,
                        paytype:'支付宝',
                        deliverytype:'邮政',
                        deliverycost:80.00,
                        country:'中国',
                        email:'937517563@qq.com'
                    },
                    {
                        id:6,
                        orderno:'66652352365',
                        creattime:'2019-12-26',
                        order_status:'等待支付',
                        orderall:30,
                        orderweight:'30kg',
                        orderamount:40000.00,
                        paytype:'微信',
                        deliverytype:'邮政',
                        deliverycost:80.00,
                        country:'中国',
                        email:'937517563@qq.com'
                    }
                ]
            };
        },
        methods: {
            handleSelectionChange(val) {
                console.log(val)
                this.multipleSelection = val;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pageSize = val;
            },
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage;
            },
            cellStyle(){
                return "text-align:center"
            },
            rowStyle(){
                return "text-align:center"
            }
        },
        computed: {},
        components: {}
    };
</script>

<style scoped>
    .datesty{
        width: 100%;
    }
    .formsty >>> .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
        margin-bottom: 10px;
    }
    .page-style{
        padding-top: 10px;
        padding-bottom: 10px;
        float: right;
    }
    .table-style{
        background: white;
        margin-top: 10px;
    }
</style>
