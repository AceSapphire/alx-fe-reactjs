import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a project")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText("Add a new todo"), {
    target: { value: "Write tests" },
  });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("Write tests")).toBeInTheDocument();
});

test("toggles a todo completion", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: none");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButtons = screen.getAllByText("Delete");
  fireEvent.click(deleteButtons[0]); // delete "Learn React"
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
