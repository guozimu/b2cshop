<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="3">
                <el-input size="mini" placeholder="优惠券码"></el-input>
            </el-col>
            <el-col :span="6">
                <el-date-picker
                        class="datesty"
                        v-model="datevalue"
                        size="mini"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="创建开始时间"
                        end-placeholder="创建结束时间"
                        value-format="yyyy-MM-dd">
                </el-date-picker>
            </el-col>
            <el-col :span="2" :offset="13" style="text-align: right">
                <el-button size="mini" type="primary">查询</el-button>
            </el-col>
        </el-row>
        <el-row class="btn-box">
            <el-button size="mini" type="primary">添加</el-button>
            <el-button size="mini" type="primary">修改</el-button>
            <el-button size="mini" type="danger">删除</el-button>
        </el-row>
        <el-row class="table-style">
            <el-table
                    :data="coupondata.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                    :height="650"
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
                        prop="couponnum"
                        label="优惠券码"
                        width="200">

                </el-table-column>
                <el-table-column
                        prop="maxtimes"
                        label="每个用户的最大使用次数"
                        width="250">
                </el-table-column>
                <el-table-column
                        prop="usetimes"
                        label="使用次数"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="type"
                        label="类型"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="condition"
                        label="条件"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="discount"
                        label="折扣"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="outtime"
                        label="过期时间"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="founder"
                        label="创建人"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="creattime"
                        label="创建时间"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="updatetime"
                        label="更新时间"
                        width="120">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="140">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="editcoupon" icon="el-icon-edit"></el-button>
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
        <el-dialog title="修改" :visible.sync="dialogFormVisible">
            <el-form :inline="true" :model="form" label-width="120px" class="form-sty">
                <el-form-item label="优惠券码">
                    <el-input size="mini" v-model="form.couponnum" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="最大使用次数">
                    <el-input size="mini" v-model="form.maxtimes" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="类型">
                    <el-select size="mini" v-model="form.type" placeholder="请选择">
                        <el-option
                                v-for="item in types"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="金额>?才可使用">
                    <el-input size="mini" v-model="form.condition" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="折扣">
                    <el-input size="mini" v-model="form.discount" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="过期时间">
                    <el-date-picker
                            size="mini"
                            v-model="form.outtime"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialogFormVisible:false,
                datevalue:'',
                totle:16,
                currentPage:1,
                pageSize:10,
                coupondata:[
                    {
                        id:1,
                        couponnum:'ASDWSXFSGSG',
                        maxtimes:2,
                        usetimes:200,
                        type:'百分比',
                        condition:11,
                        discount:8,
                        outtime:'2019-12-27',
                        founder:'admin',
                        creattime:'2018-12-27',
                        updatetime:'2019-6-27'
                    }
                ],
                form:{
                    couponnum:'ASDWSXFSGSG',
                    maxtimes:2,
                    type:1,
                    condition:11,
                    discount:8,
                    outtime:'2019-12-27'
                },
                types:[
                    {
                        label:'百分比',
                        value:1
                    },
                    {
                        label:'直接减',
                        value:2
                    }
                ]
            };
        },
        methods: {
            cellStyle(){
                return "text-align:center"
            },
            rowStyle(){
                return "text-align:center"
            },
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
            editcoupon(){
                this.dialogFormVisible = true;
            }
        },
        computed: {},
        components: {}
    };
</script>

<style scoped>
    .btn-box{
        margin: 10px 0px;
    }
    .datesty{
        width: 100%;
    }
    .page-style{
        padding-top: 10px;
        padding-bottom: 10px;
        float: right;
    }
    .table-style{
        background: white;
    }
    .form-sty >>> .el-form-item__label{
        font-size: 13px;
    }
    .form-sty >>> .el-form-item__content{
        width: 150px;
    }
    .form-sty >>> .el-date-editor.el-input, .el-date-editor.el-input__inner{
        width: 100%;
    }
</style>
