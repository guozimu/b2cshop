<template>
    <div>
        <el-form size="mini" v-model="formSearch" :inline="true">
            <el-form-item>
                <el-input size="mini" v-model="formSearch.account" placeholder="账户"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input size="mini" v-model="formSearch.username" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input size="mini" v-model="formSearch.resource" placeholder="资源"></el-input>
            </el-form-item>
            <el-form-item>
                <el-date-picker
                        size="mini"
                        v-model="formSearch.date"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="创建时间开始"
                        end-placeholder="创建时间结束"
                        value-format="yyyy-MM-dd">
                </el-date-picker>
            </el-form-item>
            <el-button class="btn-position" type="primary" size="mini">查询</el-button>
        </el-form>
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
                        prop="account"
                        label="账户"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="username"
                        label="用户名"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="resource"
                        label="资源"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="url"
                        label="URL"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="creattime"
                        label="创建时间"
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
                    account:'',
                    username:'',
                    resource:'',
                    date:[]
                },
                logs:[
                    {
                        id:225,
                        account:'admin',
                        username:'虢新会',
                        resource:'asdasdsadasd',
                        url:'/admin/resource/sdsdsdsd/aaaaaa',
                        creattime:'2019-02-25'
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
