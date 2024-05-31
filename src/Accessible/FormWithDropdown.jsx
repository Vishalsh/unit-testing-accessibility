import { useState, useRef } from "react";
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
  const maleGenderItem = useRef(null);

  function onChangeFirstName(event) {
    setFirstName(event.target.value);
  }

  function onChangeLastName(event) {
    setLastName(event.target.value);
  }

  function focusOnFirstListItem() {
    setTimeout(() => {
      maleGenderItem.current.focus();
    })
  }

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
    focusOnFirstListItem();
  }

  function openDropdown(event) {
    if (event.key === 'ArrowDown') {
      setIsDropdownOpen(true);
      focusOnFirstListItem();
    }
  }

  function onSelectGender(gender) {
    setIsDropdownOpen(false);
    setGender(gender);
  }

  function onKeyPressOption(event, gender) {
    if (event.key === 'Enter') {
      setIsDropdownOpen(false);
      setGender(gender);
    }
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
            Welcome to Expert Talk {titleMap[gender]} {firstName} {lastName}
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
              role="combobox"
              aria-haspopup="listbox"
              aria-controls="gender-list"
              aria-autocomplete="list"
              aria-expanded={isDropdownOpen}
              data-active-option={gender}
              aria-label="select gender"
            >{gender}</button>
            {
              isDropdownOpen && (
                <ul tabIndex={-1} role="listbox" className="list" id="gender-list" aria-label="Gender">
                  <li tabIndex="0" role="option" data-testid="gender-male" className="option" aria-selected={gender === "Male"}  onClick={() => onSelectGender("Male")} onKeyDown={(event) => onKeyPressOption(event, "Male")} ref={maleGenderItem} >Male</li>
                  <li tabIndex="0" role="option" data-testid="gender-female" className="option" aria-selected={gender === "Female"} onClick={() => onSelectGender("Female")} onKeyDown={(event) => onKeyPressOption(event, "Female")}>Female</li>
                  <li tabIndex="0" role="option" data-testid="gender-others" className="option" aria-selected={gender === "Others"} onClick={() => onSelectGender("Others")} onKeyDown={(event) => onKeyPressOption(event, "Others")}>Others</li>
                </ul>
              )
            }
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

export default FormWithDropdown;
