<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="2" v-if="BasicData">
                <el-select size="mini" v-model="statevalue" placeholder="状态">
                    <el-option
                            v-for="item in BasicData.status"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="2" v-if="BasicData">
                <el-select size="mini" v-model="kcstatusvalue" placeholder="库存状态">
                    <el-option
                            v-for="item in BasicData.kcstatus"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="2">
               <el-input v-model="goodsname" size="mini" placeholder="商品名称"></el-input>
            </el-col>
            <el-col :span="2">
                <el-input v-model="spu" size="mini" placeholder="SPU"></el-input>
            </el-col>
            <el-col :span="2">
                <el-input v-model="sku" size="mini" placeholder="SKU"></el-input>
            </el-col>
            <el-col :span="5">
                <div class="block">
                    <el-date-picker
                            class="datesty"
                            v-model="datevalue"
                            size="mini"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="更新开始日期"
                            end-placeholder="更新结束日期"
                            value-format="yyyy-MM-dd">
                    </el-date-picker>
                </div>
            </el-col>
            <el-col :span="2">
                <el-input v-model="kcbegin" size="mini" placeholder="库存开始"></el-input>
            </el-col>
            <el-col :span="2">
                <el-input v-model="kcend" size="mini" placeholder="库存结束"></el-input>
            </el-col>
            <el-col :span="2" :offset="3" style="text-align: right">
                <el-button size="mini" type="primary">查询</el-button>
            </el-col>
        </el-row>
        <el-row class="btn-group">
            <el-button size="mini" type="primary">新增</el-button>
            <el-button size="mini" type="warning">批量添加</el-button>
            <el-button size="mini" type="warning">修改</el-button>
            <el-button size="mini" type="danger">批量删除</el-button>
        </el-row>
        <el-row ref="table-box" class="table-style">
            <el-table
                    :data="goodsdata.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                    ref="table"
                    :height="tableHeight"
                    border
                    :cell-style="cellStyle"
                    :header-cell-style="rowStyle"
                    style="width: 100%;"
                    class="tabelHeight"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="ID"
                        width="50">
                </el-table-column>
                <el-table-column
                        prop="img"
                        label="图片"
                        width="100">
                    <template slot-scope="scope">
                　　　　<img :src="scope.row.img" class="head_pic"/>
                　　</template>
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="标题"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="spu"
                        label="SPU"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="sku"
                        label="SKU"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="goodsnum"
                        label="库存数量"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="weight"
                        label="产品单重"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="状态"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="price"
                        label="销售价格"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="founder"
                        label="创建人"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="creattime"
                        label="创建时间"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="updatetime"
                        label="更新时间"
                        width="120">
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="120">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="editYou(scope.row)" icon="el-icon-edit"></el-button>
                        <el-button size="mini" type="primary" @click="deleteYou(scope.row,scope.$index)" icon="el-icon-delete"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    class="page-style"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="pageSize"
                    layout="sizes, prev, pager, next"
                    :total="totle">
            </el-pagination>
        </el-row>

        <!--模态框-->
        <el-dialog title="修改" :visible.sync="dialogFormVisible">
            <el-tabs v-model="activeName" class="editsty" @tab-click="handleClick">
                <el-tab-pane label="基本信息" name="basicinfo">
                    <div class="basicTop">
                        <div>
                            <span class="red">产品属性组切换：编辑前请先切换相应的产品属性组</span>
                        </div>
                        <el-select size="mini" v-model="attrGroup" placeholder="请选择">
                            <el-option
                                    v-for="item in attrGroups"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <el-tabs class="language" v-model="activeLang" @tab-click="handleLang">
                        <el-tab-pane label="EN" name="en">
                            <el-form :label-position="labelPosition" size="mini">
                                <el-form-item label="产品名字[en]" :label-width="formLabelWidth">
                                    <el-input size="mini" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="ZH" name="zh">
                            <el-form size="mini" :label-position="labelPosition">
                                <el-form-item label="产品名字[zh]" :label-width="formLabelWidth">
                                    <el-input size="mini" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-form>

                        </el-tab-pane>
                        <el-tab-pane label="FR" name="fr">FR</el-tab-pane>
                        <el-tab-pane label="DE" name="de">DE</el-tab-pane>
                        <el-tab-pane label="ES" name="es">ES</el-tab-pane>
                        <el-tab-pane label="PT" name="pt">PT</el-tab-pane>
                        <el-tab-pane label="RU" name="ru">RU</el-tab-pane>
                        <el-tab-pane label="IT" name="it">IT</el-tab-pane>
                        <el-form :label-position="labelPosition" size="mini">
                            <el-form-item label="Spu" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="Sku" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="长(CM)" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="宽(CM)" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="高(CM)" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="体积重(KG)公式" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="重量(KG)" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="分值" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="状态" :label-width="formLabelWidth">
                                <el-select size="mini" v-model="statevalue" placeholder="请选择">
                                    <el-option
                                            v-for="item in status"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="时间" :label-width="formLabelWidth">
                                <el-date-picker
                                        class="datestymini"
                                        v-model="datevalue"
                                        size="mini"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="新产品开始日期"
                                        end-placeholder="新产品结束日期"
                                        value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="URL KEY" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="库存个数" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="打包销售个数" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="最小购买数" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="库存状态" :label-width="formLabelWidth">
                                <el-select size="mini" v-model="kcstatusvalue" placeholder="请选择">
                                    <el-option
                                            v-for="item in kcstatus"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="备注" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="价格部分" name="price">
                    <Price></Price>
                </el-tab-pane>
                <el-tab-pane label="Meat部分" name="meta">Meta部分</el-tab-pane>
                <el-tab-pane label="描述部分" name="discription">
                    <Desciption></Desciption>
                </el-tab-pane>
                <el-tab-pane label="图片信息" name="imginfo">
                    <Img></Img>
                </el-tab-pane>
                <el-tab-pane label="分类信息" name="kindinfo">
                    <Kindinfo></Kindinfo>
                </el-tab-pane>
                <el-tab-pane label="属性组" name="attrgroup">
                    <Attrgroup></Attrgroup>
                </el-tab-pane>
                <el-tab-pane label="相关产品" name="aboutp">
                    <Aboutpro></Aboutpro>
                </el-tab-pane>
            </el-tabs>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import Price from './goodsedit/Price'
    import Desciption from './goodsedit/Desciption'
    import Img from './goodsedit/Img'
    import Kindinfo from './goodsedit/KindInfo'
    import Attrgroup from './goodsedit/AttrGroup'
    import Aboutpro from './goodsedit/AboutPro'
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                attrGroups:[
                    {
                        label:'default',
                        value:0
                    },
                    {
                        label:'clothes_group',
                        value:1
                    },
                    {
                        label:'men_group',
                        value:2
                    },
                    {
                        label:'computer_group',
                        value:3
                    }
                ],
                status:[],
                kcstatus:[],
                labelPosition:'left',
                attrGroup:1,
                activeName:'basicinfo',
                activeLang:'en',
                dialogFormVisible:false,
                formLabelWidth:'120px',
                statevalue:2,
                totle:16,
                currentPage:1,
                pageSize:10,
                kcstatusvalue:2,
                datevalue: '',
                goodsname:'',
                spu:'',
                sku:'',
                kcbegin:'',
                kcend:'',

                multipleSelection: [],
                tableHeight:0
            };
        },
        methods: {
            cellStyle(){
                return "text-align:center"
            },
            rowStyle(){
                return "text-align:center"
            },
            editYou(row){
                this.dialogFormVisible = true;
            },
            deleteYou(row,index){

                this.$confirm('确定要删除此条商品数据吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    this.goodsdata.splice(index,1);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            handleSelectionChange(val) {
                console.log(val)
                this.multipleSelection = val;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pageSize = val;
            },
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage;
            },
            handleClick(tab,event){
                console.log(tab,event);
            },
            handleLang(tab,event){
                console.log(tab,event);
            }
        },
        computed: {
            ...mapGetters('goodsList',{
                goodsdata:'getgoods'
            }),
            ...mapGetters('basicData',{
                BasicData:'renderbasicData'
            })
        },
        components: {
            Price,
            Desciption,
            Img,
            Kindinfo,
            Attrgroup,
            Aboutpro
        },
        created(){
            this.tableHeight = document.documentElement.clientHeight - 284;
        },
        mounted() {
            this.$store.dispatch('goodsList/getGoodsList');
            this.$store.dispatch('basicData/getBasicData');
        }
    };
</script>

<style scoped>

    .datesty{
        width: 100%;
    }
    .datestymini{
        width: 80%;
    }
    .btn-group{
        padding: 10px 0px 0px 0px;
    }
    .head_pic{
        width: 100%;
    }
    .page-style{
        padding-top: 10px;
        padding-bottom: 10px;
        float: right;
    }
    .table-style{
        background: white;
        height: 100%;
    }
    .basicTop span.red{
        color: red;
        border: 1px dashed #00d1b2;
        display: inline-block;
        padding: 3px 5px;
        margin-bottom: 5px;
        font-size: 12px;
    }
    .language >>> .el-tabs__content{
        flex-grow: 1;
        height: 300px;
        overflow-y: scroll;
    }
    .language >>> .el-form-item--mini.el-form-item{
        margin-bottom: 10px;
    }
    .language >>>.el-input{
        width: 80%;
    }
</style>
