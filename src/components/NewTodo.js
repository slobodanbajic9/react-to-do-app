import React, {Component} from "react";

class NewTodo extends Component {
  state = {
    msg : "",
    done : false
  }

  setNewMessage = (e) => {
    this.setState({
      msg : e.target.value
    })
  }

  addTodo = () => {
    this.props.addInTodos(this.state);
    this.setState({msg:""})
  }

  render() {
    return (
      <div className="container">
        <div className="row m-5">
          <div className="col-8 offset-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="New Message" onChange={this.setNewMessage} value={this.state.msg} />
              <div className="input-group-append">
                <button onClick={this.addTodo} className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewTodo;