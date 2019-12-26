<template>
    <el-table
            size="mini"
            :data="imgdata"
            border
            height="400"
            :cell-style="cellStyle"
            :header-cell-style="rowStyle"
            style="width: 100%">
        <el-table-column
                prop="imgurl"
                label="图片"
                width="130">
            <template slot-scope="scope">
                <el-upload
                        class="avatar-uploader"
                        action="http://localhost:8080/public/img"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                    <img v-if="scope.row.imgurl" :src="scope.row.imgurl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </template>
        </el-table-column>
        <el-table-column
                prop="tags"
                label="标签"
                width="150">
            <template slot-scope="scope">
                <el-input size="mini" v-model="scope.row.tags">
                </el-input>
            </template>
        </el-table-column>
        <el-table-column
                prop="orderby"
                label="排序"
                width="150">
            <template slot-scope="scope">
                <el-input size="mini">
                </el-input>
            </template>
        </el-table-column>
        <el-table-column
                prop="mainimg"
                label="主图"
                width="100">
            <template slot-scope="scope">
                <el-radio size="mini" v-model="scope.row.mainimg" label="1">是</el-radio>
            </template>
        </el-table-column>
        <el-table-column
                prop="ccimg"
                label="橱窗图"
                width="120">
            <template slot-scope="scope">
                <el-select size="mini" v-model="scope.row.ccimg" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </template>
        </el-table-column>
        <el-table-column
                prop="descimg"
                label="描述图"
                width="120">
            <template slot-scope="scope">
                <el-select size="mini" v-model="scope.row.descimg" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </template>
        </el-table-column>
        <el-table-column
                label="操作">
            <template slot-scope="scope">
                <el-button size="mini" type="primary" icon="el-icon-delete"></el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        data() {
            return {
                imgdata:[
                    {
                        imgurl:'img/goods.jpg',
                        tags:'',
                        orderby:'',
                        mainimg:'1',
                        ccimg:'1',
                        descimg:'1'
                    }
                ],
                options:[
                    {value:'1',label:'是'},
                    {value:'0',label:'否'}
                ],
            };
        },
        methods: {
            cellStyle(){
                return "text-align:center"
            },
            rowStyle(){
                return "text-align:center"
            },
            handleAvatarSuccess(res, file) {
                console.log(file);
                this.imgdata.imgurl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        },

        computed: {},
        components: {}
    };
</script>

<style scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader >>> .el-upload--text{
        width: auto;
        height: auto;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 80px;
        height: 80px;
        line-height: 80px;
        text-align: center;
    }
    .avatar {
        width: 80px;
        height: 80px;
        display: block;
    }
</style>
