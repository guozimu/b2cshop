<template>
    <div class="attrgroup">
        <el-form size="mini" label-width="100px">
            <el-form-item label="领口">
                <el-select v-model="value" size="mini" placeholder="">
                    <el-option label="领口" value="1"></el-option>
                    <el-option label="round-neck" value="2"></el-option>
                    <el-option label="v-meck" value="3"></el-option>
                    <el-option label="hooded" value="4"></el-option>
                    <el-option label="turn-down-collar" value="5"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="袖长">
                <el-select v-model="value1" size="mini" placeholder="">
                    <el-option label="袖长" value="1"></el-option>
                    <el-option label="sleeveless" value="2"></el-option>
                    <el-option label="short-Sleeves" value="3"></el-option>
                    <el-option label="half-Sleeves" value="4"></el-option>
                    <el-option label="3-4-length-sleeves" value="5"></el-option>
                    <el-option label="long-sleeves" value="6"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="图案类型">
                <el-select v-model="value2" size="mini" placeholder="">
                    <el-option label="图案类型" value="1"></el-option>
                    <el-option label="animal" value="2"></el-option>
                    <el-option label="character" value="3"></el-option>
                    <el-option label="floral" value="4"></el-option>
                    <el-option label="geometric" value="5"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="样式">
                <el-select v-model="value3" size="mini" placeholder="">
                    <el-option label="样式" value="1"></el-option>
                    <el-option label="casual" value="2"></el-option>
                    <el-option label="cute" value="3"></el-option>
                    <el-option label="brief" value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="裙长">
                <el-select v-model="value4" size="mini" placeholder="">
                    <el-option label="裙长" value="1"></el-option>
                    <el-option label="long" value="2"></el-option>
                    <el-option label="mini" value="3"></el-option>
                    <el-option label="floor-length" value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="颜色">
                <el-select v-model="value5" size="mini" placeholder="">
                    <el-option label="颜色" value="1"></el-option>
                    <el-option label="red" value="2"></el-option>
                    <el-option label="blue" value="3"></el-option>
                    <el-option label="black" value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="尺码">
                <el-select v-model="value6" size="mini" placeholder="">
                    <el-option label="尺码" value="1"></el-option>
                    <el-option label="S" value="2"></el-option>
                    <el-option label="M" value="3"></el-option>
                    <el-option label="L" value="4"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value:'1',
                value1:'1',
                value2:'1',
                value3:'1',
                value4:'1',
                value5:'1',
                value6:'1'
            };
        },
        methods: {},
        computed: {},
        components: {}
    };
</script>

<style scoped>

</style>
