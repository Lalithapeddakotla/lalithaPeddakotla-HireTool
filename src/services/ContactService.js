import axios from "axios";

export class ContactService {

    static serverURL = 'http://localhost:5000';

    static getALLcontacts(){
        let dataURL = 'http://localhost:5000/contacts';
        return axios.get(dataURL);
    }
    static getContact(contactId){
       // console.log("contactId="+contactId)
        let dataURL = 'http://localhost:5000/contacts/'+contactId;
        return axios.get(dataURL);
    }

    static createcontacts(contacts){
        let dataURL = 'http://localhost:5000/contacts/';
        return axios.post(dataURL, contacts)
    }

    static updatecontacts(contacts, contactId){
        let dataURL = 'http://localhost:5000/contacts/'+contactId;
        return axios.put(dataURL, contacts);
    }

    static deletecontacts(contactId){
        let dataURL = 'http://localhost:5000/contacts/'+contactId;
        return axios.delete(dataURL)
    }

    
}