import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AwesomeButton } from 'react-awesome-button';

const Contact = () => {
  const [responseStatus, setResponseStatus] = useState({
    data: {},
    status: 200,
    error: null,
  });
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    axios({
      method: 'post',
      url: 'https://formspree.io/xaypvodp',
      data: new FormData(form),
    })
      .then(response => {
        setResponseStatus({ data: response.data, status: response.status });
      })
      .catch(error =>
        setResponseStatus({
          data: error.data,
          status: error.status,
          error: error,
        })
      );
  };

  return (
    <section id="contact" className="four">
      <div className="container">
        <header>
          <h2>Contact</h2>
        </header>

        <p>Please contact me to request a Resume / CV</p>

        <form onSubmit={handleSubmit} name="Portfolio">
          <div className="row">
            <div className="col-6 col-12-mobile">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-mobile">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea name="message" placeholder="Message" />
            </div>
            <div className="col-12">
              <AwesomeButton
                type={responseStatus.status === 200 ? 'primary' : 'secondary'}
                value="Send Message"
              >
                {responseStatus.status === 200 ? 'Send Message' : 'Try again'}
                <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faEnvelope} />
              </AwesomeButton>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
