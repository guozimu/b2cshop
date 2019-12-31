<template>
    <div>
        <el-row>
            <el-button size="mini" type="primary">清除缓存</el-button>
        </el-row>
        <el-row class="table-style">
            <el-table
                    :data="caches"
                    :height="650"
                    ref="table"
                    border
                    :cell-style="cellStyle"
                    :header-cell-style="rowStyle"
                    style="width: 100%;"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="cachename"
                        label="缓存名称"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="cachedesc"
                        label="缓存描述"
                        width="">
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                caches:[
                    {
                        cachename:'appadmin',
                        cachedesc:'刷新全部缓存：appAdmin'
                    },
                    {
                        cachename:'appapi',
                        cachedesc:'刷新全部缓存:appapi'
                    },
                    {
                        cachename:'appFront',
                        cachedesc:'刷新全部缓存:appFront'
                    },
                    {
                        cachename:'appHtml5',
                        cachedesc:'刷新全部缓存:appHtml5'
                    },
                    {
                        cachename:'appServer',
                        cachedesc:'刷新全部缓存:appServer'
                    }
                ]
            };
        },
        methods: {
            cellStyle(){
                return "text-align:center"
            },
            rowStyle(){
                return "text-align:center"
            },
            handleSelectionChange(val) {
                console.log(val)
                this.multipleSelection = val;
            },
        },
        computed: {},
        components: {}
    };
</script>

<style scoped>

</style>
