import React from "react";
import profiles from "./contacts.json";

const Contacts = props => {
  const contactsList = props.contactsList.map(contact => {
    return (
      <tr key={contact.id}>
        <td>
          <img src={contact.pictureUrl} className="img-profile" />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
      </tr>
    );
  });
  return <div>{contactsList}</div>;
};

export default Contacts;
