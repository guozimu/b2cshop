<template>
    <div>
        <el-form size="mini" v-model="formSearch" :inline="true">
            <el-form-item>
                <el-input size="mini" v-model="formSearch.configLabel" placeholder="Config Label"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input size="mini" v-model="formSearch.configKey" placeholder="ConfigKey"></el-input>
            </el-form-item>
            <el-button class="btn-position" type="primary" size="mini">查询</el-button>
        </el-form>
        <el-row>
            <el-button size="mini" type="primary">新增</el-button>
            <el-button size="mini" type="primary">修改</el-button>
            <el-button size="mini" type="danger">批量删除</el-button>
        </el-row>
        <el-row class="table-style">
            <el-table
                    :data="logs.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
                        prop="configLabel"
                        label="配置标签"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="configKey"
                        label="配置Key"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="configValue"
                        label="资源"
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
                        prop="creater"
                        label="创建人"
                        width="">
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
                formSearch:{
                    configLabel:'',
                    configKey:'',
                },
                logs:[
                    {
                        id:225,
                        configLabel:'11',
                        configKey:'11',
                        configValue:'11',
                        creattime:'2019-12-31',
                        updatetime:'2019-02-25',
                        creater:'虢新会'
                    },
                    {
                        id:22,
                        configLabel:'11',
                        configKey:'11',
                        configValue:'11',
                        creattime:'2019-12-31',
                        updatetime:'2019-02-25',
                        creater:'虢新会'
                    }
                ],
                totle:16,
                currentPage:1,
                pageSize:10,
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
        components: {}
    };
</script>

<style scoped>
    .btn-position{
        float: right;
    }
</style>
