import styled from "styled-components";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bzed0r1",
        "template_8xqlmhs",
        form.current,
        "Evab-wpxwHePuaj_a"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          name.current.value = "";
          email.current.value = "";
          message.current.value = "";
          //   form.reset();
          setTimeout(() => setDone(false), 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Wrapper>
      <div className="left-side">
        <div className="contact-msg">
          <h2>Let's talk</h2>
          <h2>Contact me</h2>
        </div>
      </div>
      <div className="right-side">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="input-field"
            placeholder="Name"
            ref={name}
          />
          <input
            type="email"
            name="user_email"
            className="input-field"
            placeholder="Email"
            ref={email}
          />
          <textarea name="message" className="input-field" ref={message} />
          <button type="submit">submit</button>
          <span>{done && "Email Sent !!"}</span>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  height: 60vh;
  .left-side {
    padding: 0 3rem 0 3rem;
  }
  .right-side {
    display: flex;
    justify-content: center;
    position: relative;
  }
  .right-side form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  .input-field {
    width: 20rem;
    height: 2rem;
    padding: 0.3em;
    outline: none;
    border: 2px solid var(--orange);
    border-radius: 8px;
    font-size: 16px;
  }
  textarea {
    height: 5rem !important;
  }
`;
export default ContactForm;
