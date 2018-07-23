Vue.use(VueResource)
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


var Component2 = Vue.extend({
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
                    key: 'Name',
                    sortable:true
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
                    width: 120,
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                }
                            }, 'View'),
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                }
                            }, 'Edit')
                        ]);
                    }
                }
            ],
            data1: []
        }
    }
})
new Component2().$mount('#app-10')