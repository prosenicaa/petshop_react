import React from "react";
import "../styles/Form.css";
import { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.length == 0 || lastName.length == 0 || email.length == 0) {
      setError(true);
    }
    if (firstName && lastName && email) {
      console.log(
        "First Name: ",
        firstName,
        "\nLast Name: ",
        lastName,
        "\nEmail: ",
        email
      );
      alert("Uspesno ste nas kontaktirali!");
    }
  };

  return (
    <div className="container">
      <div className="forma">
        <form onSubmit={handleSubmit}>
          <label>First name</label>
          <div>
            <input
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          {error && firstName.length <= 0 ? (
            <label className="error">First name can't be empty</label>
          ) : (
            ""
          )}

          <label>Last name</label>
          <div>
            <input
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {error && lastName.length <= 0 ? (
            <label className="error">Last name can't be empty</label>
          ) : (
            ""
          )}
          <label>Email</label>
          <div>
            <input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error && email.length <= 0 ? (
            <label className="error">Email can't be empty</label>
          ) : (
            ""
          )}
          <label>Message</label>
          <textarea rows="6" placeholder="Type your message here..."></textarea>
          <button className="btnSubmit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
