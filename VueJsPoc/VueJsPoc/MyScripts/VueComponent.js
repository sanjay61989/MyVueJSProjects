//vue component example
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
          { id: 0, text: 'Vegetables' },
          { id: 1, text: 'Cheese' },
          { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})

//life cycle of vue 
var app8 = new Vue({
    el: "#app-8",
    data: {
        a: 'hello'        
    },
    beforeCreate: function () {
        console.log('before create');
        this.b = this.b + ' before created';
    },
    created: function () {
        console.log('created');
    },
    beforeMount: function () {
        console.log('before mount');
    },
    mounted: function () {
        console.log('mounted');
    },
    beforeUpdate: function () {
        console.log('before update');
    },
    updated: function () {
        console.log('updated');
    },
    beforeDestroy: function () {
        console.log("before destroy")
    },
    destroyed: function () {
        console.log("destroyed")
    },
    methods: {
        destroy: function () {
            this.$destroy();
        }
    }
})