<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="3">
                <el-select size="mini" v-model="statevalue" placeholder="状态">
                    <el-option
                            v-for="item in BasicData.status"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="3">
                <el-select size="mini" v-model="applicationTypevalue" placeholder="应用类型">
                    <el-option
                            v-for="item in BasicData.applicationType"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
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
            <el-col :span="2" :offset="10" style="text-align: right">
                <el-button size="mini" type="primary">查询</el-button>
            </el-col>
        </el-row>
        <el-row class="btn-box">
            <el-button size="mini" type="primary">应用激活</el-button>
            <el-button size="mini" type="danger">应用关闭</el-button>
        </el-row>
        <el-row ref="table-box" class="table-style">
            <el-table
                    :data="applications.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                    ref="table"
                    :height="tableHeight"
                    border
                    :cell-style="cellStyle"
                    :header-cell-style="rowStyle"
                    style="width: 100%;"
                    class="tabelHeight"
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
                        prop="appname"
                        label="应用名称"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="apppackname"
                        label="应用包名"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="appfoldername"
                        label="应用文件夹名"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="apptype"
                        label="应用类型"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="状态   "
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="installstatus"
                        label="安装状态"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="creattime"
                        label="创建时间"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="priority"
                        label="Priority"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="updatetime"
                        label="更新时间"
                        width="">
                </el-table-column>
                <el-table-column
                        label="操作"
                        fixed="right"
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
                    :total="applications.length">
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
                statevalue:'',
                applicationTypevalue:'',
                datevalue:'',
                pageSize:10,
                currentPage:1,
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
        },
        computed: {
            ...mapGetters('appList',{
                applications:'renderapplist'
            })
        },
        created(){
            this.tableHeight = document.documentElement.clientHeight - 284;
        },
        components: {},
        mounted() {
            this.$store.dispatch('appList/getAppList');
        }
    };
</script>

<style scoped>
    .datesty{
        width: 100%;
    }
    .btn-box{
        margin-top: 10px;
    }
</style>
