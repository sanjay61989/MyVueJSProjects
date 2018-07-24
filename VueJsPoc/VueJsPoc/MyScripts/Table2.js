Vue.use(VueResource)
iview.lang('en-US');

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
            data6: [],
            rowName: '',
            rowAge: '',
            rowRollNo: '',
            showEditData: false,
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
                            h('strong', ' ' + params.row.Name)
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
                                        this.show(params.index, params)
                                    }
                                }
                            }, 'Edit'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index, params)
                                    }
                                }
                            }, 'Delete')
                        ]);
                    }
                }
            ]
        }
    },
    methods: {
        show (index, params) {
            this.showEditData = true

            //assgin to input fields
            this.rowName = this.data6[index].Name;
            this.rowRollNo = this.data6[index].RollNo;
            this.rowAge = this.data6[index].Age;

            //save current selection
            this.editRowIndex = index;
            this.editParams = params;
        },
        remove (index, params) {
            this.data6.splice(index, 1);
        },
        editData() {
            var index = this.editRowIndex;        

            this.data6[index].Name = this.rowName;
            this.data6[index].Age = this.rowAge
            this.data6[index].RollNo = this.rowRollNo;

            this.showEditData = false;
        }
    }
})
new EditTableComponent().$mount('#app-11')