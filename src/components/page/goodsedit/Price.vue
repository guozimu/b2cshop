<template>
    <div>
        <el-form :label-position="labelPosition" class="pricesty">
            <el-form-item label="成本价格" :label-width="formLabelWidth">
                <el-input size="mini" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="销售价格" :label-width="formLabelWidth">
                <el-input size="mini" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="特价时间" :label-width="formLabelWidth">
                <el-date-picker
                        class="pricedate"
                        size="mini"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="新产品开始日期"
                        end-placeholder="新产品结束日期"
                        value-format="yyyy-MM-dd">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="等级(Tier)价格" :label-width="formLabelWidth">
                <el-table
                        size="mini"
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="num"
                            label="数量"
                            width="180">
                        <template slot-scope="scope">
                            <el-input size="mini">
                                <template slot="append">以上</template>
                            </el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="price"
                            label="价格"
                            width="180">
                        <template slot-scope="scope">
                            <el-input size="mini">
                            </el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="180">
                        <template slot-scope="scope">
                            <el-button size="mini" type="primary" @click="deletePrice(scope.row,scope.$index)" icon="el-icon-delete"></el-button>
                        </template>

                    </el-table-column>
                </el-table>
                <el-button size="mini" type="primary" @click="addPrice">增加等级(Tier)价格</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formLabelWidth:'120px',
                labelPosition:'left',
                tableData:[]
            };
        },
        methods: {
            addPrice(){
                let obj = {num:'',price:''};
                this.tableData.push(obj);
            }
        },
        computed: {},
        components: {}
    };
</script>

<style scoped>
    .pricedate{
        width: 80%;
    }
    .pricesty >>> .el-form-item--mini.el-form-item{
        margin-bottom: 10px;
    }
    .pricesty >>>.el-input{
        width: 80%;
    }
</style>
