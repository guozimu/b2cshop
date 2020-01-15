<template>
    <div>
        <el-form size="mini" label-width="180px" label-position="left">
            <el-form-item label="整页缓存-所有">
                <el-select size="mini" v-model="cacheallValue" placeholder="整页缓存-所有">
                    <el-option
                            v-for="item in BasicData.mysqlsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">After you disable it, all pageCache will disabled, Even if it set to enable, it only work for pageCache</span>
            </el-form-item>
            <el-form-item label="整页缓存-首页">
                <el-select size="mini" v-model="cacheindexValue" placeholder="整页缓存-首页">
                    <el-option
                            v-for="item in BasicData.mongodbsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">it will be enabel, after HomePageCache and AllPageCache set to enable</span>
            </el-form-item>
            <el-form-item label="整页缓存-分类页">
                <el-select size="mini" v-model="cachekindValue" placeholder="整页缓存-分类页">
                    <el-option
                            v-for="item in BasicData.xunsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">it will be enabel, after CategoryPageCache and AllPageCache set to enable</span>
            </el-form-item>
            <el-form-item label="整页缓存-产品页">
                <el-select size="mini" v-model="cacheproductValue" placeholder="整页缓存-产品页">
                    <el-option
                            v-for="item in BasicData.xunsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">it will be enabel, after ProductPageCache and AllPageCache set to enable</span>
            </el-form-item>
            <el-form-item label="整页缓存-文章页">
                <el-select size="mini" v-model="cachearticleValue" placeholder="整页缓存-文章页">
                    <el-option
                            v-for="item in BasicData.xunsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">it will be enabel, after ArticlePageCache and AllPageCache set to enable</span>
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
                cacheallValue:'',
                cacheindexValue:'',
                cachekindValue:'',
                cacheproductValue:'',
                cachearticleValue:'',

            };
        },
        methods: {},
        computed: {},
        components: {}
    };
</script>

<style scoped>

</style>
