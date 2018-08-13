import React, { Component } from "react";
import {Consumer} from "../../context"
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";
class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    errors:{

    }
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const {name, email, phoneNumber} = this.state;

    //validation checks

    if(name === ""){
      this.setState({
        errors : {
          name : "Name is Required"
        }
      });
      return;
    }

    if (email === "") {
      this.setState({
        errors: {
          email: "Email is Required"
        }
      });
      return;
    }
    if (phoneNumber === "") {
      this.setState({
        errors: {
          phoneNumber: "Phone Number is Required"
        }
      });
      return;
    }
    const newContact = {
      id:uuid(),
      name, //or name : name
      email, // or email : email // when left and right are the same you can just put one ;)
      phoneNumber, 
    }

    dispatch({ type: "ADD_CONTACT", payload: newContact});

    //clearing state
    this.setState({
      name:"",
      email:"",
      phoneNumber : "",
      errors : {}
    });
  }
  onChange = e => this.setState({[e.target.name]: e.target.value});


  render() {
    const { name, email, phoneNumber , errors} = this.state;

    return(
      <Consumer>
        {value => {
          const {dispatch} = value;

          return(
            <div className="card mb-3">
              <div className="card-header">Add Contact </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                    <TextInputGroup 
                    label = "Name"
                    name = "name"
                    placeholder = "Enter Name..."
                    value = {name}
                    onChange = {this.onChange}
                    error = {errors.name}                                      
                    />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter E-mail..."
                    value={email}
                    type = "email"
                    onChange={this.onChange}
                    error = {errors.email}
                  />
                  <TextInputGroup
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="Enter Phone Number..."
                    value={phoneNumber}
                    onChange={this.onChange}
                    error = {errors.phoneNumber}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;
