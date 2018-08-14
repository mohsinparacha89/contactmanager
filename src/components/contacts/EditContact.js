import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";
class EditContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors: {}
    };

    async componentDidMount(){
        const {id} = this.props.match.params;
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);

        const contact = res.data;
        this.setState ({
            name: contact.name,
            email : contact.email,
            phone : contact.phone 
        })
    }


    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        //validation checks

        if (name === "") {
            this.setState({
                errors: {
                    name: "Name is Required"
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
        if (phone === "") {
            this.setState({
                errors: {
                    phone: "Phone Number is Required"
                }
            });
            return;
        }
        //clearing state
        this.setState({
            name: "",
            email: "",
            phone: "",
            errors: {}
        });
        this.props.history.push("/");
    };
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div className="card mb-3">
                            <div className="card-header">Edit Contact </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name..."
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        placeholder="Enter E-mail..."
                                        value={email}
                                        type="email"
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone Number"
                                        name="phone"
                                        placeholder="Enter Phone Number..."
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input
                                        type="submit"
                                        value="Update Contact"
                                        className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default EditContact;
