import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { MyButton } from '../button/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', msg: '' });
  const [isSending, setIsSending] = useState(false); // State to handle loading/disabling button

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true // Animation happens only once
    });
    AOS.refresh(); // Refresh AOS in case elements change
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side check
    if (!formData.name || !formData.email || !formData.msg) {
        toast.warn("Please fill in all required fields.");
        return;
    }

    setIsSending(true); // Start loading

    try {
      // 1. Send the Contact Message to yourself (Template ID: template_754q19a)
      await emailjs.send(
        "service_u725ndf", 
        "template_754q19a", 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.msg,
        },
        "onM6EGtzqAueCRX53" 
      );

      // 2. Send the Auto-Reply to the user (Template ID: template_iyctzzx)
      // CORRECTED PAYLOAD to ensure {{from_name}} and {{message}} variables are passed.
      await emailjs.send(
        "service_u725ndf", 
        "template_iyctzzx", 
        {
          to_email: formData.email,  // Recipient email (used in EmailJS Settings)
          from_name: formData.name,  // Used in auto-reply body: Hi {{from_name}}
          message: formData.msg,     // Used in auto-reply body: "Your message: {{message}}"
        },
        "onM6EGtzqAueCRX53" 
      );
      
      // Success actions
      toast.success("Message sent successfully! Check your inbox for a confirmation.", { autoClose: 4000 });
      setFormData({ name: "", email: "", msg: "" }); // Reset form

    } catch (error) {
      // Error action
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.", { autoClose: 5000 });
    } finally {
      setIsSending(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />

      <section id='contact' className='contact-section'>
        <h1 className='contact-title'>🤙Contact me 😉</h1>
        <div className="contact-container">

          {/* Follow Section */}
          <div className="follow" data-aos="fade-right">
            <h1>Let's build something together</h1>
            <p>If you have any questions or would like to collaborate, feel free to contact me.</p>

            <h2 data-aos="fade-up">Follow me on:</h2>
            <ul data-aos="zoom-in" data-aos-delay="200">
              <li><a href="https://github.com/prudence2024" aria-label="GitHub"><i className="fab fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/prudence-okwubor-7a9a27382/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://www.x.com/prudenceokwubor" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/prudenceokwubor" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} data-aos="fade-left">
            <div className='formContent'>
              <h2 className="form-title" data-aos="fade-up">Contact Me</h2>

              <div className="input-group" data-aos="fade-up" data-aos-delay="100">
                <input
                  type="text"
                  id='name'
                  name='name'
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name">Name *</label>
              </div>

              <div className="input-group" data-aos="fade-up" data-aos-delay="200">
                <input
                  type="email"
                  id='email'
                  name='email'
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email *</label>
              </div>

              <div className="input-group" data-aos="fade-up" data-aos-delay="300">
                <textarea
                  id='msg'
                  name='msg'
                  rows="4"
                  placeholder=" "
                  value={formData.msg}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="msg">Message *</label>
              </div>

              <div data-aos-delay="400">
                <MyButton 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSending} // Disable button while sending
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </MyButton>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;