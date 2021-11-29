import React, { useState } from "react";
import "./styles/Register.css";
import axios from "axios";

export default function Register() {
  let [message, setMessage] = useState("Register");
  let [gender] = React.useState([
    { label: "Gender", value: "Gender" },
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Non-Binary", value: "Non-Binary" },
  ]);

  let [fieldValues, setFieldValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: [],
  });

  let [submit, setSubmit] = useState(false);
  let [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setFieldValues(
      (fieldValues = {
        ...fieldValues,
        firstName: event.target.value,
      })
    );
    if (fieldValues.firstName !== "") {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleLastNameInputChange = (event) => {
    event.persist();
    setFieldValues(
      (fieldValues = {
        ...fieldValues,
        lastName: event.target.value,
      })
    );
    if (fieldValues.lastName !== "") {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setFieldValues(
      (fieldValues = {
        ...fieldValues,
        email: event.target.value,
      })
    );
    if (fieldValues.email !== "") {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handlePasswordInputChange = (event) => {
    event.persist();
    setFieldValues(
      (fieldValues = {
        ...fieldValues,
        password: event.target.value,
      })
    );
    if (fieldValues.password !== "") {
      setValid(true);
    } else {
      setValid(false);
    }
  };
  const handleCustomSelectChange = (event) => {
    event.persist();
    setFieldValues(
      (fieldValues = {
        ...fieldValues,
        gender: event.target.value,
      })
    );
    if (fieldValues.gender !== []) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmit(!submit);
    // if (!submit && !values.password && !values.email && !values.firstName && !values.lastName && values.items === []) {
    if (fieldValues.gender === []) {
      setMessage("Try Again");
      setSubmit(false);
    }

    console.log(fieldValues);
    const response = axios.post("http://localhost:9091/api/register", fieldValues);
    console.log(response);
  };

  return (
    <div>
      <div className="form-container">
        <h1 className="welcome-banner">Create Account</h1>
        <form className="register-form">
          {submit && valid ? (
            <div className="success-message">
              {" "}
              Success! Thank you for signing up{" "}
            </div>
          ) : (
            ""
          )}
          <input
            disabled={submit}
            id="firstName"
            className="form-field"
            placeholder="First Name"
            name="firstName"
            values={fieldValues.firstName}
            onChange={handleFirstNameInputChange}
          />
          {submit && !fieldValues.firstName ? (
            <span id="first-name-error">Please enter a first name</span>
          ) : (
            ""
          )}

          <input
            disabled={submit}
            id="lastName"
            className="form-field"
            placeholder="Last Name"
            name="lastName"
            values={fieldValues.lastName}
            onChange={handleLastNameInputChange}
          />
          {submit && !fieldValues.lastName ? (
            <span className="last-name-error">Please enter a last name</span>
          ) : (
            ""
          )}
          <input
            type="email"
            disabled={submit}
            id="email"
            className="form-field"
            placeholder="Email"
            name="email"
            values={fieldValues.email}
            onChange={handleEmailInputChange}
          />
          {submit && !fieldValues.firstName ? (
            <span className="email-error">Please enter an email address</span>
          ) : (
            ""
          )}
          <input
            type="password"
            disabled={submit}
            id="password"
            className="form-field"
            placeholder="Password"
            name="password"
            values={fieldValues.password}
            onChange={handlePasswordInputChange}
          />
          {submit && !fieldValues.password ? (
            <span className="password-error">Please enter a password</span>
          ) : (
            ""
          )}
          <select className="custom-select" onChange={handleCustomSelectChange}>
            {gender.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          {submit &&
          fieldValues.gender !== [] &&
          fieldValues.gender !== "Gender" ? (
            <span className="select-error">Please select an option</span>
          ) : (
            ""
          )}

          <button className="form-field" type="submit" onClick={handleSubmit}>
            {" "}
            {message}{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
