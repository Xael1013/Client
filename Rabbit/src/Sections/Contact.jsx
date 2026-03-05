import React from 'react'

export default function Contact() {
  return (
    <section className='contact-hero' id='contact'>
      <div className="contact-content">
        <div className="contact-side">
          <img src="/assets/rabbit1.jpg" alt="" />
        </div>
        <div className="contact-container">
          <h2>Contact Us!</h2>
          <form action="#" method="POST" id='contact-form'>
            <input type="text" name="name" id="contact-name" placeholder='Name' required/>
            <input type="text" name="email" id="contact-email" placeholder='Email' required/>
            <input type="number" name="number" id="contact-number" placeholder='Contact Number'/>
            <textarea name="comment" id="contact-comment" placeholder='Comment' required></textarea>
            <button type="submit">Submit</button>
          </form>
          <div className="contact-icons">
            <a href="#"><img src="/assets/facebook-brands-solid.png" alt="facebook" /></a>
            <a href="#"><img src="/assets/square-instagram-brands-solid.png" alt="instagram" /></a>
            <a href="#"><img src="/assets/envelope-solid.png" alt="email" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
