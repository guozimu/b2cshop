<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="2" v-if="BasicData">
                <el-select size="mini" v-model="statevalue" :placeholder="$t('ph.status')">
                    <el-option
                            v-for="item in BasicData.status"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="2" v-if="BasicData">
                <el-select size="mini" v-model="kcstatusvalue" :placeholder="$t('ph.kcstatus')">
                    <el-option
                            v-for="item in BasicData.kcstatus"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="2">
               <el-input v-model="goodsname" size="mini" :placeholder="$t('ph.goodsname')"></el-input>
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
                            :range-separator="$t('ph.to')"
                            :start-placeholder="$t('ph.datebegin')"
                            :end-placeholder="$t('ph.dateend')"
                            value-format="yyyy-MM-dd">
                    </el-date-picker>
                </div>
            </el-col>
            <el-col :span="2">
                <el-input v-model="kcbegin" size="mini" :placeholder="$t('ph.kcstart')"></el-input>
            </el-col>
            <el-col :span="2">
                <el-input v-model="kcend" size="mini" :placeholder="$t('ph.kcend')"></el-input>
            </el-col>
            <el-col :span="2" :offset="3" style="text-align: right">
                <el-button size="mini" type="primary">{{ $t('btn.search') }}</el-button>
            </el-col>
        </el-row>
        <el-row class="btn-group">
            <el-button size="mini" type="primary">{{ $t('btn.add') }}</el-button>
            <el-button size="mini" type="warning">{{ $t('btn.batchadd') }}</el-button>
            <el-button size="mini" type="warning">{{ $t('btn.edit') }}</el-button>
            <el-button size="mini" type="danger">{{ $t('btn.batchdel') }}</el-button>
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
                        :label="$t('table.img')"
                        width="100">
                    <template slot-scope="scope">
                        <el-image
                                :src="scope.row.img"
                                :preview-src-list="[scope.row.img]">
                        </el-image>
                　　</template>
                </el-table-column>
                <el-table-column
                        prop="title"
                        :label="$t('table.title')"
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
                        :label="$t('table.kcnum')"
                        width="">
                </el-table-column>
                <el-table-column
                        prop="weight"
                        :label="$t('table.weight')"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="status"
                        :label="$t('table.status')"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="price"
                        :label="$t('table.price')"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="founder"
                        :label="$t('table.founder')"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="creattime"
                        :label="$t('table.creattime')"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="updatetime"
                        :label="$t('table.updatetime')"
                        width="120">
                </el-table-column>
                <el-table-column
                        :label="$t('table.operation')"
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
                    :total="goodsdata.length">
            </el-pagination>
        </el-row>

        <!--模态框-->
        <el-dialog :title="$t('dialog.title')" :visible.sync="dialogFormVisible">
            <el-tabs v-model="activeName" class="editsty" @tab-click="handleClick">
                <el-tab-pane :label="$t('dialog.basicinfo')" name="basicinfo">
                    <div class="basicTop">
                        <div>
                            <span class="red">{{$t('dialog.switchtips')}}</span>
                        </div>
                        <el-select size="mini" v-model="attrGroup" :placeholder="$t('ph.common')">
                            <el-option
                                    v-for="item in BasicData.attrGroups"
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
                            <el-form-item :label="$t('dialog.long')" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item :label="$t('dialog.width')" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item :label="$t('dialog.height')" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item :label="$t('dialog.weightformula')" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item :label="$t('dialog.weight')" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item :label="$t('dialog.score')" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item :label="$t('dialog.status')" :label-width="formLabelWidth">
                                <el-select size="mini" v-model="statevalue" :placeholder="$t('ph.common')">
                                    <el-option
                                            v-for="item in BasicData.status"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item :label="$t('dialog.time')" :label-width="formLabelWidth">
                                <el-date-picker
                                        class="datestymini"
                                        v-model="datevalue"
                                        size="mini"
                                        type="daterange"
                                        :range-separator="$t('ph.to')"
                                        :start-placeholder="$t('ph.newprobegin')"
                                        :end-placeholder="$t('ph.newproend')"
                                        value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="URL KEY" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item :label="$t('dialog.stockqty')" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item :label="$t('dialog.packagesalesqty')" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item :label="$t('dialog.min')" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item :label="$t('dialog.kcstatus')" :label-width="formLabelWidth">
                                <el-select size="mini" v-model="kcstatusvalue" :placeholder="$t('ph.common')">
                                    <el-option
                                            v-for="item in BasicData.kcstatus"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item :label="$t('dialog.remark')" :label-width="formLabelWidth">
                                <el-input size="mini" auto-complete="off"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-tabs>
                </el-tab-pane>
                <el-tab-pane :label="$t('dialog.price')" name="price">
                    <Price></Price>
                </el-tab-pane>
                <el-tab-pane :label="$t('dialog.meat')" name="meta">Meta部分</el-tab-pane>
                <el-tab-pane :label="$t('dialog.discription')" name="discription">
                    <Desciption></Desciption>
                </el-tab-pane>
                <el-tab-pane :label="$t('dialog.imginfo')" name="imginfo">
                    <Img></Img>
                </el-tab-pane>
                <el-tab-pane :label="$t('dialog.kindinfo')" name="kindinfo">
                    <Kindinfo></Kindinfo>
                </el-tab-pane>
                <el-tab-pane :label="$t('dialog.attrgroup')" name="attrgroup">
                    <Attrgroup></Attrgroup>
                </el-tab-pane>
                <el-tab-pane :label="$t('dialog.aboutp')" name="aboutp">
                    <Aboutpro></Aboutpro>
                </el-tab-pane>
            </el-tabs>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">{{$t('btn.cancel')}}</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">{{$t('btn.ok')}}</el-button>
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
                status:[],
                kcstatus:[],
                labelPosition:'left',
                attrGroup:1,
                activeName:'basicinfo',
                activeLang:'en',
                dialogFormVisible:false,
                formLabelWidth:'120px',
                statevalue:'',
                pageSize:10,
                currentPage:1,
                kcstatusvalue:'',
                datevalue: '',
                goodsname:'',
                spu:'',
                sku:'',
                kcbegin:'',
                kcend:'',
                BasicData:JSON.parse(localStorage.getItem('basicdata')),
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

                this.$confirm(this.$t('info.deltips'), this.$t('info.tips'), {
                    confirmButtonText: this.$t('btn.ok'),
                    cancelButtonText: this.$t('btn.cancel'),
                    type: 'warning',
                    center: true
                }).then(() => {
                    this.goodsdata.splice(index,1);
                    this.$message({
                        type: 'success',
                        message: this.$t('info.delsuccess')
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: this.$t('info.delfail')
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
