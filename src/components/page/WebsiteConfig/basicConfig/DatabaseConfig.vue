<template>
    <div>
        <el-form size="mini" label-width="250px">
            <el-form-item label="分类和产品数据存储引擎">
                <el-select size="mini" v-model="prodatasValue" placeholder="分类和产品数据存储引擎">
                    <el-option
                            v-for="item in BasicData.prodatas"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">设置分类和产品存储引擎，默认为mysql，如果您对该项进行了更改设置，那么您必须执行shell urlRewrite脚本</span>
            </el-form-item>
            <el-form-item label="产品收藏数据存储引擎">
                <el-select size="mini" v-model="procollectionsValue" placeholder="产品收藏数据存储引擎">
                    <el-option
                            v-for="item in BasicData.procollections"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">产品收藏数据存储引擎，默认为Mysql</span>
            </el-form-item>
            <el-form-item label="产品评论数据存储引擎">
                <el-select size="mini" v-model="procommonsValue" placeholder="产品评论数据存储引擎">
                    <el-option
                            v-for="item in BasicData.procommons"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">产品评论数据存储引擎，默认为Mysql</span>
            </el-form-item>
            <el-form-item label="产品Page和StaticBlock数据存储引擎">
                <el-select size="mini" v-model="pandsdataValue" placeholder="产品Page和StaticBlock数据存储引擎">
                    <el-option
                            v-for="item in BasicData.pandsdatas"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">产品Page和StaticBlock数据存储引擎，默认为Mysql</span>
            </el-form-item>
            <el-form-item label="Url重写数据存储引擎">
                <el-select size="mini" v-model="urlrewritedatasValue" placeholder="Url重写数据存储引擎">
                    <el-option
                            v-for="item in BasicData.urlrewritedatas"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">Url重写数据存储引擎，默认为Mysql</span>
            </el-form-item>
            <el-form-item label="Newsletter数据存储引擎">
                <el-select size="mini" v-model="newslettersValue" placeholder="Newsletter数据存储引擎">
                    <el-option
                            v-for="item in BasicData.newsletters"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">Newsletter数据存储引擎，默认为Mysql</span>
            </el-form-item>
            <el-form-item label="ErrorHandle数据存储引擎">
                <el-select size="mini" v-model="errordatasValue" placeholder="ErrorHandle数据存储引擎">
                    <el-option
                            v-for="item in BasicData.errordatas"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">ErrorHandle数据存储引擎，默认为Mysql</span>
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
                prodatasValue:'',
                procollectionsValue:'',
                procommonsValue:'',
                pandsdataValue:'',
                urlrewritedatasValue:'',
                newslettersValue:'',
                errordatasValue:''

            };
        },
        methods: {},
        computed: {},
        components: {}
    };
</script>

<style scoped>

</style>
