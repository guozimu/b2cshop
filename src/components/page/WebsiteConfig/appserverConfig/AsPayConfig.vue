<template>
    <div>
        <el-form size="mini" label-width="200px" label-position="left">
            <el-form-item label="线下付款支付方式">
                <el-select size="mini" v-model="paytype" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.mysqlsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">线下支付</span>
            </el-form-item>
            <el-form-item label="Paypal标准支付方式">
                <el-select size="mini" v-model="paytype" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.mongodbsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">Paypal标准支付</span>
            </el-form-item>
            <el-form-item label="Paypal快捷支付方式">
                <el-select size="mini" v-model="paytype" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.xunsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">Paypal快捷支付</span>
            </el-form-item>
            <el-form-item label="支付宝支付方式">
                <el-select size="mini" v-model="paytype" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.xunsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">支付宝支付</span>
            </el-form-item>
            <el-form-item label="微信支付-PC扫码方式">
                <el-select size="mini" v-model="paytype" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.xunsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">微信PC支付</span>
            </el-form-item>
            <el-form-item label="微信支付-内部JsApi">
                <el-select size="mini" v-model="paytype" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.xunsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">微信内部支付JsApi</span>
            </el-form-item>
            <el-form-item label="微信支付-手机浏览器html5">
                <el-select size="mini" v-model="paytype" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.xunsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">微信支付手机浏览器html5</span>
            </el-form-item>
            <el-form-item label="">
                <el-button size="mini" type="primary">保存</el-button>
                <el-button size="mini" type="danger">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                paytype:'',
                BasicData:JSON.parse(localStorage.getItem('basicdata'))
            };
        },
        methods: {},
        computed: {},
        components: {}
    };
</script>

<style scoped>

</style>
