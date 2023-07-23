import UserForm from "../../UserDetails/UserForm/UserForm";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("User form tests", () => {
  it("The screen should've 2 input fields and a button", () => {
    render(<UserForm></UserForm>);
    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  it("Calls onUserAdd function when form is submitted", () => {
    const onUserAddMock = jest.fn();

    render(<UserForm onUserAdd={onUserAddMock}></UserForm>);

    // NOTE: We can use below but not the best way as the order may change when we do more development.
    // const [nameInput, emailInput] = screen.getAllByRole("textbox");

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });

    // Simulate typing in name.
    user.click(nameInput);
    user.keyboard("jest");

    // Simulate typing in email.
    user.click(emailInput);
    user.keyboard("jest@testinglibrary.com");

    // Find the button.
    const button = screen.getByRole("button");
    user.click(button);

    // Check if the mock function is being called.
    expect(onUserAddMock).toHaveBeenCalled();
    expect(onUserAddMock).toHaveBeenCalledWith({
      name: "jest",
      email: "jest@testinglibrary.com",
    });
  });
});
