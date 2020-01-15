<template>
    <div>
        <el-form size="mini" label-width="250px" label-position="left">
            <el-form-item label="账户注册-验证码开启">
                <el-select size="mini" v-model="registerischecked" placeholder="账户注册-验证码开启">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">注册页面的验证码是否开启</span>
            </el-form-item>
            <el-form-item label="账户注册-完成后自动登陆账户">
                <el-select size="mini" v-model="registerislogin" placeholder="账户注册-完成后自动登陆账户">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">账号注册成功后，是否自动登录</span>
            </el-form-item>
            <el-form-item label="账户注册-自动登陆账户成功跳转url">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
                <span class="help-info">注册登录成功后，跳转的url</span>
            </el-form-item>
            <el-form-item label="账户登陆-验证码开启">
                <el-select size="mini" v-model="loginischecked" placeholder="账户登陆-验证码开启">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">登录页面的验证码是否开启</span>
            </el-form-item>
            <el-form-item label="忘记密码-验证码开启">
                <el-select size="mini" v-model="forgetpasswordischecked" placeholder="忘记密码-验证码开启">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">忘记密码页面的验证码是否开启</span>
            </el-form-item>
            <el-form-item label="联系我们-验证码开启">
                <el-select size="mini" v-model="contectusischecked" placeholder="联系我们-验证码开启">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">联系我们页面的验证码是否开启</span>
            </el-form-item>
            <el-form-item label="账户Name-最小长度">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
                <span class="help-info">注册账号的firstname的最小长度</span>
            </el-form-item>
            <el-form-item label="账户Name-最大长度">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
                <span class="help-info">注册账号的firstname, lastname的最大长度</span>
            </el-form-item>
            <el-form-item label="账户密码-最小长度">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
                <span class="help-info">注册账号的密码的最小长度</span>
            </el-form-item>
            <el-form-item label="账户密码-最大长度">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
                <span class="help-info">注册账号的密码的最大长度</span>
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
                registerischecked:'',
                registerislogin:'',
                loginischecked:'',
                forgetpasswordischecked:'',
                contectusischecked:''

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
