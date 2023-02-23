import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Routes, Route, Navigate} from 'react-router-dom'
import ContactList from './components/contacts/ContactList/ContactList';
import AddContact from './components/contacts/AddContact/AddContact';
import EditContact from './components/contacts/EditContact/EditContact';
import ViewContact from './components/contacts/ViewContact/ViewContact';
import Spinner from './components/spinner/Spinner';
let  App=()=>  {
  return (
    <React.Fragment>
      
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Navigate to ={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>}/>
        <Route path={'/contacts/add'} element={<AddContact/>}/>
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
        <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
      </Routes>
    </React.Fragment>
    
  );
}

export default App;
