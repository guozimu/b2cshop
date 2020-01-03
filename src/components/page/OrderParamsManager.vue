<template>
    <div class="configbox">
        <el-form size="mini" label-width="250px">
            <el-row :gutter="10">
                <el-col :span="8">
                    <el-form-item label="订单编号格式">
                        <el-input size="mini"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="16" class="help-info">订单编号格式，目前只支持数字格式，譬如：1100000000</el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="8">
                    <el-form-item label="订单地址必填字段">
                        <el-input size="mini"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="16" class="help-info">订单必填字段，多个字段用英文逗号隔开，中间不要有空格</el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="8">
                    <el-form-item label="产品销量下单事件范围">
                        <el-input size="mini"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="16" class="help-info">计算商品销量的订单时间(月)范围（将最近x月内的订单产品销售个数累加销量值，0代表所有订单，设置后需要执行shell脚本）</el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="8">
                    <el-form-item label="X分钟后未支付订单返还库存">
                        <el-input size="mini"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="16" class="help-info">处理多少分钟后，支付状态为pending的订单，归还库存。</el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="8">
                    <el-form-item label="未支付订单归还库存脚本处理个数">
                        <el-input size="mini"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="16" class="help-info">支付状态为pending的订单，归还库存脚本，一次性处理多少个pending订单。</el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="8">
                    <el-form-item label="订单备注字符最大数">
                        <el-input size="mini"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="16" class="help-info">订单备注字符的最大数</el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="8">
                    <el-form-item label="是否支持游客订单">
                        <el-select v-model="support" placeholder="是否支持游客订单">
                            <el-option
                                    v-for="item in BasicData.issupportvisit"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="16" class="help-info">是否支持游客下单, 开启后，Appserver(Api)入口不生效</el-col>
            </el-row>
        </el-form>
        <el-row style="margin-left: 250px;">
            <el-button size="mini" type="primary">保存</el-button>
            <el-button size="mini" type="danger">取消</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                BasicData:JSON.parse(localStorage.getItem('basicdata')),
                support:''
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
        line-height: 28px;
    }
    .configbox{
        padding: 30px 0px;
        border: 1px dashed #13ce66;
    }
</style>
