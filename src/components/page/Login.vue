<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title"><img src="../../assets/img/blue_logo.png"/></div>
            <div class="ul-box">
                <ul>
                    <li><a>关于</a></li>
                    <li><a>反馈</a></li>
                    <li><a>帮助</a></li>
                    <li>
                        <el-select v-model="value" size="mini" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </li>
                </ul>
            </div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input size="large" v-model="param.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        size="large"
                        placeholder="password"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <p class="login-tips">Tips : 用户名和密码随便填。</p>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            param: {
                username: 'admin',
                password: '123123',
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
            options: [{
                value: 'cn',
                label: '中文'
            }, {
                value: 'en',
                label: 'English'
            }],
            value: 'cn'
        };
    },
    methods: {
        submitForm() {
            this.$refs.login.validate(valid => {
                if (valid) {
                    this.$message.success('登录成功');
                    localStorage.setItem('ms_username', this.param.username);
                    this.$router.push('/');
                } else {
                    this.$message.error('请输入账号和密码');
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background: url(../../assets/img/bg_3.jpg) repeat center;
}
.ms-title {
    padding: 40px 80px;
    /*line-height: 50px;*/
    /*text-align: center;*/
    /*font-size: 25px;*/
    /*font-weight: 800;*/
    /*color: #000;*/
    padding-top: 50%;
}
.ms-title img{
    width: 100%;
}
.ms-login {
    position: absolute;
    right: 0;
    width: 400px;
    height: 100%;
    background: rgba(255, 255, 255, 1);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
    margin-top: 25px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
.ul-box ul{
    padding: 0px;
    margin: 0px;
    text-align: center;
}
.ul-box ul li{
    display: inline-block;
    width: 60px;
}
.ul-box ul li:last-child{
    width: 80px;
}
.ul-box ul li a{
    width: 100%;
    padding: 5px 0px;
    display: block;
    font-size: 12px;
}
</style>
