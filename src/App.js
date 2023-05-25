

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
    this.deleteUser=this.deleteUser.bind(this);
    this.addUser=this.addUser.bind(this);
  } 
    addUser(newUser){
      let updateUsers =this.state.users;
      updateUsers.push(newUser);

      this.setState({
        users:updateUsers
      });
    }
    deleteUser(id){

      let upDateUsers =this.state.users;
   
      upDateUsers=upDateUsers.filter(user => user.id !==id);
   
      this.setState({
       users:upDateUsers
      });
}
  
  render(){
    
    
  return (
    <div className='container'>
      
      <h1>Usre App</h1>
     <hr />
     <AddUser addUser={this.addUser} />
     <hr />
     <Users  deleteUser={this.deleteUser} users = {this.state.users}/>
    </div>
  );
}
}
export default App;
