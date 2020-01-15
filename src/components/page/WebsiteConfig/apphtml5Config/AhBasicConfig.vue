<template>
    <div>
        <el-form size="mini" label-width="200px" label-position="left">
            <el-form-item label="JsCss强制复制到Web">
                <el-select size="mini" v-model="jscsscopyValue" placeholder="JsCss强制复制到Web">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">模板中的css，js文件是否每次都进行forceCopy，开发模式请设置Yes，线上如果并发高，可以设置成No节省资源。</span>
            </el-form-item>
            <el-form-item label="Js版本号">
                <el-input size="mini" class="input-sty" v-model="jsedition" suffix-icon="xxx"></el-input>
                <span class="help-info">Js文件的后缀参数，线上发新版本更新js，可以将这个值+1，这样可以让浏览器不加载浏览器缓存</span>
            </el-form-item>
            <el-form-item label="Css版本号">
                <el-input size="mini" class="input-sty" v-model="cssedition" suffix-icon="xxx"></el-input>
                <span class="help-info">Css文件的后缀参数，线上发新版本更新css，可以将这个值+1，这样可以让浏览器不加载浏览器缓存</span>
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
                jscsscopyValue:'',
                jsedition:'6',
                cssedition:'7'
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
