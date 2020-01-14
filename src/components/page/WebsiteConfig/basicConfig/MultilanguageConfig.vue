<template>
    <div>
        <el-row>
            <el-col :span="9">
                <el-table
                        :data="languages"
                        :cell-style="cellStyle"
                        :header-cell-style="headerStyle"
                        style="width: 100%">
                    <el-table-column
                            label="语言名称"
                            width="">
                        <template slot-scope="scope">
                            <el-input size="mini" v-model="scope.row.langname"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="语言简码"
                            width="">
                        <template slot-scope="scope">
                            <el-input size="mini" v-model="scope.row.langcode"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="搜索引擎">
                        <template slot-scope="scope">
                            <el-input size="mini" v-model="scope.row.search"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" type="danger" @click="editYou(scope.row)" icon="el-icon-delete"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-row class="btn-sty">
                    <el-button size="mini" type="primary">添加语言</el-button>
                    <el-button size="mini" type="primary">保存</el-button>
                    <el-button size="mini" type="danger">取消</el-button>
                </el-row>
            </el-col>
            <el-col :span="9" :offset="5" class="help-info">
                <p>1.此处为语言编辑部分，可以添加或者编辑语言，并为每个语言指定相应的搜索引擎， 您可以在搜索引擎配置部分，开启相应搜索引擎。</p>
                <p>2.保存后，在Store设置中，为Store指定相应的语言，因为语言和搜索引擎是绑定的，因此 在指定语言的同时，也指定了相应的搜索引擎</p>
                <p>3.更改设置后，您需要跑一下同步数据的脚本 ./vendor/fancyecommerce/fecshop/shell/search/fullSearchSync.sh</p>
                <p>4.如果是xunsearch，里面有一些其他的历史数据，您可以通过脚本 ./vendor/fancyecommerce/fecshop/shell/search/deleteXunSearchAllData.sh 来清空xunsearch里面的数据。</p>
                <p>5.如果您没有安装mongodb和xunsearch，那么您只能使用mysql搜索，mysql的搜索使用的是like的模糊匹配。</p>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {

            };
        },
        methods: {
            headerStyle(){
                return 'text-align:center'
            },
            cellStyle(){
                return 'text-align:center'
            }
        },
        computed: {
            ...mapGetters('multiLanguages',{
                languages:'rendermultilanguages'
            })
        },
        components: {},
        mounted() {
            this.$store.dispatch('multiLanguages/getMultiLanguages')
        }
    };
</script>

<style scoped>
    .btn-sty{
        margin-top: 10px;
    }
    .help-info p{
        font-size: 14px;
        line-height: 200%;
        margin-top: 15px;
    }
</style>
