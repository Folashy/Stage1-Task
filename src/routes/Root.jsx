import Footer from "../components/footer/Footer";
import { OverallContainerStyle } from "./ContactMeStyle";


export default function Root() {
 
  return (
    <>
      <OverallContainerStyle>
        <div className="formContainer">
          <div className="contactForm">
            <div className="header">
              <h1>Contact Me</h1>
              <p>
                Hi there, contact me to ask me about anything you have in mind
              </p>
            </div>

            <div className="FormStyle">
              <form>
                <div className="fullName">
                  <div className="firstname">
                    <div className="title"><label for="first_name">First name</label></div>
                    <input
                      id="first_name"
                      placeholder="Enter your first name"
                      type="text"
                      name="First name"
                    />
                  </div>
                  <div className="lastname">
                   <div className="title"><label for="last_name">Last name</label></div>
                    <input
                      id="last_name"
                      placeholder="Enter your last name"
                      type="text"
                      name="Last name"
                    />
                  </div>
                </div>

                  <div className="formEmail">
                   <label for="email">Email</label>
                    <input
                      id="email"
                      placeholder="yourname@email.com"
                      type="text"
                    name="Email"
                    />
                  </div>
               
                <label>Message</label>
                <textarea
                  id="message"
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                  name="Message"
                />

                <div className="checkInput">
                  
                  <input
                    type="checkbox"
                    name="You agree to providing your to {name} who may contact you"
                  />
                  <p>{`You agree to providing your to {name} who may contact you`}</p>
                </div>
              </form>
              <form method="post">
                <div classname="formsubmit">
                  <button  type="submit" id="btn__submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </OverallContainerStyle>
    </>
  );
}
