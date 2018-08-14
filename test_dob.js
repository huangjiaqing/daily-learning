const dob = require('dob');

const obj = dob.observable({});

let runCount = 0;

// 依赖收集 + 触发回调
dob.observe(() => {
  runCount ++;
  // observe一边监听用到了哪些变量，另一边在这些变量改变后，执行回调函数。
  // obj.text ==> 使用了 getter 进行了依赖收集，当且仅当 obj.text 发生变化，此观察者才会被通知。
  console.log(`text: ${obj.text} & runCount: ${runCount}`);
});

function changeText(value) {
  obj.text = value;
}

function changeName(name) {
  obj.name = name;
}

// changeText('lala');
changeName('hjq'); // 此时observe不会被调用，只有依赖于obj.name的观察者，才会被调用。
