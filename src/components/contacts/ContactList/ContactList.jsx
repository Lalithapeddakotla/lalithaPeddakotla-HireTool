import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
//import contacts from "../../../../RestApi/src/models/contacts";
//import { ContactService } from "../../../services/ContactService";
import Spinner from "../../spinner/Spinner";
//import _ from "lodash";
import { ContactService } from "../../../services/ContactService";
import axios from "axios";

let ContactList = () => {

    let[query, setQuery]= useState({
        text:'',
    });
    let [Data, setData] = useState();




    let [state, setState] = useState({
        loading: false,
        contacts: [{
            "name": '',
            "email": '',
            "primaryskills": '',
            "experience": '',
            "image": '',
        }

        ],
        filteredContacts:[],
        errorMessage: ''
    });

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await ContactService.getALLcontacts();
            console.log(response.data.data)
            setState({
                state,
                loading: false,
                contacts: response.data.data,
                filteredContacts:response.data.data,
            });
            // ...
        }
        fetchData();
    }, []); // Or []


    //delete contact

    let clickDelete = async(contactId)=>{
        try{
            let response = await ContactService.deletecontacts(contactId);
            if(response){
            const response = await ContactService.getALLcontacts();
            console.log(response.data.data)
            setState({
                state,
                loading: false,
                contacts: response.data.data,
                filteredContacts:response.data.data,

            });

            }
            
        }
        catch(error){

        }
    }
    //search contacts

    let searchContacts = (event)=>{
        setQuery({...query, text: event.target.value});
        let theContacts = state.contacts.filter(contacts=>{
            return contacts.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setState({
            ...state,
            filteredContacts: theContacts
        });


    }
    let { loading, contacts,filteredContacts ,errorMessage } = state;

    return (
        <div className="conatiner">
          <section className="contact-search p-3">
                <div className="conatiner">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">Candidate details
                                    <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                                        <i className=" fa fa-plus-circle me-2" />
                                        Add New Candidate</Link>




                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <form className="row">
                                            <div className="col">
                                                <div className="mb-2">
                                                    <input
                                                    name="text"
                                                    value={query.text}
                                                    onChange={searchContacts}
                                                     type="text" className="form-control" placeholder="Search Names" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-2">
                                                    <input type="submit" className="btn btn-outline-dark" value="Search" />
                                                </div>
                                            </div>


                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        {
                            filteredContacts.length > 0 &&
                            filteredContacts.map(contact => {
                                return(
                                    <div className="col-md-6" key={contact._id} >
                            <div className="card my-2">
                                <div className="card-body">
                                    <div className="row align-items-center d-flex justify-content-arround">
                                        <div className="col-md-4">
                                            <img src={contact.image} alt="" className="img-fluid contact-img" />

                                        </div>
                                        <div className="col-md-7">
                                            <ul className="list-group">

                                                <li className=" list-group-item list-group-item-action">
                                                    Name :<span className="fw-bold">{contact.name}</span>
                                                </li>
                                                <li className=" list-group-item list-group-item-action">
                                                    email :<span className="fw-bold">{contact.email}</span>
                                                </li>
                                                <li className=" list-group-item list-group-item-action">
                                                    primaryskills :<span className="fw-bold">{contact.primaryskills}</span>
                                                </li>
                                                <li className=" list-group-item list-group-item-action">
                                                    experience :<span className="fw-bold">{contact.experience}</span>
                                                </li>


                                            </ul>

                                        </div>
                                        <div className="col-md-1 d-flex flex-column align-items-center">
                                            <Link to={`/contacts/view/${contact._id}`} className="btn btn-warning my-1">
                                                <i className="fa fa-eye " />
                                            </Link>
                                            <Link to={`/contacts/edit/${contact._id}`} className="btn btn-primary my-1">
                                                <i className="fa fa-pen" />
                                            </Link>
                                            <button className="btn btn-danger my-1" onClick={()=> clickDelete(contact._id)}>
                                                <i className="fa fa-trash" />
                                            </button>


                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                                )

                            })
                        }


                        


                    </div>
                </div>

            </section>

        </div>



    )
}

export default ContactList;