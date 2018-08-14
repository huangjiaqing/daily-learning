import React from 'react';
import ReactDOM from 'react-dom';
import { Action, observable, combineStores, inject } from "dob";
import { Provider, Connect } from "dob-react";

@observable
export class UserStore {
  name = "bob";
}

export class UserAction {
  @inject(UserStore) userStore

  @Action
  setName() {
    this.userStore.name = "lucy";
  }
}

@Connect
class App extends React.Component {
  render() {
    return (
      <span onClick={this.props.UserAction.setName}>
        {this.props.UserStore.name}
      </span>
    );
  }
}

ReactDOM.render(
  <Provider
    {...combineStores({
      UserStore,
      UserAction
    })}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);
