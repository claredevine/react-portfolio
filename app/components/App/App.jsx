import React from 'react';
import AppActions from '../../actions/AppActions';
import ItemsStore from '../../stores/ItemsStore';
import Work from "../Body/Work";
import Recognition from "../Body/Recognition";
import Features from "../Body/Features";

function getAppState() {
  return {
    items: ItemsStore.getAll()
  };
}

export default class App extends React.Component {

  state = getAppState();

  componentDidMount() {
    ItemsStore.addChangeListener(this.onChange);
    AppActions.getItems();
  }

  componentWillUnmount() {
    ItemsStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  render() {
    return (
      <div>
        <Work />
        <Recognition />
        <Features />
      </div>
    );
  }
}
