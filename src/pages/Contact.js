import React from "react";
import Footer from "../components/Footer";
import HeaderInside from "../components/HeaderInside";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/thanks");
  };
  const submitForm = (e) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/contact@goldcoastrucking.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.success);
        handleClick();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <HeaderInside />
      <div className="aboutUsContainer">
        <div className="aboutUsTitle">
          Drop us a line
          <hr />
        </div>
        <div className="contactSectionText">
          Fill out the form below, and we will get back to you as soon as
          possible.
          <form className="contactForm">
            <input type="hidden" name="_subject" value="New submission!" />

            <div className="formFields">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </div>
            <div className="formFields">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div className="formFields">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={phone}
              />
            </div>
            <div className="formFields">
              <label>Your Message</label>
              <textarea
                cols="21"
                rows="15"
                name="message"
                required
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
              />
            </div>
            <div className="formFields">
              <button onClick={submitForm}>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
