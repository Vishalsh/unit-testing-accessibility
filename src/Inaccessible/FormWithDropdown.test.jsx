import FormWithDropdown from "./FormWithDropdown";
import { render, screen, fireEvent } from "@testing-library/react";

test("welcomes the user after submitting the form", async () => {
  render(<FormWithDropdown />);

  const firstNameInput = screen.getByTestId("first-name");
  fireEvent.change(firstNameInput, { target: { value: 'Harry' } });

  const lastNameInput = screen.getByTestId("last-name");
  fireEvent.change(lastNameInput, { target: { value: 'Potter' } });

  const genderList = screen.getByTestId("gender");
  fireEvent.click(genderList);

  const genderMaleOption = screen.getByTestId("gender-male");
  fireEvent.click(genderMaleOption);

  const submitButton = screen.getByTestId("submit-form");

  fireEvent.click(submitButton);

  expect(screen.getByTestId("welcome-message").textContent).toEqual(
    "Welcome to Expert Talk Mr. Harry Potter"
  );
});
