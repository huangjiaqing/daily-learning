// 自定义系统的实现

const redux = require('redux');
const thunk = require('redux-thunk').default;

const initialState = {
  count: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 注册事件
    case 'INC':
      return {
        ...state,
        count: state.count + 1
      };
      break;
    default:
      return state;
  }
};

const store = redux.createStore(reducer, redux.applyMiddleware(thunk));

store.subscribe(() => {
  console.log('订阅成功');
});

// 分发事件
store.dispatch({ type: 'INC' });

store.dispatch((dispatch) => {
  dispatch({ type: 'INC' });
});
