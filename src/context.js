import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    case "ADD_CONTACT":
      return {
        ...state,
        contacts : [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "john@doe.com",
        phoneNumber: "+925353637"
      },
      {
        id: 2,
        name: "Karen",
        email: "karen@lum.com",
        phoneNumber: "+877262822"
      },
      {
        id: 3,
        name: "camille khan",
        email: "camielle@khan.com",
        phoneNumber: "+60123123123"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
    
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
