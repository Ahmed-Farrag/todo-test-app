import { render, screen } from "@testing-library/react";
import ItemList from "../Components/ItemList";

// 1- check if component renders 0 task when no tasks are passed
test("1-render 0 task when no tasks are passed", () => {
  render(<ItemList tasks={[]} />);
  const tasks = screen.queryAllByTestId("task");
  expect(tasks).toHaveLength(0);
});
// 2- check if component renders 3 task when 3 task is passed
test("2-render 3 tasks when 3 tasks is passed", () => {
  const tasks = [
    { id: 1, name: "task 1", done: false },
    { id: 2, name: "task 2", done: false },
    { id: 3, name: "task 3", done: false },
  ];
  render(<ItemList tasks={tasks} />);
  const alltasks = screen.queryAllByTestId("task");
  expect(alltasks).toHaveLength(3);
});
// 3-check if no data message is rendered when no tasks are passed
test("3-no data message is rendered when no tasks are passed", () => {
  render(<ItemList tasks={[]} />);
  const noDataMsg = screen.getByTestId("no-data");
  expect(noDataMsg).toBeInTheDocument();
});
