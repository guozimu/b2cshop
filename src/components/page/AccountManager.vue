<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="3">
                <el-select size="mini" v-model="statu" placeholder="状态">
                    <el-option
                            v-for="item in status"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="3">
                <el-input size="mini" placeholder="邮箱"></el-input>
            </el-col>
            <el-col :span="3">
                <el-input size="mini" placeholder="密码重置Token"></el-input>
            </el-col>
            <el-col :span="6">
                <el-date-picker
                        class="datesty"
                        v-model="datevalue"
                        size="mini"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="创建开始日期"
                        end-placeholder="创建结束日期"
                        value-format="yyyy-MM-dd">
                </el-date-picker>
            </el-col>
            <el-col :span="2" :offset="7" style="text-align: right">
                <el-button size="mini" type="primary">查询</el-button>
            </el-col>
        </el-row>
        <el-row class="btn-box">
            <el-button size="mini" type="primary">新增</el-button>
            <el-button size="mini" type="primary">修改</el-button>
            <el-button size="mini" type="danger">批量删除</el-button>
        </el-row>
        <el-row class="table-style">
            <el-table
                    :height="tableHeight"
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
                        prop="name"
                        label="用户-名"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="surname"
                        label="用户-姓"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="email"
                        label="Email"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="collections"
                        label="收藏产品数"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="状态"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="creattime"
                        label="创建时间"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="updatetime"
                        label="更新时间"
                        width="120">
                </el-table-column>
                <el-table-column
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
                status:[
                    {
                        label:'激活',
                        value:1
                    },
                    {
                        label:'关闭',
                        value:0
                    }
                ],
                statu:'',
                datevalue:'',
                totle:16,
                currentPage:1,
                pageSize:10,
                tableHeight:0
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
        },
        computed: {},
        components: {},
        created() {
            this.tableHeight = document.documentElement.clientHeight - 264;
        },
    };
</script>

<style scoped>
    .datesty{
        width: 100%;
    }
    .btn-box{
        margin: 10px 0px;
    }
    .table-style{
        background: white;
    }
    .page-style{
        float: right;
        margin: 10px 0px;
    }
</style>
