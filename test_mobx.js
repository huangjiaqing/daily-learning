const mobx = require('mobx');

const Todo = mobx.decorate(
  class {
    constructor() {
      this.id = Math.random();
      this.title = '';
      this.finished = false;
    }

    changeTitle() {
      this.title = 'hello';
    }
  },
  {
    title: mobx.observable, // 给这个属性定义setter，getter
    finished: mobx.observable,
    changeTitle: mobx.action,
  }
);

const todo = new Todo();

const todoList = mobx.observable({
  list: [],
});

mobx.autorun(() => {
  console.log('current todo list: ', Array.from(todoList.list));
});

mobx.autorun(() => {
  console.log('todo的名字被改变啦：' + todo.title);
});

todoList.list.push(todo);
todoList.list.push(todo);
