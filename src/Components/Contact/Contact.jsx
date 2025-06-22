import React from 'react'
import './Contact.css'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1e1cd0f3-2cf1-4c8c-a6d4-fc5783d4c024");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message); 
    }
  };
  return (
    <div className='contact' id='contact'>
      <h2>Connect With Me</h2>
      <p>Have a question, project idea, or just want to say hi? I'd love to hear from you.</p>
      <form onSubmit={onSubmit} action="" className="contact-section">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter your name'name='name' />
        <label htmlFor="">Email</label>
        <input type="email" name='email'placeholder='Enter your email' />
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
        <button className='contact-submit' type='submit'>Submit now</button>
      </form>
    </div>
  )
}

export default Contact
