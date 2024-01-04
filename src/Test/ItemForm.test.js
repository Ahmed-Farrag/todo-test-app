import { render, screen } from "@testing-library/react";
import { ItemForm } from "../Components/ItemForm";
import userEvent from "@testing-library/user-event";
//  * test ceases
// 1-form render correct
test("1-ItemForm render correctly", () => {
  render(<ItemForm />);
  const title = screen.getByTestId("app-title");
  const input = screen.getByTestId("task-name");
  const button = screen.getByTestId("task-add-btn");
  expect(title).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
// 2-when user type in input, the value should change
test("2-input value shoud change when user type", async () => {
  render(<ItemForm />);
  const input = screen.getByTestId("task-name");
  await userEvent.type(input, "task 1");
  expect(input).toHaveValue("task 1");
});
// 3-check if error message is displayed when input is empty
test("3-error msg should be displayed when input is empty", async () => {
  const mockOnAddTask = jest.fn();
  render(<ItemForm onAddTask={mockOnAddTask} />);
  const button = screen.getByTestId("task-add-btn");
  await userEvent.click(button);
  const error = screen.getByTestId("error-message");
  expect(error).toBeInTheDocument();
});
// 4-check if item added to list when user click on add button
// 5-check if input is cleared after adding item
