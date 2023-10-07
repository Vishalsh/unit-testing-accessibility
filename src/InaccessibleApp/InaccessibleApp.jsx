import { useState } from "react";
import reactLogo from "../assets/react.svg";

function InaccessibleApp() {
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

  function submitForm(event) {
    event.preventDefault();
    setIsFormSubmitted(true);
  }

  return (
    <>
      {isFormSubmitted ? (
        <section>
          <img className="logo" src={reactLogo} />
          <h4 data-testid="welcome-message">
            Welcome to React Conf 2023 {firstName} {lastName}
          </h4>
      </section>
      ) : (
        <form>
          <div className="mb-3">
            <label className="form-label">
              First Name
            </label>
            <input
              className="form-control"
              data-testid="first-name"
              value={firstName}
              onChange={onChangeFirstName}              
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Last Name
            </label>
            <input
              className="form-control"
              data-testid="last-name"
              value={lastName}
              onChange={onChangeLastName}
            />
          </div>

          <div className="d-grid gap-2">
            <div data-testid="submit-form" onClick={submitForm} className="btn btn-primary" type="submit">
              Submit
            </div>
            <button className="btn btn-outline-primary" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default InaccessibleApp;
