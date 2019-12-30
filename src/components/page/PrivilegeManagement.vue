<template>
    <div>
        <el-form size="mini" v-model="privilegeForm">
            <el-row>
                <el-col :span="3">
                    <el-form-item>
                        <el-input sizi="mini" v-model="privilegeForm.name" placeholder="权限名称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="2" :offset="19" style="text-align: right">
                    <el-button size="mini" type="primary">查询</el-button>
                </el-col>
            </el-row>
        </el-form>
        <el-row>
            <el-button size="mini" type="primary">新增</el-button>
            <el-button size="mini" type="primary">修改</el-button>
            <el-button size="mini" type="danger">批量删除</el-button>
        </el-row>
        <el-row class="table-style">
            <el-table
                    :data="privils.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
                        prop="privilegeid"
                        label="权限ID"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="权限名称"
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
        <el-dialog title="修改" :visible.sync="dialogVisible">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane class="pane-sty" label="基本信息" name="basicinfo">
                    <el-form :inline="true" size="">
                        <el-form-item label="权限名称">
                            <el-input size="mini"></el-input>
                        </el-form-item>
                        <el-form-item label="权限描述">
                            <el-input size="mini"></el-input>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane class="pane-sty" label="权限" name="privile">
                    <div class="checkboxs">
                        <span class="titlespan">控制面板-主界面</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">产品分类-产品管理-产品信息管理</span>
                        <el-checkbox-group size="mini" v-model="pros">
                            <el-checkbox v-for="item in productS" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">产品分类-产品属性</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">产品分类-产品属性组</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">产品分类-产品管理-产品评论管理</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">产品分类-产品管理-产品搜索管理</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">产品分类-产品管理-产品收藏管理</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">产品分类-产品批量上传</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">产品分类-分类管理</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">产品分类-URL重写管理</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">销售-购物车参数配置</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">销售-订单-订单管理</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">销售-优惠券</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">用户管理-帐号管理</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">用户管理-NewsLetter</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">CMS-Page管理</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">CMS-静态块</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">控制面板-用户管理-我的账户</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="checkboxs">
                        <span class="titlespan">控制面板-用户管理-账户管理</span>
                        <el-checkbox-group size="mini" v-model="mainpage">
                            <el-checkbox v-for="item in mainpages" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>

                </el-tab-pane>
            </el-tabs>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    const pages = [{label:'主界面',value:1},{label:'Error Page',value:2},{label:'编辑器上传图片',value:3}];
    const products = [{label:'产品列表',value:4},{label:'产品编辑',value:5},{label:'产品分类信息',value:6},{label:'上传产品图片',value:7},
        {label:'产品删除',value:8},{label:' 查看所有产品（默认只可以查看自己创建的产品）',value:9},{label:'编辑所有产品（默认只可以编辑自己创建的产品）',value:10},{label:' 保存所有产品（默认只可以保存自己创建的产品）',value:11},
        {label:'产品批量添加-Add',value:12},{label:'产品批量添加-保存',value:13},{label:'删除所有产品（默认只可以删除自己创建的产品）',value:14},{label:'配置产品参数-查看',value:15},{label:'配置产品参数-保存',value:16},];
    export default {
        data() {
            return {
                privilegeForm:{
                    name:''
                },
                totle:16,
                currentPage:1,
                pageSize:10,
                multipleSelection:[],
                privils:[
                    {
                        privilegeid:14,
                        privilegename:'admin',
                        status:'超级用户',
                    },
                    {
                        privilegeid:13,
                        privilegename:'ceshi',
                        status:'ceshi',
                    },
                    {
                        privilegeid:1,
                        privilegename:'账户管理员',
                        status:'账户管理员',
                    }
                ],
                dialogVisible:false,
                activeName:'basicinfo',
                mainpage: [1],
                mainpages: pages,
                pros:[],
                productS:products
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
            handleClick() {

            },
            editYou(row){
                this.dialogVisible = true
            }
        },
        computed: {},
        components: {}
    };
</script>

<style scoped>
    .pane-sty{
        max-height: 400px;
        overflow-y: auto;
    }
    .checkboxs{
        padding-bottom: 20px;
    }
    .titlespan{
        display: inline-block;
        margin-bottom: 10px;
        font-weight: 600;
    }
</style>
