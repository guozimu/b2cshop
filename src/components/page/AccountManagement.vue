<template>
    <div>
        <el-form size="mini" v-model="formSearch" :inline="true">
            <el-form-item>
                <el-select v-model="formSearch.status" placeholder="状态">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-input size="mini" v-model="formSearch.username" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input size="mini" v-model="formSearch.employeenum" placeholder="员工编号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input size="mini" v-model="formSearch.email" placeholder="邮箱"></el-input>
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
        <el-row>
            <el-button size="mini" type="primary">添加</el-button>
            <el-button size="mini" type="primary" @click="edit">修改</el-button>
            <el-button size="mini" type="danger">批量删除</el-button>
        </el-row>
        <el-row class="table-style">
            <el-table
                    :data="accounts.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
                        prop="username"
                        label="用户名"
                        width="100">

                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="employeerno"
                        label="员工编号"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="email"
                        label="邮箱"
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
                        prop="status"
                        label="状态"
                        width="">
                </el-table-column>

                <el-table-column
                        label="操作"
                        width="">
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
                    :total="totle">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options:[
                    {
                        label:'激活',
                        value:1
                    },
                    {
                        label:'关闭',
                        value:0
                    }
                ],
                formSearch:{
                    status:'',
                    username:'',
                    employeenum:'',
                    email:'',
                    date:[]
                },
                totle:16,
                currentPage:1,
                pageSize:10,
                accounts:[
                    {
                        id:1,
                        username:'admin',
                        name:'虢新会',
                        employeerno:'15990990030',
                        email:'937517563@qq.com',
                        creattime:'2019-12-28',
                        updatetime:'2019-12-30',
                        status:'激活'
                    },
                    {
                        id:2,
                        username:'admin',
                        name:'虢新会',
                        employeerno:'1855990030',
                        email:'937517563@qq.com',
                        creattime:'2019-12-28',
                        updatetime:'2019-12-30',
                        status:'激活'
                    }
                ],
                multipleSelection:[]
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
            edit() {
                if(this.multipleSelection.length === 0){
                    this.$message({
                        message: '警告哦，请选择一条数据进行修改',
                        type: 'warning'
                    });
                }else if (this.multipleSelection.length === 1){
                    console.log(this.multipleSelection[0])
                }else{
                    this.$message({
                        message: '警告哦，每次只能选择一条数据进行修改哟',
                        type: 'warning'
                    });
                }
            }
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
