<template>
    <div class="proparams">
        <el-form size="mini" label-width="200px">
            <el-row :gutter="10">
                <el-col :span="7">
                    <el-form-item label="产品图片文件路径">
                        <el-input size="mini"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="17">
                    <span class="size-12">产品图片存放路径。根路径为：@appimage/common</span>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="7">
                    <el-form-item label="产品图片上传大小（MB）">
                        <el-input size="mini"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="17">
                    <span class="size-12">MB # 图片最大尺寸</span>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="7">
                    <el-form-item label="png图片resize压缩的质量数">
                        <el-input size="mini"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="17">
                    <span class="size-12">png图片resize压缩的质量数：范围为 0-9，数越大质量越高容量越大, 数越低图片越模糊容量越小（设置后，同下）</span>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="7">
                    <el-form-item label="Jpeg图片resize压缩的质量数">
                        <el-input size="mini"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="17">
                    <span class="size-12">jpeg, jpg, pjpeg压缩 范围：1-100，数越大质量越高(设置后，对于已经resize的历史图片不生效，您可以手动清空@appimage/common/[imageFloder]/cache/文件夹下的图片,重新生成)</span>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="7">
                    <el-form-item label="特价大于原价？">
                        <el-select size="mini" v-model="specialprice">
                            <el-option
                                    v-for="item in specialprices"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="17">
                    <span class="size-12">设置为true后，如果产品的special_price > price， 则 special_price无效，价格为price</span>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="7">
                    <el-form-item label="是否零库存模式？">
                        <el-select size="mini" v-model="zero">
                            <el-option
                                    v-for="item in zeros"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="17">
                    <span class="size-12">是否零库存？</span>
                </el-col>
            </el-row>
        </el-form>
        <div class="btn-box">
            <el-button size="mini" type="primary">保存</el-button>
            <el-button size="mini" type="warning">取消</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                specialprices:[
                    {
                        label:'是',
                        value:true
                    },
                    {
                        label:'否',
                        value:false
                    }
                ],
                specialprice:false,
                zeros:[
                    {
                        label:'是',
                        value:true
                    },
                    {
                        label:'否',
                        value:false
                    }
                ],
                zero:false
            };
        },
        methods: {},
        computed: {},
        components: {}
    };
</script>

<style scoped>
    .proparams{
        border: 1px dashed #13ce66;
        padding: 15px 0px;
    }
    .btn-box{
        margin-left: 200px;
    }
</style>
