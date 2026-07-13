import { render, screen, userEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import MyComponent from "./MyComponent";

test("renders and handles interaction", async () => {
  const user = userEvent.setup();
  render(<MyComponent />);
  await user.click(screen.getByRole("button", { name: /submit/i }));
  expect(screen.getByText("Success")).toBeInTheDocument();
});
