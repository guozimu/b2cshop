<template>
    <div>
        <el-row>
            <el-col v-if="BasicData" :span="4">
                <el-select size="mini" v-model="statevalue">
                    <el-option
                            v-for="item in BasicData.status"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="2" :offset="18" style="text-align: right">
                <el-button size="mini" type="primary">查询</el-button>
            </el-col>
        </el-row>
        <el-row class="btn-group">
            <el-button size="mini" type="primary">新增</el-button>
            <el-button size="mini" type="warning">修改</el-button>
            <el-button size="mini" type="danger">删除</el-button>
        </el-row>
        <el-row class="table-sty">
            <el-table
                    :data="attrgroupdata.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                    :height="tableHeight"
                    ref="table"
                    :cell-style="cellStyle"
                    :header-cell-style="rowStyle"
                    border
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
                        prop="attrgroupname"
                        label="属性组名称"
                        width="">
                </el-table-column>

                <el-table-column
                        prop="state"
                        label="状态"
                        width="120">
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
                        label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="editattrgroup" icon="el-icon-edit"></el-button>
                        <el-button size="mini" type="primary" icon="el-icon-delete"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    class="page-sty"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="pageSize"
                    layout="sizes, prev, pager, next"
                    :total="attrgroupdata.length">
            </el-pagination>
        </el-row>
        <el-dialog title="修改" :visible.sync="dialogVisible">
            <el-form :inline="true" size="mini" label-width="100px">
                <div class="edit-box">
                    <el-form-item label="属性组名称">
                        <el-input size="mini"></el-input>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-select size="mini" v-if="BasicData" v-model="statu" placeholder="请选择">
                            <el-option
                                    v-for="item in BasicData.status"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
            </el-form>
            <el-row>
                <el-table
                        :data="attrgroupedit"
                        :height="450"
                        ref="table"
                        border
                        :cell-style="cellStyle"
                        :header-cell-style="rowStyle"
                        style="width: 100%;">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            prop="id"
                            label="Sort Order"
                            width="100">
                        <template slot-scope="scope">
                            <el-input size="mini" v-model="scope.row.id"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="attrname"
                            label="属性名称"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="attrtype"
                            label="属性类型"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="state"
                            label="状态"
                            width="80">
                    </el-table-column>
                    <el-table-column
                            prop="datatype"
                            label="数据类型"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="showimg"
                            label="图片显示"
                            width="80">
                    </el-table-column>
                    <el-table-column
                            prop="type"
                            label="类型"
                            width="80">
                    </el-table-column>
                    <el-table-column
                            prop="iswrite"
                            label="必填"
                            width="60">
                    </el-table-column>
                    <el-table-column
                            prop="defaultvalue"
                            label="默认值"
                            width="80">
                    </el-table-column>

                </el-table>
            </el-row>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                BasicData:JSON.parse(localStorage.getItem('basicdata')),
                dialogVisible:false,
                statevalue:0,
                statu:0,
                totle:5,
                currentPage:1,
                pageSize:10,
                multipleSelection:[],
                tableHeight:0,
                attrgroupedit:[
                    {
                        id:1,
                        attrname:'memory_capacity',
                        attrtype:'普通属性',
                        state:'激活',
                        datatype:'String',
                        showimg:'否',
                        type:'inputString',
                        iswrite:'否',
                        defaultvalue:''
                    },
                    {
                        id:2,
                        attrname:'cpu',
                        attrtype:'Spu属性',
                        state:'激活',
                        datatype:'String',
                        showimg:'否',
                        type:'select',
                        iswrite:'否',
                        defaultvalue:''
                    },
                    {
                        id:3,
                        attrname:'memory_capacity',
                        attrtype:'普通属性',
                        state:'激活',
                        datatype:'String',
                        showimg:'否',
                        type:'inputString',
                        iswrite:'否',
                        defaultvalue:''
                    },
                    {
                        id:4,
                        attrname:'cpu',
                        attrtype:'Spu属性',
                        state:'激活',
                        datatype:'String',
                        showimg:'否',
                        type:'select',
                        iswrite:'否',
                        defaultvalue:''
                    }
                ]
            };
        },
        methods: {
            handleSelectionChange(val) {
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
            },
            editattrgroup(){
                this.dialogVisible = true;
            }
        },
        computed: {
            ...mapGetters('goodsAttrGroup',{
                attrgroupdata:'rendergoodsattrgroup'
            })
        },
        created() {
            this.tableHeight = document.documentElement.clientHeight - 264;
        },
        components: {},
        mounted() {
            this.$store.dispatch('goodsAttrGroup/getGoodsAttrGroup');
        }
    };
</script>

<style scoped>
    .btn-group{
        margin-top: 10px;
    }
    .table-sty{
        background: white;
        margin-top: 10px;
    }
    .page-sty{
        padding-top: 10px;
        padding-bottom: 10px;
        float: right;
    }
    .edit-box{
        border: 1px dashed #13ce66;
        padding-top: 10px;
        margin-bottom: 10px;
    }
</style>
