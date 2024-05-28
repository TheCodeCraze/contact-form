import { useFormik } from "formik";
import styles from "../styles/Form.module.css";
import { formSchema } from "../schemas/formSchema";

const Form = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      consent: false,
    },
    validationSchema: formSchema,
    onSubmit: handleSubmit,
  });

  const firstNameClass = `${styles.input} ${
    formik.touched.firstName && formik.errors.firstName && styles["error-input"]
  }`;
  const lastNameClass = `${styles.input} ${
    formik.touched.lastName && formik.errors.lastName && styles["error-input"]
  }`;
  const emailClass = `${styles.input} ${
    formik.touched.email && formik.errors.email && styles["error-input"]
  }`;
  const messageClass = `${styles.input} ${
    formik.touched.message && formik.errors.message && styles["error-input"]
  }`;

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
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
                className={firstNameClass}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className={styles["error-message"]}>
                  {formik.errors.firstName}
                </p>
              )}
            </div>
            <div className={styles["last-name"]}>
              <label className={styles.label} htmlFor="lastName">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={lastNameClass}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className={styles["error-message"]}>
                  {formik.errors.lastName}
                </p>
              )}
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
              className={emailClass}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className={styles["error-message"]}>{formik.errors.email}</p>
            )}
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
            <p className={styles["error-input"]}>Please select a query type</p>
          </div>
          <div className={styles.message}>
            <label className={styles.label} htmlFor="message">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              className={messageClass}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message && (
              <p className={styles["error-message"]}>{formik.errors.message}</p>
            )}
          </div>
        </div>
      </div>
      <div className={styles.consent}>
        <input
          type="checkbox"
          id="consent"
          name="consent"
          className={styles.checkbox}
          checked={formik.values.consent}
          onChange={formik.handleChange}
        />
        <label className={styles.label} htmlFor="consent">
          I consent to being contacted by the team *
        </label>
        {formik.errors.consent && (
          <p className={styles["error-message"]}>{formik.errors.consent}</p>
        )}
      </div>
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
};

//   Message Sent!
//   Thanks for completing the form. We'll be in touch soon!

export default Form;
