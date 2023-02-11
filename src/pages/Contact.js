import React from "react";
import Form from "../components/Form";

function Contact({ changePageName }) {
  changePageName(true);

  return (
    <div className="contact">
      <Form />
    </div>
  );
}

export default Contact;
