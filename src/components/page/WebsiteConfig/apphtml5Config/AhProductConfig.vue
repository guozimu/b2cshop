<template>
    <div>
        <el-form size="mini" label-width="250px" label-position="left">
            <el-form-item label="分类页面-显示面包屑导航">
                <el-select size="mini" v-model="kindisshownav" placeholder="分类页面-显示面包屑导航">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">分类页面是否显示面包屑导航</span>
            </el-form-item>
            <el-form-item label="分类页面-侧栏默认过滤属性">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
                <span class="help-info">J注意：1.产品分类Service需要指定为Mongodb存储才生效(参看：services数据库配置) 2.做侧栏分类产品过滤的属性，必须是select（editSelect）类型的，其他的类型请不要用</span>
            </el-form-item>
            <el-form-item label="分类页面-侧栏是否显示其他分类">
                <el-select size="mini" v-model="kindisshowother" placeholder="分类页面-侧栏是否显示其他分类">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">分类侧栏过滤部分，是否显示子分类列表</span>
            </el-form-item>
            <el-form-item label="分类页面-侧栏是否显示价格过滤">
                <el-select size="mini" v-model="kindishowprice" placeholder="分类页面-侧栏是否显示价格过滤">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">分类侧栏过滤部分，是否显示价格过滤</span>
            </el-form-item>
            <el-form-item label="分类页面-每页产品的列举个数">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
                <span class="help-info">产品显示个数的列举</span>
            </el-form-item>
            <el-form-item label="分类页面-产品价格过滤区间">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
                <span class="help-info">产品价格区间，英文逗号隔开，中间不要有空格</span>
            </el-form-item>
            <el-form-item label="分类页面-规格产品只显示一个sku？">
                <el-select size="mini" v-model="kindisshowsku" placeholder="分类页面-规格产品只显示一个sku">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">分类产品列表，如果spu下的多个sku,Yes代表只显示一个sku（score最高的Sku）,No代表产品全部显示</span>
            </el-form-item>
            <el-form-item label="产品页面-显示面包屑导航">
                <el-select size="mini" v-model="proisshownav" placeholder="产品页面-显示面包屑导航">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">产品页面是否显示面包屑导航</span>
            </el-form-item>
            <el-form-item label="产品页面-小图Width">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
                <span class="help-info">产品橱窗图的宽度（px）</span>
            </el-form-item>
            <el-form-item label="产品页面-小图Height">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
                <span class="help-info">产品橱窗图的高度（px）</span>
            </el-form-item>
            <el-form-item label="产品页面-中图Width">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
                <span class="help-info">产品中等橱窗图的宽度（px）</span>
            </el-form-item>
            <el-form-item label="产品页面-是否放大镜方式查看图片">
                <el-select size="mini" v-model="proislook" placeholder="产品页面-是否放大镜方式查看图片">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">是否已放大镜的方式显示，如果否，则是内窥的方式查看</span>
            </el-form-item>
            <el-form-item label="产品评论页面-验证码开启">
                <el-select size="mini" v-model="procommoncheckcode" placeholder="产品评论页面-验证码开启">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">Review页面是否开启验证码验证</span>
            </el-form-item>
            <el-form-item label="产品页面-评论显示个数">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
                <span class="help-info">在产品页面显示的review的个数</span>
            </el-form-item>
            <el-form-item label="产品评论页面-评论显示个数">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
                <span class="help-info">在review列表页面，显示的review的个数</span>
            </el-form-item>
            <el-form-item label="产品评论-登陆用户才能评论">
                <el-select size="mini" v-model="islogincommon" placeholder="产品评论-登陆用户才能评论">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">是否只有登录用户才有资格进行评论</span>
            </el-form-item>
            <el-form-item label="产品评论-通过语言过滤评论">
                <el-select size="mini" v-model="filtercommon" placeholder="产品评论-通过语言过滤评论">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">是否通过语言进行评论过滤？No代表显示所有语言的评论</span>
            </el-form-item>
            <el-form-item label="产品评论-下单后评论限制">
                <el-input size="mini" class="input-sty" suffix-icon="xxx"></el-input>
                <span class="help-info">订单创建后，多久内可以进行评论，超过这个期限将不能评论产品（单位为月）, 当 reviewOnlyOrderedProduct 设置为true时有效</span>
            </el-form-item>
            <el-form-item label="产品评论-只能评价用户下单的产品">
                <el-select size="mini" v-model="commonbyorder" placeholder="产品评论-只能评价用户下单的产品">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">Yes：代表用户购物过的产品才能评论，No：代表用户没有购买的产品也可以评论</span>
            </el-form-item>
            <el-form-item label="产品收藏成功后是否跳转到账户中心">
                <el-select size="mini" v-model="collectedisjustcenter" placeholder="产品收藏成功后是否跳转到账户中心">
                    <el-option
                            v-for="item in BasicData.jscsscopy"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <span class="help-info">产品收藏成功后是否跳转到账户中心的收藏列表</span>
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
                kindisshownav:'',
                kindisshowother:'',
                kindishowprice:'',
                kindisshowsku:'',
                proisshownav:'',
                proislook:'',
                procommoncheckcode:'',
                islogincommon:'',
                filtercommon:'',
                commonbyorder:'',
                collectedisjustcenter:''
            };
        },
        methods: {},
        computed: {},
        components: {}
    };
</script>

<style scoped>
    .input-sty{
        width: auto;
    }
</style>
