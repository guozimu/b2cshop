<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="3">
                <el-select size="mini" v-model="query.statuValue" placeholder="状态">
                    <el-option
                            v-for="item in BasicData.status"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="3">
                <el-input size="mini" v-model="query.title" placeholder="标题"></el-input>
            </el-col>
            <el-col :span="3">
                <el-input size="mini" v-model="query.identifier" placeholder="标识符"></el-input>
            </el-col>
            <el-col :span="6">
                <el-date-picker
                        class="datesty"
                        v-model="query.datevalue"
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
            <el-button size="mini" type="primary">添加</el-button>
            <el-button size="mini" type="primary">修改</el-button>
            <el-button size="mini" type="danger">批量删除</el-button>
        </el-row>
        <el-row ref="table-box" class="table-style">
            <el-table
                    :data="staticdata.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
                        prop="title"
                        label="标题"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="identifier"
                        label="标识符"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="founder"
                        label="创建人"
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
                    :total="staticdata.length">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                query:{
                    statuValue:'',
                    title:'',
                    identifier:'',
                    datevalue:[]
                },
                BasicData:JSON.parse(localStorage.getItem('basicdata')),
                currentPage:1,
                pageSize:10,
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
            ...mapGetters('pagesList',{
                staticdata:'renderstaticlist'
            })
        },
        created(){
            this.tableHeight = document.documentElement.clientHeight - 284;
        },
        components: {},
        mounted() {
            this.$store.dispatch('pagesList/getStaticList')
        }
    };
</script>

<style scoped>
    .btn-box{
        margin-top: 10px;
    }
</style>
