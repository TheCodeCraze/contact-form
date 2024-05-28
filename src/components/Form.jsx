import styles from "../styles/Form.module.css";

const Form = () => {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.content}>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.inputs}>
          <div className={styles.name}>
            <div className={styles["first-name"]}>
              <label className={styles.label} htmlFor="firstName">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={styles.input}
              />
              <p className={styles.error}>This field is required</p>
            </div>
            <div className={styles["last-name"]}>
              <label className={styles.label} htmlFor="lastName">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={styles.input}
              />
              <p className={styles.error}>This field is required</p>
            </div>
          </div>
          <div className={styles.email}>
            <label className={styles.label} htmlFor="email">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
            />
            <p className={styles.error}>This field is required</p>
          </div>
          <div className={styles["query-type"]}>
            <label className={styles.label}>Query Type *</label>
            <div className={styles.queries}>
              <div className={styles.general}>
                <input
                  type="radio"
                  id="general"
                  name="query"
                  className={styles.radio}
                />
                <label className={styles.label} htmlFor="general">
                  General Enquiry
                </label>
              </div>
              <div className={styles.support}>
                <input
                  type="radio"
                  id="support"
                  name="query"
                  className={styles.radio}
                />
                <label className={styles.label} htmlFor="support">
                  Support Request
                </label>
              </div>
            </div>
            <p className={styles.error}>Please select a query type</p>
          </div>
          <div className={styles.message}>
            <label className={styles.label} htmlFor="message">
              Message *
            </label>
            <textarea id="message" name="message" className={styles.input} />
            <p className={styles.error}>This field is required</p>
          </div>
        </div>
      </div>
      <div className={styles.consent}>
        <input
          type="checkbox"
          id="consent"
          name="consent"
          className={styles.checkbox}
        />
        <label className={styles.label} htmlFor="consent">
          I consent to being contacted by the team *
        </label>
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

//   Please enter a valid email address

//   Message Sent!
//   Thanks for completing the form. We'll be in touch soon!

export default Form;
