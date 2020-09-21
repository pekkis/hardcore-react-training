import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("is suckling on a duckling", () => {
    const testMessage = "Suckling on a duckling!";
    render(<App />);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
