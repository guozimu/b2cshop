<template>
    <div>
        <el-form size="mini" label-width="200px" label-position="left">
            <el-form-item label="Store Key">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
            </el-form-item>
            <el-form-item label="Default Language">
                <el-select size="mini" placeholder="请选择">
                </el-select>
            </el-form-item>
            <el-form-item label="Default Language Name">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
            </el-form-item>
            <el-form-item label="默认货币">
                <el-select size="mini"  placeholder="请选择">
                </el-select>
            </el-form-item>
            <el-form-item label="是否开启Https">
                <el-select size="mini" placeholder="请选择">

                </el-select>
            </el-form-item>
            <el-form-item label="FB Login AppId">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
            </el-form-item>
            <el-form-item label="FB Login AppSecret">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
            </el-form-item>
            <el-form-item label="Google Login Client Id">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
            </el-form-item>
            <el-form-item label="Google Login Client Secret">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
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
            return {};
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
