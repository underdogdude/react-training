import React, { Component } from 'react';
import './App.css';
import './styles.css';
import 'normalize.css';

import FormItems from './components/formItem';
import ListItems from './components/listItem';

class App extends Component {

  state = { items:[],total:0 };

  submit = (item) => { 

    this.setState((state) => { 
      let items = state.items.concat(item);
      return {
        items,
        total: this.updateTotal(items)
      }
    });
  }
  onRemove = (key) => {

    this.setState((state) => {
      let items = state.items.filter((item,i) => { 
        return (i !== key ) 
      })

      return {
        items,
        total: this.updateTotal(items)
      }
    })    
  }

  updateTotal = (array) => {
    if(array.length) {
      return array.map(item =>  item.number ).reduce((item,total) => {
          return Number(item) + Number(total);
      })
    }

    return 0;
  }

  render() {
    return (
      <div className="block" style={{ display: "flex", justifyContent: "center", flexDirection: "column",textAlign:"center" }}>
        <br />
        <FormItems  onSubmit={this.submit} />
        <div>
          <ListItems  items={this.state.items} total={this.state.total} onRemoveApp={ this.onRemove } />
        </div>
      </div>
    );
  }
}

export default App;
