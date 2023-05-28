import React, { useState } from "react";
import ContactList from "./ContactList";

function AddContact() {
  const [contacts, setContacts] = useState([]);
  const [state, setState] = useState({ name: "", email: "" });

  const add = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All fields are mandatory");
      return;
    }
    const newContact = { ...state };
    setContacts((prevContacts) => [...prevContacts, newContact]);
    setState({ name: "", email: "" });
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            placeholder="Name"
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.email}
            placeholder="Email"
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
        <button className="ui button blue" type="submit">
          Add
        </button>
      </form>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default AddContact;
