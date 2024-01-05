import { render, screen } from "@testing-library/react";
import Item from "../Components/Item";

//1-check if component render 1 item
test("render one item", () => {
  render(<Item />);
  const itemElement = screen.getByTestId("item-task");
  expect(itemElement).toBeInTheDocument();
});
//2-check if delete button works correctly
//2-check if update button works correctly
//2-check if done button works correctly
