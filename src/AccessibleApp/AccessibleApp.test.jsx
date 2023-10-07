import AccessibleApp from "./AccessibleApp";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";

test("welcomes the user after submitting the form", async () => {
  const user = userEvent.setup();
  render(<AccessibleApp />);

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

test('accessiblity checks', async () => {
  const { container } = render(<AccessibleApp />);

  expect(await axe(container)).toHaveNoViolations();
});