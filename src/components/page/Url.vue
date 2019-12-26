<template>
    <div>
        <el-form>
            <el-row :gutter="10">
                <el-col :span="4">
                    <el-form-item>
                        <el-input size="mini" placeholder="原始URL"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item>
                        <el-input size="mini" placeholder="自定义URL"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="2" :offset="14" style="text-align: right">
                    <el-button size="mini" type="primary">查询</el-button>
                </el-col>
            </el-row>
        </el-form>
        <el-row class="table-style">
            <el-table
                    :data="urldata.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
                        prop="type"
                        label="类型"
                        width="120">

                </el-table-column>
                <el-table-column
                        prop="defineurl"
                        label="自定义URL"
                        width="">

                </el-table-column>
                <el-table-column
                        prop="originurl"
                        label="原始URL"
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
                urldata:[
                    {
                        id:1,
                        type:'system',
                        defineurl:'/47923656',
                        originurl:'/catalog/category/index?id=65'
                    },
                    {
                        id:2,
                        type:'system',
                        defineurl:'/men',
                        originurl:'/catalog/category/index?id=34'
                    },
                    {
                        id:3,
                        type:'system',
                        defineurl:'/raglan-sleeves-letter-printed-crew-neck-sweatshirt-53386451-77774122-48242124',
                        originurl:'/catalog/category/index?_id=5d3131a5bfb7ae655b46600a'
                    },
                    {
                        id:4,
                        type:'system',
                        defineurl:'/47923656',
                        originurl:'/catalog/category/index?id=65'
                    },
                    {
                        id:5,
                        type:'system',
                        defineurl:'/47923656',
                        originurl:'/catalog/category/index?id=65'
                    },
                    {
                        id:6,
                        type:'system',
                        defineurl:'/78483953',
                        originurl:'/catalog/category/index?id=65'
                    }
                ],
                totle:6,
                currentPage:1,
                pageSize:10,
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
    .page-style{
        padding-top: 10px;
        padding-bottom: 10px;
        float: right;
    }
    .table-style{
        background: white;
    }
</style>
