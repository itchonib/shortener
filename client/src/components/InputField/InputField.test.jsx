import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import InputField from "./InputField";

afterEach(cleanup);

const mockLabel = {
  default: "Enter your url below",
};

describe("<InputField />", () => {
  test("Check that input field renders", async () => {
    render(<InputField id={"longUrl"} label={mockLabel.default} />);
    expect(screen.queryByText(/valid/i)).toBeNull();
    expect(screen.getByText(mockLabel.default)).toBeInTheDocument();
  });
});
