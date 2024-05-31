import { useState } from "react";
import reactLogo from "../assets/react.svg";

const titleMap = {
  'Male': 'Mr.',
  'Female': 'Ms.',
  'Others': 'Mx.',
}

function FormWithDropdown() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function onChangeFirstName(event) {
    setFirstName(event.target.value);
  }

  function onChangeLastName(event) {
    setLastName(event.target.value);
  }

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function openDropdown(event) {
    if (event.key === 'ArrowDown') {
      setIsDropdownOpen(true);
    }
  }

  function onSelectGender(gender) {
    setIsDropdownOpen(false);
    setGender(gender);
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
            Welcome to Expert Talk {titleMap[gender]} {firstName} {lastName}
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

          <div className="mb-3 gender-options">
            <label className="form-label">
              Gender
            </label>
            <button
              type="button"
              className="form-control"
              data-testid="gender"
              onClick={toggleDropdown}
              onKeyDown={openDropdown}
            >{gender}</button>
            {
              isDropdownOpen && (
                <ul className="list">
                  <li data-testid="gender-male" className="option" onClick={() => onSelectGender("Male")}>Male</li>
                  <li data-testid="gender-female" className="option" onClick={() => onSelectGender("Female")}>Female</li>
                  <li data-testid="gender-others" className="option" onClick={() => onSelectGender("Others")}>Others</li>
                </ul>
              )
            }
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

export default FormWithDropdown;
