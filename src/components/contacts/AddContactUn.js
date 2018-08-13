import React, { Component } from "react";

class AddContact extends Component {

    constructor(props){
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneNumberInput = React.createRef();
    }
    onSubmit = e => {
        e.preventDefault();
        const contact = {
            name : this.nameInput.current.value,
            email : this.emailInput.current.value,
            phoneNumber : this.phoneNumberInput.current.value
        }
        console.log(contact)

    };

    static defaultProps = {
        name : "karen",
        email : "karen.lum@lora.com",
        phoneNumber : "2394862394"
    }

    render() {
        const { name, email, phoneNumber } = this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control form-control-lg"
                                placeholder="Enter Name..."
                                defaultValue={name}
                                ref = {this.nameInput}
                         
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Email..."
                                defaultValue={email}
                                ref = {this.emailInput}
                           
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="text">Phone Number</label>
                            <input
                                type="phoneNumber"
                                name="phoneNumber"
                                className="form-control form-control-lg"
                                placeholder="Enter Phone Number..."
                                defaultValue={phoneNumber}
                                ref = {this.phoneNumberInput}
                        
                            />
                        </div>
                        <input
                            type="submit"
                            value="Add Contact"
                            className="btn btn-light btn-block"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;
