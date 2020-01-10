<template>
    <div>
        <el-dialog
                title="用户登录"
                width="40%"
                :visible.sync="dialogFormVisible">

            <el-form class="form-sty" size="mini" :model="userform" label-width="50px" label-position="left">
                <p class="tip">请填写您的Fecmall应用市场的账号，进行登录</p>
                <el-form-item label="用户">
                    <el-input v-model="userform.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="userform.password" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">登 录</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userform:{
                    name:'',
                    password:''
                },
                dialogFormVisible:true
            };
        },
        methods: {},
        computed: {},
        components: {}
    };
</script>

<style scoped>
    .tip{
        margin-top: 60px;
        border-top: 1px solid #ddd;
        font-weight: 600;
        margin-bottom: 30px;
        padding-top: 10px;
    }
    .form-sty{
        padding: 10px 150px;
        margin-bottom: 50px;
    }
</style>
