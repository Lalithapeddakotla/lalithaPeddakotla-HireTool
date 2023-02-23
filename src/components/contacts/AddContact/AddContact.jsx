import React, { useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";

let AddContact = () => {

    let navigate = useNavigate();


    let [state, setState] = useState({
        loading: false,
        contacts: {
            name: '',
            image: '',
            email: '',
            primaryskills: '',
            experience: ''

        },


        errorMessage: ''
    });
    let updateInput = (event) => {
        setState({
            ...state,
            contacts: {
                ...state.contacts,
                [event.target.name]: event.target.value
            }
        });
    };
    let submitForm = async (event) => {
        event.preventDefault();
        try {
            let response = await ContactService.createcontacts(state.contacts);
            if (response) {
                navigate('/contacts/list', { replace: true });
            }

        }
        catch (error) {
            setState({ state, errorMessage: error.message });
            navigate('/contacts/add', { replace: false });

        }

    }

    let { loading, contacts, errorMessage } = state;
    return (

        <React.Fragment>
            <pre>{JSON.stringify(contacts)}</pre>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success">create New Candidate</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <form onSubmit={submitForm}>
                            <div className="mb-2">
                                <input 
                                required ={true}
                                name ="name"
                                value={contacts.name}
                                onChange={updateInput}
                                type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="mb-2">
                                <input
                                    required={true}
                                    name="image"
                                    value={contacts.image}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="photoURL" />
                            </div>
                            <div className="mb-2">
                                <input
                                    required={true}
                                    name="email"
                                    value={contacts.email}
                                    onChange={updateInput}
                                    type="email" className="form-control" placeholder="email" />
                            </div>
                            <div className="mb-2">
                                <input
                                    required={true}
                                    name="primaryskills"
                                    value={contacts.primaryskills}
                                    onChange={updateInput}
                                    type="primaryskills" className="form-control" placeholder="primaryskills" />
                            </div>
                            <div className="mb-2">
                                <input
                                    required={true}
                                    name="experience"
                                    value={contacts.experience}
                                    onChange={updateInput}
                                    type="experience" className="form-control" placeholder="experience" />
                            </div>
                            <div className="mb-2 my-2">
                                <input type="submit" className="btn btn-success " value="Create" />
                                <Link to={'/contacts/list'} className="btn btn-dark ms-2">Close</Link>
                            </div>

                        </form>
                    </div>
                </div>

            </section>
        </React.Fragment>
    )
}

export default AddContact;