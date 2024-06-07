import FormWithDropdown from "./FormWithDropdown";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";

test("welcomes the user after submitting the form", async () => {
  const user = userEvent.setup();
  render(<FormWithDropdown />);

  const firstNameInput = screen.getByLabelText("First Name");
  await user.type(firstNameInput, "Harry");

  const lastNameInput = screen.getByLabelText("Last Name");
  await user.type(lastNameInput, "Potter");

  const genderList = screen.getByRole("combobox", { name: "select gender" });
  await user.click(genderList);

  // console.log(getRoles(genderList));

  const genderMaleOption = screen.getByRole("option", { name: 'Male' });
  await user.click(genderMaleOption);

  const submitButton = screen.getByRole("button", { name: "Submit" });

  await user.click(submitButton);

  expect(screen.getByRole("heading", { level: 4 }).textContent).toEqual(
    "Welcome to Expert Talk Mr. Harry Potter"
  );
});

test('accessiblity checks', async () => {
  const { container } = render(<FormWithDropdown />);

	expect(await axe(container)).toHaveNoViolations();
});
