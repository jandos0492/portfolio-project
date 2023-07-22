import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setEmailSent(true);

      // Hide the success message after 3 seconds
      setTimeout(() => {
        setEmailSent(false);
      }, 3000);

    } catch (error) {
      alert("Error sending email: " + error.message);
    }

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" >
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        {emailSent && <p className="email-sent">Message sent successfully!</p>}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            tabIndex="1"
            id="name" // Added id here
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            tabIndex="2"
            id="email" // Added id here
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            tabIndex="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  )
}

export default Contact;
