<template>
    <div>
        <el-form size="mini" label-width="230px" label-position="left">
            <el-form-item label="微信服务号AppId">
                <el-input size="mini" class="input-sty" v-model="serviceappid" suffix-icon="xxx"></el-input>
                <span class="help-info">微信服务号AppId</span>
            </el-form-item>
            <el-form-item label="微信服务号AppSecret">
                <el-input size="mini" class="input-sty" v-model="serviceappsecret" suffix-icon="xxx"></el-input>
                <span class="help-info">微信服务号AppSecret</span>
            </el-form-item>
            <el-form-item label="微信小程序AppId">
                <el-input size="mini" class="input-sty" v-model="appid" suffix-icon="xxx"></el-input>
                <span class="help-info">微信小程序AppId</span>
            </el-form-item>
            <el-form-item label="微信小程序AppSecret">
                <el-input size="mini" class="input-sty" v-model="appsecret" suffix-icon="xxx"></el-input>
                <span class="help-info">微信小程序AppSecret</span>
            </el-form-item>
            <el-form-item label="微信商户平台MCHID">
                <el-input size="mini" class="input-sty" v-model="mchid" suffix-icon="xxx"></el-input>
                <span class="help-info">微信商户平台MCHID</span>
            </el-form-item>
            <el-form-item label="微信商户平台KEY">
                <el-input size="mini" class="input-sty" v-model="shopkey" suffix-icon="xxx"></el-input>
                <span class="help-info">微信商户平台KEY</span>
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
                serviceappid:'wxb508f3849c440445',
                serviceappsecret:'696f03956777e0a172f4adb5afe8d805',
                appid:'wxedc77529191bc54f',
                appsecret:'3b97c3fb4edeb0ca25e5386d753347a9',
                mchid:'1537420921',
                shopkey:'8934e7d15453e97507ef794cf7b0519e'
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
</style>
