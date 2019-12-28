<template>
    <div>
        <el-row>
            <el-col :span="6">
                <el-form size="mini" v-model="accountForm" label-width="120px">
                    <el-form-item label="账户">
                        <el-input size="mini" v-model="accountForm.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="老密码">
                        <el-input type="password" v-model="accountForm.oldpassword" size="mini" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码">
                        <el-input type="password" v-model="accountForm.newpassword" size="mini" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码">
                        <el-input type="password" v-model="accountForm.repassword" size="mini" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row class="btn-box">
            <el-button type="primary" size="mini">保存</el-button>
            <el-button type="danger" size="mini">取消</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                accountForm:{
                    username:'admin',
                    oldpassword:'',
                    newpassword:'',
                    repassword:''
                }
            };
        },
        methods: {},
        computed: {},
        components: {}
    };
</script>

<style scoped>
    .btn-box{
        margin-left: 120px;
    }
</style>
