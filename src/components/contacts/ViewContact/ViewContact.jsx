import React,{useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";

let ViewContact = () => {

    let {contactId} = useParams();

    let [state, setState] = useState({
        loading : false,
        contacts:{},
        errorMessage:''
    });
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await ContactService.getContact(contactId);
            console.log("contactId")
            console.log(response.data.data)
            setState({
                state,
                loading: false,
                contacts: response.data.data
            })
            // ...
        }
        fetchData();
    }, []); // Or []
    let { loading, contacts, errorMessage } = state;

    return(

        <React.Fragment>
            
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className='h5 text-warning'>View Contact</p>
                            <p className='fst-italic'>show details</p>
                        </div>
                    </div>
                </div>

            </section>
           
            
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-item-center">
                        <div className="col-md-4">
                            <img src={contacts.image}alt=""className='contact-img'/>

                        </div>
                        <div className="col-md-8">
                        <ul className='list-group'>
                                            <li className="list-group-item list-group-item-action">
                                                Name: <span className="fw-bold">{contacts.name}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                email: <span className="fw-bold">{contacts.email}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                primaryskills: <span className="fw-bold">{contacts.primaryskills}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                experience: <span className="fw-bold">{contacts.experience}</span>
                                            </li>
                                        </ul>

                        </div>
                        <div className="row">
                            <div className="col">
                                <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                            </div>

                        </div>
                    </div>
                </div>
                

            </section>
         
        </React.Fragment>
    )
}

export default ViewContact;