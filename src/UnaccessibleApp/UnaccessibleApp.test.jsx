import UnaccessibleApp from "./UnaccessibleApp";
import { render, screen, fireEvent } from "@testing-library/react";

test("welcomes the user after submitted the form", async () => {
  render(<UnaccessibleApp />);

  const firstNameInput = screen.getByTestId("first-name");
  fireEvent.change(firstNameInput, { target: { value: 'Harry' } })

  const lastNameInput = screen.getByTestId("last-name");
  fireEvent.change(lastNameInput, { target: { value: 'Potter' } })

  const submitButton = screen.getByTestId("submit-form");

  fireEvent.click(submitButton);

  expect(screen.getByTestId("welcome-message").textContent).toEqual(
    "Welcome to React Conf 2023 Harry Potter"
  );
  expect(screen.getByText("Welcome to React Conf 2023 Harry Potter")).not.toBeNull();
});
