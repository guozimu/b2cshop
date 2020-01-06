<template>
    <div>
        <el-row>
            <el-col :span="6">
                <el-date-picker
                        class="datesty"
                        size="mini"
                        v-model="creatValue"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="创建时间开始"
                        end-placeholder="创建时间结束"
                        value-format="yyyy-MM-dd">
                </el-date-picker>
            </el-col>
            <el-col :span="2" :offset="16" style="text-align: right">
                <el-button size="mini" type="primary">查询</el-button>
            </el-col>
        </el-row>

        <el-row class="tab-sty">
            <el-table
                    :height="tableHeight"
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
                        label="产品"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="commenstar"
                        label="用户"
                        width="">
                </el-table-column>

                <el-table-column
                        prop="store"
                        label="Store入口"
                        width="">
                </el-table-column>

                <el-table-column
                        prop="auditor"
                        label="创建时间"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="audittime"
                        label="更新时间"
                        width="">
                </el-table-column>

            </el-table>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                creatValue:'',
                tableHeight:0
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
        created() {
            this.tableHeight = document.documentElement.clientHeight - 244;
        },
        components: {}
    };
</script>

<style scoped>
    .tab-sty{
        margin-top: 10px;
    }
    .datesty{
        width: 100%;
    }
</style>
