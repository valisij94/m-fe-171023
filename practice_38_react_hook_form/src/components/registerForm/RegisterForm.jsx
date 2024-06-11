import React from "react";
import classes from './RegisterForm.module.css';

export default function RegisterForm( props ) {

  return (
    <form className={classes.contactsFormContainer}>
      <input
        placeholder="Login" type="text"
        className={classes.contactsInput}
      />

      <input
        placeholder="Password" type="password"
        className={classes.contactsInput}
      />

      <input
        placeholder="Email" type="text"
        className={classes.contactsInput}
      />

      <button className={classes.submitButton}>Enter</button>
    </form>
  );
}