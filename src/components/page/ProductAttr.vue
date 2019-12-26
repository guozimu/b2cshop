<template>
    <div>
        <el-row>
            <el-col :span="4">
                <el-select size="mini" v-model="statevalue">
                    <el-option
                            v-for="item in status"
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
                    :total="totle">
            </el-pagination>
        </el-row>
        <el-dialog title="修改" :visible.sync="dialogVisible">
            <el-form :inline="true" size="mini" label-width="100px">
                <div class="edit-box">
                    <el-row>
                        <el-col :span="8">
                            <el-form-item label="属性类型">
                                <el-select size="mini" v-model="attrvalue" placeholder="请选择">
                                    <el-option
                                            v-for="item in attrs"
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
                                            v-for="item in status"
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
                                            v-for="item in showimgs"
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
                                            v-for="item in writes"
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
                                <el-select size="mini" v-model="datatype" placeholder="请选择">
                                    <el-option
                                            v-for="item in datatypes"
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
                                        v-for="item in kinds"
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
    export default {
        data() {
            return {
                status:[
                    {
                        label:'状态',
                        value:0
                    },
                    {
                        label:'激活',
                        value:1
                    },
                    {
                        label:'关闭',
                        value:2
                    }
                ],
                statevalue:0,
                totle:5,
                currentPage:1,
                pageSize:10,
                attrdata:[
                    {
                        id:1,
                        attrtype:'普通属性',
                        attrname:'memory_capacity',
                        state:'激活',
                        datatype:'String',
                        showimg:'否',
                        type:'inputString',
                        iswrite:'否',
                        defaultvalue:'',
                        creattime:'2019-12-23 9:38',
                        updatetime:'2019-12-23 9:38'
                    },
                    {
                        id:2,
                        attrtype:'普通属性',
                        attrname:'memory_capacity',
                        state:'激活',
                        datatype:'String',
                        showimg:'否',
                        type:'inputString',
                        iswrite:'否',
                        defaultvalue:'',
                        creattime:'2019-12-23 9:38',
                        updatetime:'2019-12-23 9:38'
                    },
                    {
                        id:3,
                        attrtype:'普通属性',
                        attrname:'memory_capacity',
                        state:'激活',
                        datatype:'String',
                        showimg:'否',
                        type:'inputString',
                        iswrite:'否',
                        defaultvalue:'',
                        creattime:'2019-12-23 9:38',
                        updatetime:'2019-12-23 9:38'
                    },
                    {
                        id:4,
                        attrtype:'普通属性',
                        attrname:'memory_capacity',
                        state:'激活',
                        datatype:'String',
                        showimg:'否',
                        type:'inputString',
                        iswrite:'否',
                        defaultvalue:'',
                        creattime:'2019-12-23 9:38',
                        updatetime:'2019-12-23 9:38'
                    },
                    {
                        id:5,
                        attrtype:'普通属性',
                        attrname:'memory_capacity',
                        state:'激活',
                        datatype:'String',
                        showimg:'否',
                        type:'inputString',
                        iswrite:'否',
                        defaultvalue:'',
                        creattime:'2019-12-23 9:38',
                        updatetime:'2019-12-23 9:38'
                    }
                ],
                attrs:[
                    {
                        label:'属性类型',
                        value:0
                    },
                    {
                        label:'Spu属性',
                        value:1
                    },
                    {
                        label:'普通属性',
                        value:2
                    }
                ],
                attrvalue:2,
                attrname:'memory_capacity',
                status:[
                    {
                        label:'状态',
                        value:0
                    },
                    {
                        label:'激活',
                        value:1
                    },
                    {
                        label:'关闭',
                        value:2
                    }
                ],
                statu:1,
                datatypes:[
                    {
                        label:'数据类型',
                        value:0
                    },
                    {
                        label:'String',
                        value:1
                    }
                ],
                datatype:1,
                showimgs:[
                    {
                        label:'是',
                        value:true
                    },
                    {
                        label:'否',
                        value:false
                    }
                ],
                showimg:false,
                writes:[
                    {
                        label:'是',
                        value:true
                    },
                    {
                        label:'否',
                        value:false
                    }
                ],
                write:false,
                dialogVisible:false,
                kinds:[
                    {
                        label:'inputString',
                        value:1
                    },
                    {
                        label:'inputString-Lang',
                        value:2
                    },
                    {
                        label:'inputEmail',
                        value:3
                    },
                    {
                        label:'inputDate',
                        value:4
                    },
                    {
                        label:'editSelect',
                        value:5
                    },
                    {
                        label:'select',
                        value:6
                    }
                ],
                kind:1
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
            editattr(){
                // @click="dialogVisible = true"
                this.dialogVisible = true
            }
        },
        computed: {},
        components: {}
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
