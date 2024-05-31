import { useState } from "react";
import reactLogo from "../assets/react.svg";

function FormInputs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function onChangeFirstName(event) {
    setFirstName(event.target.value);
  }

  function onChangeLastName(event) {
    setLastName(event.target.value);
  }

  function resetForm() {
    setFirstName("");
    setLastName("");
  }

  function onSubmit(event) {
    event.preventDefault();
    setIsFormSubmitted(true);
  }

  return (
    <>
      {isFormSubmitted ? (
        <section>
          <img className="logo" src={reactLogo} alt="React Logo" />
          <h4>
            Welcome to React Conf 2023 {firstName} {lastName}
          </h4>
        </section>
      ) : (
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={onChangeFirstName}
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={onChangeLastName}
              autoComplete="off"
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <button type="reset" className="btn btn-outline-primary" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default FormInputs;
