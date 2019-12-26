<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="3">
                <el-select size="mini" v-model="common">
                    <el-option
                            v-for="item in commons"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="3">
                <el-input size="mini" placeholder="Spu">

                </el-input>
            </el-col>
            <el-col :span="6">
                <el-date-picker
                        class="datesty"
                        size="mini"
                        v-model="commonValue"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="评论开始时间"
                        end-placeholder="评论结束时间"
                        value-format="yyyy-MM-dd">
                </el-date-picker>
            </el-col>
            <el-col :span="2" :offset="10" style="text-align: right">
                <el-button size="mini" type="primary">查询</el-button>
            </el-col>
        </el-row>
        <el-row class="btn-group">
            <el-button size="mini" type="primary">批量审核通过</el-button>
            <el-button size="mini" type="warning">批量审核拒绝</el-button>
            <el-button size="mini" type="primary">编辑</el-button>
            <el-button size="mini" type="danger">批量删除</el-button>
        </el-row>
        <el-row>
            <el-table
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
                        label="ID"
                        width="50">
                </el-table-column>
                <el-table-column
                        prop="proid"
                        label="产品ID"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="commenstar"
                        label="评星"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="commentator"
                        label="评论人"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="标题"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="commentime"
                        label="评论时间"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="store"
                        label="Store入口"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="langcode"
                        label="语言简码"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="状态"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="auditor"
                        label="审核人员"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="audittime"
                        label="审核时间"
                        width="120">
                </el-table-column>
                <el-table-column
                        label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" icon="el-icon-edit"></el-button>
                        <el-button size="mini" type="primary" icon="el-icon-delete"></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                commons:[
                    {
                        label:'评论状态',
                        value:0
                    },
                    {
                        label:'等待审核',
                        value:1
                    },
                    {
                        label:'审核通过',
                        value:2
                    },
                    {
                        label:'审核拒绝',
                        value:3
                    }
                ],
                common:0,
                commonValue:''
            };
        },
        methods: {
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
    .datesty{
        width: 100%;
    }
    .btn-group{
        margin: 10px 0px;
    }
</style>
