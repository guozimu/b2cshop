<template>
    <div>
        <el-form size="mini" label-width="230px" label-position="left">
            <el-form-item label="支付宝支付环境（沙箱 or 生产）">
                <el-select class="input-sty" size="mini" v-model="payEnviromentValue" placeholder="支付宝支付环境（沙箱 or 生产）">
                    <el-option
                            v-for="item in BasicData.payEnviroment"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="App ID">
                <el-input size="mini" class="input-sty" v-model="appid" suffix-icon="xxx"></el-input>
            </el-form-item>
            <el-form-item label="Seller ID">
                <el-input size="mini" class="input-sty" v-model="sellerid" suffix-icon="xxx"></el-input>
            </el-form-item>
            <el-form-item label="Rsa Private Key">
                <el-input size="mini" class="input-sty" v-model="privatekey" suffix-icon="xxx"></el-input>
            </el-form-item>
            <el-form-item label="Rsa Public Key">
                <el-input size="mini" class="input-sty" v-model="publickey" suffix-icon="xxx"></el-input>
            </el-form-item>
            <el-form-item label="AOP缓存数据文件路径">
                <el-input size="mini" class="input-sty" v-model="aopcache" suffix-icon="xxx"></el-input>
                <span class="help-info">支付宝库包的选项：SDK工作目录, 存放日志，AOP缓存数据, Linux 下填写/tmp 即可，window 将其修改成您自己的支付目录（因为win下面没有/tmp/文件目录）</span>
            </el-form-item>
            <el-form-item label="支付宝开发模式激活">
                <el-select class="input-sty" size="mini" v-model="statusValue" placeholder="支付宝开发模式激活">
                    <el-option
                            v-for="item in BasicData.status"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">支付宝库包的选项：开发模式必须设置true，以免缓存造成你的代码修改了不生效,部署到生产环境如果性能压力大，可以设置为false提高运行速度（对应的代价：下次升级程序需要清缓存）</span>
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
                appid:'',
                sellerid:'',
                privatekey:'',
                publickey:'',
                aopcache:'',
                statusValue:'',
                payEnviromentValue:''
            };
        },
        methods: {},
        computed: {},
        components: {}
    };
</script>

<style scoped>
    .input-sty{
        width: 20%;
    }
    .btn-sty{
        margin-top: 10px;
    }
</style>
