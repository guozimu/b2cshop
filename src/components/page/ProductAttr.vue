<template>
    <div>
        <el-row>
            <el-col :span="4">
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
                    :data="attrdata.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
                        prop="attrtype"
                        label="属性类型"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="attrname"
                        label="属性名称"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="状态"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="datatype"
                        label="数据类型"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="showimg"
                        label="图片显示"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="type"
                        label="类型"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="iswrite"
                        label="必填"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="defaultvalue"
                        label="默认值"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="creattime"
                        label="创建时间"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="updatetime"
                        label="更新时间"
                        width="120">
                </el-table-column>
                <el-table-column
                        label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="editattr" icon="el-icon-edit"></el-button>
                        <el-button size="mini" type="primary" @click="deleteYou" icon="el-icon-delete"></el-button>
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
                    :total="attrdata.length">
            </el-pagination>
        </el-row>
        <el-dialog title="修改" v-if="BasicData" :visible.sync="dialogVisible">
            <el-form :inline="true" size="mini" label-width="100px">
                <div class="edit-box">
                    <el-row>
                        <el-col :span="8">
                            <el-form-item label="属性类型">
                                <el-select size="mini" v-model="attrvalue" placeholder="请选择">
                                    <el-option
                                            v-for="item in BasicData.attrtype"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>

                        <el-col :span="8">
                            <el-form-item label="状态">
                                <el-select size="mini" v-model="statu" placeholder="请选择">
                                    <el-option
                                            v-for="item in BasicData.status"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="属性名称">
                                <el-input size="mini" v-model="attrname" placeholder="">

                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>

                        <el-col :span="8">
                            <el-form-item label="图片显示">
                                <el-select size="mini" v-model="showimg" placeholder="请选择">
                                    <el-option
                                            v-for="item in BasicData.imgisshow"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="必填">
                                <el-select size="mini" v-model="write" placeholder="请选择">
                                    <el-option
                                            v-for="item in BasicData.mustfill"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="默认值">
                                <el-input size="mini"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form-item label="数据类型">
                                <el-select size="mini" v-model="data_type" placeholder="请选择">
                                    <el-option
                                            v-for="item in BasicData.datatype"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <div class="attr-box">
                    <el-row>
                        <el-form-item label="类型">
                            <el-select size="mini" v-model="kind" placeholder="请选择">
                                <el-option
                                        v-for="item in BasicData.type"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-row>
                </div>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import { mapGetters,mapState } from 'vuex'
    export default {
        data() {
            return {
                status:[],
                statevalue:1,
                currentPage:1,
                pageSize:10,
                attrvalue:'',
                attrname:'memory_capacity',
                BasicData:JSON.parse(localStorage.getItem('basicdata')),
                statu:1,
                data_type:1,
                showimg:false,
                write:false,
                dialogVisible:false,
                kind:1
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
            editattr(){
                this.dialogVisible = true
            },
            deleteYou(){
                console.log(this.attrdata);
            }
        },
        computed: {
            ...mapGetters('goodsAttr',{
                attrdata:'rendergoodsattr',
            }),
        },
        components: {},
        mounted() {
            this.$store.dispatch('goodsAttr/getGoodsAttr')
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
        position: relative;
    }
    .edit-box:after{
        content: '编辑信息';
        position: absolute;
        top: -11px;
        font-weight: 600;
        color: #0b8a43;
        left: 10px;
        background: white;
    }
    .attr-box{
        border: 1px dashed #13ce66;
        padding-top: 10px;
        position: relative;
        margin-top: 30px;
    }
    .attr-box:after{
        content: '属性显示';
        position: absolute;
        top: -11px;
        font-weight: 600;
        color: #0b8a43;
        left: 10px;
        background: white;
    }
</style>
