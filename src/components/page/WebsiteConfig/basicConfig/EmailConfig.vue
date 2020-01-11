<template>
    <div>
        <el-form size="mini">
            <el-form-item label="商城名称">
                <el-input size="mini"></el-input>
                <span class="help-info">在邮件中显示的Store的名字</span>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input size="mini"></el-input>
                <span class="help-info">在邮件中显示的联系电话</span>
            </el-form-item>
            <el-form-item label="联系邮箱">
                <el-input size="mini"></el-input>
                <span class="help-info">在邮件中显示的联系邮箱地址。</span>
            </el-form-item>
            <el-form-item label="默认Smtp Host">
                <el-input size="mini"></el-input>
                <span class="help-info">Smtp Host</span>
            </el-form-item>
            <el-form-item label="默认Smtp账户">
                <el-input size="mini"></el-input>
                <span class="help-info">Smtp Username</span>
            </el-form-item>
            <el-form-item label="默认Smtp密码">
                <el-input size="mini"></el-input>
                <span class="help-info">Smtp Password</span>
            </el-form-item>
            <el-form-item label="默认Smtp端口">
                <el-input size="mini"></el-input>
                <span class="help-info">Smtp Host</span>
            </el-form-item>
            <el-form-item label="默认Smtp加密方式">
                <el-input size="mini"></el-input>
                <span class="help-info">一般为tls</span>
            </el-form-item>
            <el-form-item label="注册账户发送邮件">
                <el-select size="mini" v-model="mysqlsearchValue" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.mysqlsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">注册账户是否发送邮件？</span>
            </el-form-item>
            <el-form-item label="新注册用户是否邮件激活？">
                <el-select size="mini" v-model="mysqlsearchValue" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.mysqlsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">新注册用户是否需要邮件激活账户？</span>
            </el-form-item>
            <el-form-item label="邮件激活账户Token过期时间(秒)">
                <el-input size="mini"></el-input>
                <span class="help-info">注册账户激活邮件的token的过期时间</span>
            </el-form-item>
            <el-form-item label="注册账户邮件Widget">
                <el-input size="mini"></el-input>
                <span class="help-info">[注册账户后发送的邮件]邮件模板内容的动态数据提供Block部分</span>
            </el-form-item>
            <el-form-item label="注册账户邮件ViewPatch">
                <el-input size="mini"></el-input>
                <span class="help-info">[注册账户后发送的邮件]邮件模板内容的view部分</span>
            </el-form-item>
            <el-form-item label="登陆账户是否发送邮件？">
                <el-select size="mini" v-model="mysqlsearchValue" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.mysqlsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">登陆账户成功是否发送邮件？</span>
            </el-form-item>
            <el-form-item label="登陆账户邮件Widget">
                <el-input size="mini"></el-input>
                <span class="help-info">[登陆账户成功后发送的邮件] 邮件模板内容的动态数据提供Block部分</span>
            </el-form-item>
            <el-form-item label="登陆账户邮件ViewPatch">
                <el-input size="mini"></el-input>
                <span class="help-info">[登陆账户成功后的发送邮件] 邮件模板内容的view部分</span>
            </el-form-item>
            <el-form-item label="忘记密码发送邮件">
                <el-select size="mini" v-model="mysqlsearchValue" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.mysqlsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">忘记密码是否发送邮件？</span>
            </el-form-item>
            <el-form-item label="忘记密码邮件Widget">
                <el-input size="mini"></el-input>
                <span class="help-info">[忘记密码提交后发送的邮件] 邮件模板内容的动态数据提供Block部分</span>
            </el-form-item>
            <el-form-item label="忘记密码邮件ViewPatch">
                <el-input size="mini"></el-input>
                <span class="help-info">[忘记密码提交后发送的邮件] 邮件模板内容的view部分</span>
            </el-form-item>
            <el-form-item label="忘记密码ResetToken过期时间(秒)">
                <el-input size="mini"></el-input>
                <span class="help-info">[忘记密码提交后发送的邮件] ResetToken的过期时间（秒）</span>
            </el-form-item>
            <el-form-item label="联系我们发送邮件">
                <el-select size="mini" v-model="mysqlsearchValue" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.mysqlsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">联系我们是否发送邮件？</span>
            </el-form-item>
            <el-form-item label="联系我们邮件Widget">
                <el-input size="mini"></el-input>
                <span class="help-info">[联系我们发送的邮件] 邮件模板内容的动态数据提供Block部分</span>
            </el-form-item>
            <el-form-item label="联系我们邮件ViewPatch">
                <el-input size="mini"></el-input>
                <span class="help-info">[联系我们发送的邮件] 邮件模板内容的view部分</span>
            </el-form-item>
            <el-form-item label="联系我们-邮箱地址">
                <el-input size="mini"></el-input>
                <span class="help-info">联系我们接受的邮件地址</span>
            </el-form-item>
            <el-form-item label="Newsletter发送邮件？">
                <el-select size="mini" v-model="mysqlsearchValue" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.mysqlsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">newsletter是否发送邮件？</span>
            </el-form-item>
            <el-form-item label="Newsletter邮件Widget">
                <el-input size="mini"></el-input>
                <span class="help-info">[newsletter发送的邮件] 邮件模板内容的动态数据提供Block部分</span>
            </el-form-item>
            <el-form-item label="Newsletter邮件ViewPatch">
                <el-input size="mini"></el-input>
                <span class="help-info">[newsletter发送的邮件] 邮件模板内容的view部分</span>
            </el-form-item>
            <el-form-item label="Newsletter邮件ViewPatch">
                <el-input size="mini"></el-input>
                <span class="help-info">[newsletter发送的邮件] 邮件模板内容的view部分</span>
            </el-form-item>
            <el-form-item label="游客下单发送邮件？">
                <el-select size="mini" v-model="mysqlsearchValue" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.mysqlsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">游客下单后，是否发送邮件？</span>
            </el-form-item>
            <el-form-item label="游客下单邮件Widget">
                <el-input size="mini"></el-input>
                <span class="help-info">[游客下单后，发送的邮件] 邮件模板内容的动态数据提供Block部分</span>
            </el-form-item>
            <el-form-item label="游客下单邮件ViewPatch">
                <el-input size="mini"></el-input>
                <span class="help-info">[游客下单后，发送的邮件] 邮件模板内容的view部分</span>
            </el-form-item>
            <el-form-item label="登陆用户下单发送邮件？">
                <el-select size="mini" v-model="mysqlsearchValue" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.mysqlsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">游客下单后，是否发送邮件？</span>
            </el-form-item>
            <el-form-item label="登陆用户下单邮件Widget">
                <el-input size="mini"></el-input>
                <span class="help-info">[登陆用户下单后发送的邮件] 邮件模板内容的动态数据提供Block部分</span>
            </el-form-item>
            <el-form-item label="登陆用户下单邮件ViewPatch">
                <el-input size="mini"></el-input>
                <span class="help-info">[登陆用户下单后发送的邮件] 邮件模板内容的view部分</span>
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

</style>
