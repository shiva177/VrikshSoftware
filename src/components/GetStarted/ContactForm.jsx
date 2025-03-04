import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./ContactForm.css"; // Updated CSS

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-content">
        {/* Left Section - Form */}
        <div className="contact-left">
          <h4 className="sub-heading">Get Started</h4>
          <h2 className="main-heading">
            Get in touch with us. <br /> We’re here to assist you.
          </h2>

          {/* Form */}
          <form className="contact-form">
            <div className="form-row">
              <div className="input-field">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" />
                <span className="underline"></span>
              </div>
              <div className="input-field">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />
                <span className="underline"></span>
              </div>
              <div className="input-field">
                <label>Phone Number (optional)</label>
                <input type="text" placeholder="Enter your phone number" />
                <span className="underline"></span>
              </div>
            </div>

            {/* Message */}
            <div className="message-box">
              <label>Message</label>
              <textarea placeholder="Write your message"></textarea>
              <span className="underline"></span>
            </div>

            {/* Submit Button */}
            <div className="button-container">
              <button className="submit-btn">Leave us a Message →</button>
            </div>
          </form>
        </div>

        {/* Right Section - Social Icons */}
        <div className="social-icons-container">
          <button className="social-btn">
            <FaFacebookF />
          </button>
          <button className="social-btn">
            <FaInstagram />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
