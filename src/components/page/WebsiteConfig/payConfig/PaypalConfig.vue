<template>
    <div>
        <el-form size="mini" label-width="230px" label-position="left">
            <el-form-item label="Paypal支付环境（沙箱 or 生产）">
                <el-select size="mini" v-model="payEnviromentValue" placeholder="Paypal支付环境（沙箱 or 生产）">
                    <el-option
                            v-for="item in BasicData.payEnviroment"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Paypal账户">
                <el-input size="mini" class="input-sty" v-model="paypalaccount" suffix-icon="xxx"></el-input>
            </el-form-item>
            <el-form-item label="Paypal密码">
                <el-input size="mini" class="input-sty" v-model="paypalpassword" suffix-icon="xxx"></el-input>
            </el-form-item>
            <el-form-item label="Paypal签名">
                <el-input size="mini" class="input-sty" v-model="paypalsign" suffix-icon="xxx"></el-input>
            </el-form-item>
        </el-form>
        <el-row class="btn-sty">
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
                payEnviromentValue:'',
                paypalaccount:'zqy234api1-facilitator_api1.126.com',
                paypalpassword:'HF4TNTTXUD6YQREH',
                paypalsign:'An5ns1Kso7MWUdW4ErQKJJJ4qi4-ANB-xrkMmTHpTszFaUx2v4EHqknV'
            };
        },
        methods: {},
        computed: {},
        components: {}
    };
</script>

<style scoped>
    .input-sty{
        width: auto;
    }
    .btn-sty{
        margin-top: 10px;
    }
</style>
