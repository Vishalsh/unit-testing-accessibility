import FormInputs from "./FormInputs";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("welcomes the user after submitting the form", async () => {
  const user = userEvent.setup();
  render(<FormInputs />);

  const firstNameInput = screen.getByLabelText("First Name");
  await user.type(firstNameInput, "Harry");

  const lastNameInput = screen.getByLabelText("Last Name");
  await user.type(lastNameInput, "Potter");

  const submitButton = screen.getByRole("button", { name: "Submit" });

  await user.click(submitButton);

  expect(screen.getByRole("heading", { level: 4 }).textContent).toEqual(
    "Welcome to React Conf 2023 Harry Potter"
  );
});
