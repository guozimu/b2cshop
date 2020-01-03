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
                                    v-for="item in BasicData.orderstatus"
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
                    :data="orderList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
                        width="250">
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
                    :total="orderList.length">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                BasicData:JSON.parse(localStorage.getItem('basicdata')),
                orderstatu:'',
                datevalue:'',
                currentPage:1,
                pageSize:10,
                multipleSelection:[],
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
        computed: {
            ...mapGetters('orderList',{
                orderList:'renderOrderList'
            })
        },
        components: {

        },
        mounted() {
            this.$store.dispatch('orderList/getOrderList')
        }
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
