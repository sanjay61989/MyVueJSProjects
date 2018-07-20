var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    },
    methods: {
        showMessage: function () {
            this.seen = !this.seen;
        }
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
    }
})

var app6 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue!'
    }
})