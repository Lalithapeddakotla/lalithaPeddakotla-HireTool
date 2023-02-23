import React,{useState,useEffect} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";

let EditContact = () => {

    let navigate = useNavigate();
    let{contactId}= useParams();
    let [state, setState] = useState({
        loading : false,
        contacts:{
            name : '',
            image: '',
            email: '',
            primaryskills: '',
            experience: ''
        },
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
    let updateInput =(event)=>{
        setState({
            ...state,
            contacts:{
                ...state.contacts,
                [event.target.name]: event.target.value
            }
        });
    };
    let submitForm = async (event) => {
        event.preventDefault();
        try{
            let response = await ContactService.updatecontacts(state.contacts, contactId);
            if(response){
                navigate('/contacts/list',{replace: true});
            }

        }
        catch(error){
            setState({state, errorMessage: error.message});
            navigate('/contacts/edit',{replace: false});

        }

    }


    let { loading, contacts, errorMessage}= state;
    return(

        <React.Fragment>
            <pre>{JSON.stringify(contacts)}</pre>
        <section className="add-contact p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Edit Contact</p>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-4" >
                    <form onSubmit={submitForm}>
                        <div className="mb-2">
                            <input 
                            name="name"
                            value={contacts.name}
                            onChange={updateInput}
                            type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="mb-2">
                            <input
                            name="image"
                            value={contacts.image}
                            onChange={updateInput}
                             type="text" className="form-control" placeholder="photoURL"/>
                        </div>
                        <div className="mb-2">
                            <input 
                            name="email"
                            value={contacts.email}
                            onChange={updateInput}
                            type="email" className="form-control" placeholder="email"/>
                        </div>
                        <div className="mb-2">
                            <input 
                            name="primaryskills"
                            value={contacts.primaryskills}
                            onChange={updateInput}
                            type="primaryskills" className="form-control" placeholder="primaryskills"/>
                        </div>
                        <div className="mb-2">
                            <input 
                            name="experience"
                            value={contacts.experience}
                            onChange={updateInput}
                            type="experience" className="form-control" placeholder="experience"/>
                        </div>
                        <div className="mb-2 my-2">
                            <input type="submit" className="btn btn-primary " value="Update"/>
                            <Link to ={'/contacts/list'} className="btn btn-dark ms-2">Close</Link>
                        </div>
                        
                    </form>
                </div>
                <div className="col-md-6">
                    <img src={contacts.image} alt="" className="contact-image"/>
                </div>
            </div>

        </section>
    </React.Fragment>
    )
}

export default EditContact;