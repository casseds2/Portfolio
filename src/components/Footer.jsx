import React from 'react';
import { functions } from '../api';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      senderEmail: '',
      message: '',
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const { name, senderEmail, message } = this.state;
    if (name === '' || senderEmail === '' || message === '') {
      alert('Invalid form. Please fill out all fields.');
      return;
    }
    functions
      .sendEmail(
        'https://us-central1-portfolio-d7a5d.cloudfunctions.net/httpEmail',
        this.state
      )
      .then(() => {
        alert('Successfully sent email.');
      })
      .catch(err => {
        console.log('Error: ' + JSON.stringify(err));
        alert('Error sending email.');
      });
  };

  updateField = event => {
    this.setState({
      ...this.state,
      [event.target.id]: event.target.value,
    });
  };

  render() {
    return (
      <div className="arlo_tm_section" id="contact">
        <div className="container">
          <div className="arlo_tm_title_holder contact">
            <h3>Contact Me</h3>
            <span>Get in touch with me</span>
          </div>
        </div>
        <div className="arlo_tm_footer_contact_wrapper_all">
          <div className="arlo_tm_contact_wrap_all">
            <div className="container">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder contact">
                  <h4>Get in Touch</h4>
                </div>
                <div className="short_info_wrap">
                  <ul>
                    <li>
                      <p>
                        <label>Address:</label>
                        <span>Dublin, Ireland</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <label>Email:</label>
                        <span>
                          <a href="mailto:casseds95@gmail.com">
                            casseds95@gmail.com
                          </a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <label>Phone:</label>
                        <span>+353 85 118 5656</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rightbox">
                <div className="arlo_tm_contact_wrap">
                  <div className="main_input_wrap">
                    <form
                      action="/email"
                      method="POST"
                      className="contact_form"
                      id="form"
                    >
                      <div
                        className="returnmessage"
                        data-success="Your message has been received, We will contact you soon."
                      />
                      <div className="empty_notice">
                        <span>Please Fill Required Fields</span>
                      </div>
                      <div className="wrap">
                        <input
                          onChange={this.updateField}
                          value={this.state.name}
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="wrap">
                        <input
                          onChange={this.updateField}
                          value={this.state.senderEmail}
                          id="senderEmail"
                          name="email"
                          type="text"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="wrap">
                        <textarea
                          onChange={this.updateField}
                          value={this.state.message}
                          id="message"
                          name="message"
                          placeholder="Your Message"
                        />
                      </div>
                      <div className="arlo_tm_button">
                        <input
                          onClick={this.onSubmit}
                          type="submit"
                          defaultValue="Submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="arlo_tm_footer_wrap">
            <div className="container">
              <p>© Copyright 2019. All Rights are Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
