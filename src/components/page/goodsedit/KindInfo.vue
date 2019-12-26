<template>
    <el-tree
            :data="kinddata"
            show-checkbox
            default-expand-all
            node-key="id"
            :default-checked-keys="[1,2]"
            ref="tree"
            highlight-current
            :props="defaultProps">
    </el-tree>
</template>

<script>
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
                }
            };
        },
        methods: {},
        computed: {},
        components: {}
    };
</script>

<style scoped>

</style>
