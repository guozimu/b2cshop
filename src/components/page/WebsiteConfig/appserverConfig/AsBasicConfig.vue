<template>
    <div>
        <el-form size="mini" label-width="200px" label-position="left">
            <el-form-item label="Customer AccessToken Timeout">
                <el-input size="mini" class="input-sty" v-model="jsedition" suffix-icon="xxx"></el-input>
                <span class="help-info">Customer AccessToken 的过期时间（秒）</span>
            </el-form-item>
            <el-form-item label="AccessToken Update Time Limit">
                <el-input size="mini" class="input-sty" v-model="cssedition" suffix-icon="xxx"></el-input>
                <span class="help-info">Customer AccessToken的更新时间（当用户持续访问，AccessToken离过期还有多长时间后，进行更新）</span>
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
                BasicData:JSON.parse(localStorage.getItem('basicdata')),
                jsedition:86400,
                cssedition:600
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
</style>
