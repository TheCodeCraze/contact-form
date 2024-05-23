import styles from "../styles/Form.module.css";

const Form = () => {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.content}></div>
      <div className={styles.consent}>
        <div className={styles.group}>
          <input
            type="checkbox"
            id="consent"
            name="consent"
            className={styles.input}
          />
          <label className={styles.label}>
            I consent to being contacted by the team
          </label>
        </div>
        <p className={styles.error}>
          To submit this form, please consent to being contacted
        </p>
      </div>
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
};

// Contact Us

//   First Name
//   This field is required

//   Last Name
//   This field is required

//   Email Address
//   Please enter a valid email address
//   This field is required

//   Query Type
//   General Enquiry
//   Support Request
//   Please select a query type

//   Message
//   This field is required

//   Message Sent!
//   Thanks for completing the form. We'll be in touch soon!

export default Form;
