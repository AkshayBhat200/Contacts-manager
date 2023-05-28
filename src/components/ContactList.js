import React from "react";
import ContactCard from "./ContactCard";

function ContactList({ contacts }) {
  const handleDelete = (id) => {
    // Perform the deletion logic using the id
    // For example, update the state or make an API call
    console.log(`Deleting contact with id: ${id}`);
  };

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default ContactList;
