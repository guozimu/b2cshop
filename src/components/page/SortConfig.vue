<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="3">商城分类排序：</el-col>
            <el-col :span="12">
                <el-table
                        :data="sortData"
                        ref="table"
                        border
                        :cell-style="cellStyle"
                        :header-cell-style="rowStyle"
                        style="width: 100%;">
                    <el-table-column
                            prop="key"
                            label="分类排序字段Key"
                            width="">
                        <template slot-scope="scope">
                            <el-input size="mini" v-model="scope.row.key"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="label"
                            label="分类排序字段Label"
                            width="">
                        <template slot-scope="scope">
                            <el-input size="mini" v-model="scope.row.label"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="oricalkey"
                            label="分类排序-数据库字段"
                            width="">
                        <template slot-scope="scope">
                            <el-input size="mini" v-model="scope.row.oricalkey"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="sort"
                            label="分类排序方式"
                            width="">
                        <template slot-scope="scope">
                            <el-select size="mini" v-model="scope.row.sort" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" type="danger" icon="el-icon-delete"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-row class="btn-group">
            <el-col :span="3"></el-col>
            <el-col :span="3" :offset="3">
                <el-button size="mini" type="primary" @click="addSort">添加分类排序</el-button>
            </el-col>
            <el-col :span="9" style="text-align: right">
                <el-button size="mini" type="primary">保存</el-button>
                <el-button size="mini" type="danger">取消</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options:[
                    {
                        label:'desc',
                        value:'desc'
                    },
                    {
                        label:'asc',
                        value:'asc'
                    }
                ],
                sortData:[
                    {
                        key:'hot',
                        label:'Hot',
                        oricalkey:'score',
                        sort:'desc'
                    },
                    {
                        key:'review_count',
                        label:'Review',
                        oricalkey:'review_count',
                        sort:'desc'
                    },
                    {
                        key:'favorite_count',
                        label:'Favorite',
                        oricalkey:'favorite_count',
                        sort:'desc'
                    },
                    {
                        key:'new',
                        label:'New',
                        oricalkey:'created_at',
                        sort:'desc'
                    },
                    {
                        key:'stock',
                        label:'Stock',
                        oricalkey:'qty',
                        sort:'desc'
                    },
                    {
                        key:'low-to-high',
                        label:'$ Low to High',
                        oricalkey:'final_price',
                        sort:'asc'
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
            addSort(){
                let obj = {key:'',label:'',oricalkey:'',sort:'desc'};
                this.sortData.push(obj);
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
</style>
