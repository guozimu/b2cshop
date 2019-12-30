<template>
    <div>
        <el-form size="mini" v-model="formSearch" :inline="true">
            <el-form-item>
                <el-select v-model="formSearch.tag" placeholder="Tag">
                    <el-option
                            v-for="item in tags"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-input size="mini" v-model="formSearch.tagname" placeholder="Tag名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input size="mini" v-model="formSearch.resouce" placeholder="资源"></el-input>
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
            <el-button size="mini" type="primary">修改</el-button>
            <el-button size="mini" type="danger">批量删除</el-button>
        </el-row>
        <el-row class="table-style">
            <el-table
                    :data="resources.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
                        prop="tagname"
                        label="Tag名称"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="tag"
                        label="Tag"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="tagorder"
                        label="Tag排序"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="resouce"
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
                        label="操作"
                        width="">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="editYou" icon="el-icon-edit"></el-button>
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
            <div class="edit-box">
                <span class="titlespan">编辑信息</span>
                <el-form size="mini" :model="form" label-width="80px">
                    <el-row :gutter="10">
                        <el-col :span="6">
                            <el-form-item label="Tag名称">
                                <el-input size="mini" v-model="form.tagname" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="资源">
                                <el-input size="mini" v-model="form.resource" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="Tag排序">
                                <el-input size="mini" v-model="form.tagorder" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="Tag">
                                <el-select v-model="form.tag" placeholder="状态">
                                    <el-option
                                            v-for="item in tags"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
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
                tags:[
                    {
                        label:'控制面板-主界面',
                        value:1
                    },
                    {
                        label:'产品分类-产品管理-产品信息管理',
                        value:2
                    },
                    {
                        label:'产品分类-产品属性',
                        value:3
                    },
                    {
                        label:'产品分类-产品属性组',
                        value:4
                    },
                    {
                        label:'产品分类-产品管理-产品评论管理',
                        value:5
                    }
                ],
                formSearch:{
                    tag:'',
                    tagname:'',
                    resouce:'',
                    date:[]
                },
                resources:[
                    {
                        id:22,
                        tagname:'Extension Mutil Disable',
                        tag:'已安装应用',
                        tagorder:2,
                        resource:'/system/extensioninstalled/managerdisable',
                        creattime:'2018-12-12',
                        updatetime:'2019-12-13'
                    }
                ],
                totle:16,
                currentPage:1,
                pageSize:10,
                dialogFormVisible:false,
                form:{
                    tag:'',
                    tagname:'',
                    resouce:'',
                    tagorder:''
                }
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
            editYou(){
                this.dialogFormVisible = true;
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
    .titlespan{
        color: #13ce66;
        padding: 2px 5px;
        position: absolute;
        top: -13px;
        left: 12px;
        background: white;
    }
    .edit-box{
        border: 1px dashed #13ce66;
        padding: 10px;
        position: relative;
    }
</style>
