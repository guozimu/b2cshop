<template>
    <div>
        <el-tabs class="language" v-model="activeLang">
            <el-tab-pane label="EN" name="en">
                <span class="desc">简短描述[en]</span>
                <quillEditor class="quillEditor" ref="myTextEditor" v-model="content" :options="editorOption"></quillEditor>
            </el-tab-pane>
            <el-tab-pane label="ZH" name="zh">
                <span class="desc">简短描述[en]</span>
            </el-tab-pane>
            <el-tab-pane label="FR" name="fr">
                <span class="desc">简短描述[en]</span>
            </el-tab-pane>
            <el-tab-pane label="DE" name="de">
                <span class="desc">简短描述[en]</span>
            </el-tab-pane>
            <el-tab-pane label="ES" name="es">
                <span class="desc">简短描述[en]</span>
            </el-tab-pane>
            <el-tab-pane label="PT" name="pt">
                <span class="desc">简短描述[en]</span>
            </el-tab-pane>
            <el-tab-pane label="RU" name="ru">
                <span class="desc">简短描述[en]</span>
            </el-tab-pane>
            <el-tab-pane label="IT" name="it">
                <span class="desc">简短描述[en]</span>
            </el-tab-pane>
        </el-tabs>
        <el-tabs class="language" v-model="activeLang">
            <el-tab-pane label="EN" name="en">
                <span class="desc">简短描述[en]</span>
                <quillEditor class="quillEditor" ref="myTextEditor" v-model="content" :options="editorOption"></quillEditor>
            </el-tab-pane>
            <el-tab-pane label="ZH" name="zh"></el-tab-pane>
            <el-tab-pane label="FR" name="fr">FR</el-tab-pane>
            <el-tab-pane label="DE" name="de">DE</el-tab-pane>
            <el-tab-pane label="ES" name="es">ES</el-tab-pane>
            <el-tab-pane label="PT" name="pt">PT</el-tab-pane>
            <el-tab-pane label="RU" name="ru">RU</el-tab-pane>
            <el-tab-pane label="IT" name="it">IT</el-tab-pane>
        </el-tabs>
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
                content:'',
                editorOption:{
                    placeholder: 'Hello World'
                },
                activeLang:'en'
            };
        },
        methods: {},
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
        overflow-y: scroll;
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
</style>
