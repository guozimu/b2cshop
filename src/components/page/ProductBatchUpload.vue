<template>
    <div>
        <el-upload
                class="upload-demo"
                drag
                action=""
                multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">
                1.此部分功能为通过excel文件，批量上传产品，您可以点击这里下载 Excel样式<br/>
                    &nbsp&nbsp&nbsp&nbsp1.1 上面下载是一个例子，里面包含excel文件和图片文件夹，您需要将图片文件夹上传到 @appimage/common/media/catalog/product/<br/>
                    &nbsp&nbsp&nbsp&nbsp1.2. excel文件里面有一行数据，是一个例子<br/>
                    &nbsp&nbsp&nbsp&nbsp1.3 README.txt是一个关于excel文件的说明，请仔细阅读<br/>
                    &nbsp&nbsp&nbsp&nbsp1.4 文件上传后，系统会通过sku查找，是否存在存在产品，如果存在，则更新，如果不存在则添加。<br/>
                    &nbsp&nbsp&nbsp&nbsp1.5 在使用该功能，请多测试，因为产品部分数据结构比较复杂，因此不满足自己的请自行二次开发。<br/>
                2.按照格式填写Excel产品数据<br/>
                3.选择文件，提交即可
            </div>
        </el-upload>
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
    .el-upload__tip{
        line-height: 200%;
    }
</style>
