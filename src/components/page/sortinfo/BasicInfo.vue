<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="en" name="en">
                <el-row>
                    <el-col :span="12">
                        <el-form size="mini" label-width="140px">
                            <el-form-item label="分类名字[en]">
                                <el-input size="mini"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>

            </el-tab-pane>
            <el-tab-pane label="zh" name="zh">
                <el-row>
                    <el-col :span="12">
                        <el-form size="mini" label-width="140px">
                            <el-form-item label="分类名字[zh]">
                                <el-input size="mini"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>

            </el-tab-pane>
            <el-tab-pane label="fr" name="fr">
                <el-row>
                    <el-col :span="12">
                        <el-form size="mini" label-width="140px">
                            <el-form-item label="分类名字[fr]">
                                <el-input size="mini"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>

            </el-tab-pane>
            <el-tab-pane label="de" name="de">
                <el-row>
                    <el-col :span="12">
                        <el-form size="mini" label-width="140px">
                            <el-form-item label="分类名字[de]">
                                <el-input size="mini"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>

            </el-tab-pane>
            <el-tab-pane label="es" name="es">
                <el-row>
                    <el-col :span="12">
                        <el-form size="mini" label-width="140px">
                            <el-form-item label="分类名字[es]">
                                <el-input size="mini"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>

            </el-tab-pane>
            <el-tab-pane label="pt" name="pt">
                <el-row>
                    <el-col :span="12">
                        <el-form size="mini" label-width="140px">
                            <el-form-item label="分类名字[pt]">
                                <el-input size="mini"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>

            </el-tab-pane>
            <el-tab-pane label="ru" name="ru">
                <el-row>
                    <el-col :span="12">
                        <el-form size="mini" label-width="140px">
                            <el-form-item label="分类名字[ru]">
                                <el-input size="mini"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>

            </el-tab-pane>
            <el-tab-pane label="it" name="it">
                <el-row>
                    <el-col :span="12">
                        <el-form size="mini" label-width="140px">
                            <el-form-item label="分类名字[it]">
                                <el-input size="mini"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>

            </el-tab-pane>
        </el-tabs>
        <el-row>
            <el-col :span="12">
                <el-form size="mini" label-width="140px">
                    <el-form-item label="状态">
                        <el-select size="mini" v-model="statu">
                            <el-option
                                    v-for="item in status"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Menu是否显示">
                        <el-select size="mini" v-model="showmenu" placeholder="Menu是否显示">
                            <el-option
                                    v-for="item in showmenus"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Url Key">
                        <el-input size="mini"></el-input>
                    </el-form-item>
                    <el-form-item label="产品过滤属性">
                        <el-input size="mini"></el-input>
                    </el-form-item>
                    <el-form-item label="产品非过滤属性">
                        <el-input size="mini"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>

        <el-tabs class="language" v-model="activeLang1">
            <el-tab-pane label="EN" name="en">
                <span class="desc">描述信息[en]</span>
                <quillEditor class="quillEditor" ref="myTextEditor" v-model="content" :options="editorOption"></quillEditor>
            </el-tab-pane>
            <el-tab-pane label="ZH" name="zh">
                <span class="desc">描述信息[en]</span>
            </el-tab-pane>
            <el-tab-pane label="FR" name="fr">
                <span class="desc">描述信息[en]</span>
            </el-tab-pane>
            <el-tab-pane label="DE" name="de">
                <span class="desc">描述信息[en]</span>
            </el-tab-pane>
            <el-tab-pane label="ES" name="es">
                <span class="desc">描述信息[en]</span>
            </el-tab-pane>
            <el-tab-pane label="PT" name="pt">
                <span class="desc">描述信息[en]</span>
            </el-tab-pane>
            <el-tab-pane label="RU" name="ru">
                <span class="desc">描述信息[en]</span>
            </el-tab-pane>
            <el-tab-pane label="IT" name="it">
                <span class="desc">描述信息[en]</span>
            </el-tab-pane>
        </el-tabs>
        <el-tabs class="language" v-model="activeLang2">
            <el-tab-pane label="EN" name="en">
                <span class="desc">菜单自定义部分[en]</span>
                <quillEditor class="quillEditor" ref="myTextEditor" v-model="content" :options="editorOption"></quillEditor>
            </el-tab-pane>
            <el-tab-pane label="ZH" name="zh">
                <span class="desc">菜单自定义部分[en]</span>
            </el-tab-pane>
            <el-tab-pane label="FR" name="fr">
                <span class="desc">菜单自定义部分[en]</span>
            </el-tab-pane>
            <el-tab-pane label="DE" name="de">
                <span class="desc">菜单自定义部分[en]</span>
            </el-tab-pane>
            <el-tab-pane label="ES" name="es">
                <span class="desc">菜单自定义部分[en]</span>
            </el-tab-pane>
            <el-tab-pane label="PT" name="pt">
                <span class="desc">菜单自定义部分[en]</span>
            </el-tab-pane>
            <el-tab-pane label="RU" name="ru">
                <span class="desc">菜单自定义部分[en]</span>
            </el-tab-pane>
            <el-tab-pane label="IT" name="it">
                <span class="desc">菜单自定义部分[en]</span>
            </el-tab-pane>
        </el-tabs>
        <el-row class="upload-box">
            <el-col :span="3"><span class="span">缩略图</span></el-col>
            <el-col :span="4">
                <el-upload
                        action=""
                        list-type="picture-card"
                        >
                    <i class="el-icon-plus"></i>
                </el-upload>
            </el-col>
        </el-row>
        <el-row class="upload-box">
            <el-col :span="3"><span class="span">分类图</span></el-col>
            <el-col :span="4">
                <el-upload
                        action=""
                        list-type="picture-card"
                >
                    <i class="el-icon-plus"></i>
                </el-upload>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
    export default {
        data() {
            return {
                activeName:'en',
                activeLang1:'en',
                activeLang2:'en',
                status:[
                    {
                        label:'状态',
                        value:0
                    },
                    {
                        label:'激活',
                        value:1
                    },
                    {
                        label:'关闭',
                        value:2
                    }
                ],
                statu:0,
                showmenus:[
                    {
                        label:'是',
                        value:true
                    },
                    {
                        label:'否',
                        value:false
                    },
                ],
                showmenu:'',
                content:'',
                editorOption:{
                    placeholder: 'Hello World'
                },
            };
        },
        methods: {
            handleClick(){

            }
        },
        computed: {},
        components: {
            quillEditor
        }
    };
</script>

<style scoped>
    .quillEditor >>> .ql-container{
        min-height: 150px !important;
        height: 150px;
    }
    .quillEditor >>> .ql-editor{
        overflow-y: auto;
    }
    .desc{
        display: inline-block;
        font-size: 12px;
        padding: 2px 5px;
        border: 1px dashed #42B984;
        margin-bottom: 5px;
        color: #42B984;
        font-weight: 600;
    }
    .upload-box{
        margin-top: 10px;
    }
    .span{
        line-height: 148px;
        font-size: 13px;
    }
</style>
