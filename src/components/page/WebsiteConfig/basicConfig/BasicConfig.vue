<template>
    <div>
        <el-form size="mini" label-width="100px">
            <el-form-item label="基础语言">
                <el-select size="mini" v-model="basiclangValue" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.basiclangs"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">基础语言，分类产品等，进行后台编辑的基础语言</span>
            </el-form-item>
            <el-form-item label="基础货币">
                <el-select size="mini" v-model="basiccurrencyValue" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.basiccurrencys"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">基础货币，产品数据后台编辑的货币</span>
            </el-form-item>
            <el-form-item label="默认货币">
                <el-select size="mini" v-model="defaultcurrencyValue" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.defaultcurrencys"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">默认的货币，如果store中没有设置货币，那么将使用默认货币</span>
            </el-form-item>
            <el-form-item label="图片域名">
                <el-input class="input-sty" size="mini" suffix-icon="xxx"></el-input>
                <span class="help-info">图片的域名</span>
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
                basiclangValue:'',
                basiccurrencyValue:'',
                defaultcurrencyValue:''
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
