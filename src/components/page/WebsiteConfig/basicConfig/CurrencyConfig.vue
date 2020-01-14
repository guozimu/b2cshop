<template>
    <div>
        <el-row>
            <el-col :span="8">
                <el-table
                        :data="currencys"
                        :cell-style="cellStyle"
                        :header-cell-style="headerStyle"
                        style="width: 100%">
                    <el-table-column
                            label="货币名称"
                            width="">
                        <template slot-scope="scope">
                            <el-input size="mini" v-model="scope.row.currencyname"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="货币简码"
                            width="">
                        <template slot-scope="scope">
                            <el-input size="mini" v-model="scope.row.currencycode"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="汇率">
                        <template slot-scope="scope">
                            <el-input size="mini" v-model="scope.row.exchangerate"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" type="danger" icon="el-icon-delete"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-row class="btn-sty">
                    <el-button size="mini" type="primary">添加货币</el-button>
                    <el-button size="mini" type="primary">保存</el-button>
                    <el-button size="mini" type="danger">取消</el-button>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currencys:[
                    {
                        currencyname:'EUR',
                        currencycode:'€',
                        exchangerate:'0.93'
                    },
                    {
                        currencyname:'USD',
                        currencycode:'$',
                        exchangerate:'1'
                    },
                    {
                        currencyname:'GBP',
                        currencycode:'£',
                        exchangerate:'0.8'
                    },
                    {
                        currencyname:'CNY',
                        currencycode:'￥',
                        exchangerate:'6.3'
                    }
                ]
            };
        },
        methods: {
            cellStyle(){
                return 'text-align:center'
            },
            headerStyle(){
                return 'text-align:center'
            }
        },
        computed: {},
        components: {}
    };
</script>

<style scoped>
    .btn-sty{
        margin-top: 10px;
    }
</style>
