<template>
    <el-row class="sort-info" :gutter="10">
        <el-col class="sort-info" :span="5">
            <div class="btn-box">
                <el-button size="mini" type="primary">新增</el-button>
                <el-button size="mini" type="primary">保存</el-button>
                <el-button size="mini" type="danger">删除</el-button>
            </div>
            <el-tree
                    :data="kinddata"
                    class="tree-sty"
                    :expand-on-click-node="false"
                    default-expand-all
                    node-key="id"
                    ref="tree"
                    highlight-current
                    :props="defaultProps">
            </el-tree>
        </el-col>
        <el-col class="basic-left" :span="18">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基本信息" name="basicInfo">
                    <BasicInfo></BasicInfo>
                </el-tab-pane>
                <el-tab-pane label="Meta部分" name="meta">META部分</el-tab-pane>
                <el-tab-pane label="产品" name="product">
                    <Product></Product>
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </el-row>

</template>

<script>
    import BasicInfo from './sortinfo/BasicInfo'
    import Product  from './sortinfo/Product'
    export default {
        data() {
            return {
                kinddata:[
                    {
                        id: 1,
                        label: 'wedding',
                        children: [{
                            id: 7,
                            label: 'Wedding Dresses',
                            children: [{
                                id: 8,
                                label: 'Wedding Dresses2018'
                            }, {
                                id: 9,
                                label: 'Wedding Dresses Dress4'
                            },{
                                id: 10,
                                label: 'Maternity Wedding Dresses'
                            },{
                                id: 11,
                                label: 'Muslim Wedding Dresses'
                            },{
                                id: 12,
                                label: 'A-Line Wedding Dresses'
                            },{
                                id: 13,
                                label: 'Ball Gown Wedding Dresses'
                            },{
                                id: 14,
                                label: 'Junior Bridesmaid Dresses'
                            }]
                        },{
                            id: 15,
                            label: 'Bridesmaid Dresses',
                            children: [{
                                id: 16,
                                label: 'Bridesmaid Dresses 2016'
                            }, {
                                id: 17,
                                label: 'Bridesmaid Dresses 2015'
                            },{
                                id: 18,
                                label: 'Bridesmaid Dresses 2014'
                            },{
                                id: 19,
                                label: 'Elegant Bridesmaid Dresses'
                            },{
                                id: 20,
                                label: 'Inexpensive Bridesmaid Dresses'
                            }]
                        }]},{
                        id: 2,
                        label: 'Special Occasion',
                        children: [{
                            id: 21,
                            label: 'Homecoming Dresses'
                        },{
                            id: 22,
                            label: 'Ball Gown Dresses'
                        }]
                    },{
                        id: 3,
                        label: 'Men',
                        children: [{
                            id: 23,
                            label: 'Shirts'
                        },{
                            id: 24,
                            label: 'Shorts'
                        }
                        ]
                    },{
                        id: 4,
                        label: 'Bags & Accessories',

                    },{
                        id: 5,
                        label: 'Jewelry & Watches',

                    },{
                        id: 6,
                        label: 'Computer'
                    },
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                activeName:'basicInfo'
            };
        },
        methods: {
            handleClick(){

            }
        },
        computed: {},
        components: {
            BasicInfo,
            Product
        }
    };
</script>

<style scoped>
    .btn-box{
        margin-bottom: 10px;
    }
    .sort-info{
        height: 100%;
    }
    .tree-sty{
        height: calc(100% - 28px);
    }
    .tree-sty >>> .el-tree-node__label{
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .basic-left{
        height: 100%;
        background: white;
    }
    .basic-left >>> .el-tabs--top{
        height: 100%;
    }
    .basic-left >>> .el-tabs__content{
        height: calc(100% - 60px);
        overflow-y: auto;
    }
</style>
