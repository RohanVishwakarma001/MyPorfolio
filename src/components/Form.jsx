import "./FormStyle.css";

import React from "react";

function Form() {
  return (
    <div className="form">
      <form action="">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Your Name" />
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Email" />
        <label htmlFor="">Subject</label>
        <input type="text" placeholder="Subject" />
        <label htmlFor="">Message</label>
        <textarea rows="6" placeholder="Type your message here"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Form;
