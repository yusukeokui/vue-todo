var app = new Vue({
    el: '#root',
    data: {
        newName: '',
        todos: [{name: '打合せ', finished: false}, {name: '実装', finished: true},],
    },
    computed: {
        finishedTodos: function () {
            return this.todos.filter(function (todo) {
                return todo.finished;
            });
        },
        unfinishedTodos: function () {
            return this.todos.filter(function (todo) {
                return !todo.finished;
            });
        },
    },
    methods: {
        add: function () {
            if (this.newName !== 0 && !this.newName) return;
            this.todos.push({
                name: this.newName,
                finished: false,
            });
            this.newName = '';
        },
        remove: function (target) {
            this.todos = this.todos.filter(function (todo) {
                return todo.name !== target.name || todo.finished !== target.finished;
            });
        },
        update: function (todo) {
            todo.finished = !todo.finished;
        }
    }
});