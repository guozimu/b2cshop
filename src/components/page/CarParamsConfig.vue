<template>
    <div class="carconfig">
        <el-form size="mini" label-width="200px">
            <el-row :gutter="10">
                <el-col :span="7">
                    <el-form-item label="sku加入购物车库存检查">
                        <el-select size="mini" v-model="sku" placeholder="sku加入购物车库存检查">
                            <el-option
                                    v-for="item in skus"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="17" class="help-info">商品加入购物车，进行产品的库存检查，建议配置NO，无库存商品可以加入购物车，但是不能下单</el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="7">
                    <el-form-item label="sku加入购物车最大数">
                        <el-input-number v-model="num" :min="1" size="mini"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col :span="17" class="help-info">单个商品sku加入购物车的最大个数，增加恶意下单占用商品库存的难度</el-col>
            </el-row>
        </el-form>
        <el-row style="margin-left: 200px;">
            <el-button size="mini" type="primary">保存</el-button>
            <el-button size="mini" type="danger">取消</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                skus:[
                    {
                        label:'是',
                        value:true
                    },
                    {
                        label:'否',
                        value:false
                    }
                ],
                sku:'',
                num:''
            };
        },
        methods: {},
        computed: {},
        components: {}
    };
</script>

<style scoped>
    .help-info{
        font-size: 14px;
    }
    .carconfig{
        padding: 30px 0px;
        border: 1px dashed #13ce66;
    }
</style>
