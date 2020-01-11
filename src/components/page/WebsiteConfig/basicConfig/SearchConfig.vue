<template>
    <div>
        <el-form size="mini" label-width="160px">
            <el-form-item label="Mysql搜索引擎">
                <el-select size="mini" v-model="mysqlsearchValue" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.mysqlsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">开启该选项后，您可以在入口的store中配置该搜索引擎，执行shell脚本`sh fullSearchSync.sh`，同步数据到搜索引擎</span>
            </el-form-item>
            <el-form-item label="Mongodb搜索引擎">
                <el-select size="mini" v-model="mongodbsearchValue" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.mongodbsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">开启该选项后，您可以在入口的store中配置该搜索引擎，执行shell脚本`sh fullSearchSync.sh`，同步数据到搜索引擎</span>
            </el-form-item>
            <el-form-item label="Xunsearch搜索引擎">
                <el-select size="mini" v-model="xunsearchValue" placeholder="请选择">
                    <el-option
                            v-for="item in BasicData.xunsearch"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">开启该选项后，您可以在入口的store中配置该搜索引擎，执行shell脚本`sh fullSearchSync.sh`，同步数据到搜索引擎</span>
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
                mysqlsearchValue:'',
                mongodbsearchValue:'',
                xunsearchValue:''
            };
        },
        methods: {},
        computed: {},
        components: {}
    };
</script>

<style scoped>

</style>
