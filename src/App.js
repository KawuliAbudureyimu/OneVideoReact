

import React , { Component } from 'react';
import AddUser   from './components/AddUser';
import Users from './components/Users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      users:[
        {
          id :1,
          name : "alim samat",
          email : "alim@aa.com"
        },
        {
          id :2,
          name : "sadi mamat",
          email : "sadi@aa.com"
        },
        {
          id :3,
          name : "gul samat",
          email : "gulsamat@aa.com"
        },
      ]
    };
  }
  render(){
    
    
  return (
    <div className='container'>
      
      <h1>Usre App</h1>
     <hr />
     <AddUser />
     <hr />
     <Users  users = {this.state.users}/>
    </div>
  );
}
}
export default App;
