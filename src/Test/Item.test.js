import { render, screen } from "@testing-library/react";
import Item from "../Components/Item";
import userEvent from "@testing-library/user-event";

//1-check if component render 1 item
test("render one item", () => {
  const item = { id: 1, name: "Task 1", done: false };
  render(<Item task={item} />);
  const itemElement = screen.getByTestId("item-task");
  expect(itemElement).toBeInTheDocument();
});
//2-check if delete button works correctly
test("2-check if delete btn works", async () => {
  const item = { id: 1, name: "Task 1", done: false };
  const mockDeleteTask = jest.fn();
  render(<Item task={item} onDeleteTask={mockDeleteTask} />);
  const deleteBtn = screen.getByTestId("delete-btn");
  await userEvent.click(deleteBtn);
  expect(mockDeleteTask).toBeCalledWith(item);
});
//3-check if done button call done
test("3-check if done button call done", async () => {
  const item = { id: 1, name: "task 1", done: false };
  const mockDoneTask = jest.fn();
  render(<Item task={item} onDoneTask={mockDoneTask} />);
  const doneBtn = screen.getByTestId("btnDone");
  await userEvent.click(doneBtn);
  expect(mockDoneTask).toBeCalledWith(item);
});
//4-check if done button press undo button render
test("4-check if done button press undo button render", async () => {
  const item = { id: 1, name: "task 1", done: false };
  const mockDoneTask = jest.fn();
  render(<Item task={item} onDoneTask={mockDoneTask} />);
  const doneBtn = screen.getByTestId("btnDone");
  await userEvent.click(doneBtn);
  const undoBtn = screen.getByTestId("btnUndo");
  expect(undoBtn).toBeInTheDocument();
  expect(mockDoneTask).toBeCalledWith(item);
});
//5-check if update button when press edit input render
test("5-check if update button when press edit input render", async () => {
  const item = { id: 1, name: "task 1", done: false };
  const mockEditTask = jest.fn();
  render(<Item task={item} onEditTask={mockEditTask} />);
  const editbtn = screen.getByTestId("editbtn");
  await userEvent.click(editbtn);
  const editInput = screen.getByTestId("edit-input");
  expect(editInput).toBeInTheDocument();
  expect(mockEditTask).toBeCalledWith(item);
});
// 6-check if edit input have value of task name
test("6-check if edit input have value of task name", async () => {
  const item = { id: 1, name: "task 1", done: false };
  const mockEditTask = jest.fn();
  render(<Item task={item} onEditTask={mockEditTask} />);
  const editbtn = screen.getByTestId("editbtn");
  await userEvent.click(editbtn);
  const editInput = screen.getByTestId("edit-input");
  expect(editInput).toHaveValue(item.name);
});
