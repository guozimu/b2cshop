<template>
    <div>
        <el-row>
            <el-col :span="2">
                <el-select size="mini" v-model="statevalue" placeholder="状态">
                    <el-option
                            v-for="item in BasicData.status"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="2" :offset="20" style="text-align: right;">
                <el-button size="mini" type="primary">查询</el-button>
            </el-col>
        </el-row>
        <el-row class="btn-sty">
            <el-button size="mini" type="primary">新增</el-button>
            <el-button size="mini" type="primary">修改</el-button>
            <el-button size="mini" type="danger">批量删除</el-button>
        </el-row>
        <el-row class="table-style">
            <el-table
                    :data="goodsdata.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                    ref="table"
                    :height="tableHeight"
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
                        prop="key"
                        label="Key"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="language"
                        label="语言"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="currency"
                        label="货币"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="状态"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="https"
                        label="HTTPS"
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
                        width="">
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="120">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="editYou(scope.row)" icon="el-icon-edit"></el-button>
                        <el-button size="mini" type="primary" @click="deleteYou(scope.row,scope.$index)" icon="el-icon-delete"></el-button>
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
                    :total="goodsdata.length">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                BasicData:JSON.parse(localStorage.getItem('basicdata')),
                statevalue:'',
                currentPage:1,
                pageSize:10,
                goodsdata:[]
            };
        },
        methods: {
            cellStyle(){
                return "text-align:center"
            },
            rowStyle(){
                return "text-align:center"
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
        created(){
            this.tableHeight = document.documentElement.clientHeight - 284;
        },
        components: {}
    };
</script>

<style scoped>
    .table-style{
        background: white;
        height: 100%;
    }
    .btn-sty{
        margin-top: 10px;
    }
</style>
