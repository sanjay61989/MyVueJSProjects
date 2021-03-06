﻿Vue.use(VueResource)
iview.lang('en-US');

var Component1 = Vue.extend({
    beforeCreate: function () {
        Vue.http.get('/Home/GetUsers').then(res => {
            this.data1 = res.body;
        }, err => {
            console.log(err);
        });
    },
    data () {
        return {
            columns1: [
                {
                    title: 'Name',
                    key: 'Name'
                },
                {
                    title: 'Age',
                    key: 'Age'
                },
                {
                    title: 'Roll No',
                    key: 'RollNo'
                }
            ],
            data1: []
        }
    }
})
new Component1().$mount('#app-9')



var EditTableComponent = Vue.extend({
    beforeCreate: function () {
        Vue.http.get('/Home/GetUsers').then(res => {
            this.data6 = res.body;
        }, err => {
            console.log(err);
        });
    },
    data () {
        return {
            columns7: [
                {
                    title: 'Name',
                    key: 'Name',
                    render: (h, params) => {
                        return h('div', [
                            h('Icon', {
                                props: {
                                    type: 'person'
                                }
                            }),
                            h('strong', ' '+params.row.Name)
                        ]);
                    }
                },
                {
                    title: 'Age',
                    key: 'Age',
                    sortable: true
                },
                {
                    title: 'Roll No',
                    key: 'RollNo',
                    sortable: true
                },
                {
                    title: 'Action',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, 'View'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, 'Delete')
                        ]);
                    }
                }
            ],
            data6: [],
            rowName:"vinod",
            rowAge:31,
            rowRollNo:1,
        }
    },
    methods: {
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data6[index].Name}<br>Age：${this.data6[index].Age}<br>Roll No：${this.data6[index].RollNo}`
            })
        },
        remove (index) {
            this.data6.splice(index, 1);
        },
        pushData() {
            this.data6.push({
                Name: this.rowName,
                Age: this.rowAge,
                RollNo: this.rowRollNo
            })
        }
    }
})
new EditTableComponent().$mount('#app-10')