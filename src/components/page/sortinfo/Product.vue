<template>
    <div>
        <el-form size="mini">
            <el-row :gutter="10">
                <el-col :span="3">
                    <el-form-item>
                        <el-input size="mini" placeholder="Name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <el-form-item>
                        <el-input size="mini" placeholder="Spu"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <el-form-item>
                        <el-input size="mini" placeholder="Sku"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-date-picker
                            class="datesty"
                            v-model="datevalue"
                            size="mini"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="更新开始日期"
                            end-placeholder="更新结束日期"
                            value-format="yyyy-MM-dd">
                    </el-date-picker>
                </el-col>
                <el-col :span="8" style="text-align: right">
                    <el-button size="mini" type="primary">全部产品检索</el-button>
                    <el-button size="mini" type="primary">当前分类产品检索</el-button>
                </el-col>
            </el-row>
        </el-form>
        <el-row class="table-style">
            <el-table
                    :data="goodsdata.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
                        prop="img"
                        label="图片"
                        width="100">
                    <template slot-scope="scope">
                　　　　    <img :src="scope.row.img" class="head_pic"/>
                　　 </template>
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="标题"
                        width="250">
                </el-table-column>
                <el-table-column
                        prop="spu"
                        label="SPU"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="sku"
                        label="SKU"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="goodsnum"
                        label="库存数量"
                        width="120">
                </el-table-column>

                <el-table-column
                        prop="creattime"
                        label="创建时间"
                        >
                </el-table-column>
                <el-table-column
                        prop="updatetime"
                        label="更新时间"
                        >
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                totle:8,
                currentPage:1,
                pageSize:10,
                multipleSelection:'',
                datevalue:'',
                goodsdata:[
                    {
                        img:'/img/goods.jpg',
                        title:'拔刀斩',
                        spu:'test',
                        sku:'test',
                        goodsnum:200,
                        creattime:'2019-09-11',
                        updatetime:'2019-11-11',
                    },
                    {
                        img:'/img/goods.jpg',
                        title:'拔刀斩',
                        spu:'test12',
                        sku:'test12',
                        goodsnum:2001,
                        creattime:'2019-09-11',
                        updatetime:'2019-11-11',
                    },
                    {
                        img:'/img/goods.jpg',
                        title:'斩赤红之瞳',
                        spu:'test12',
                        sku:'test12',
                        goodsnum:2001,
                        creattime:'2019-09-11',
                        updatetime:'2019-11-11',
                    },
                    {
                        img:'/img/goods.jpg',
                        title:'斩赤红之瞳',
                        spu:'test12',
                        sku:'test12',
                        goodsnum:2001,
                        creattime:'2019-09-11',
                        updatetime:'2019-11-11',
                    },
                    {
                        img:'/img/goods.jpg',
                        title:'斩赤红之瞳',
                        spu:'test12',
                        sku:'test12',
                        goodsnum:2001,
                        creattime:'2019-09-11',
                        updatetime:'2019-11-11',
                    }
                ]
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
    .head_pic{
        width: 60px;
    }
    .page-style{
        float: right;
        margin-top: 10px;
    }
</style>
