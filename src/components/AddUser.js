import React , {Component} from "react";

class AddUser extends Component {
    render() {


  return (
    <div className="card">
       <h3 className="card-header"> Add new User</h3>
       <div className="card-body">
        <form>
        <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Enter name" className="form-control"></input>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" placeholder="Enter eamil" className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-danger btn-block">Add New User</button>
            
        </form>
       </div>

        </div>
  )
}
}

export default AddUser