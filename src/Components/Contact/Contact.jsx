import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <h2>Connect With Me</h2>
      <p>Have a question, project idea, or just want to say hi? I'd love to hear from you.</p>
      <form action="" className="contact-section">
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
