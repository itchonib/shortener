import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import InputField from "./InputField";

afterEach(cleanup);

const mockErrorState = {
  empty: "A valid URL is required to proceed",
  inValid:
    'Please make sure your URL is in a valid format. Ex: "http://gatherly.io"',
};

describe("Success Panel Component", () => {
  test("Check that input field renders correctly without error", async () => {
    render(<InputField id={"longUrl"} label="Enter your url below" />);
    expect(screen.queryByText(/valid/i)).toBeNull();
  });

  test("Check that input field renders correctly with error", async () => {
    render(
      <InputField
        id={"longUrl"}
        label="Enter your url below"
        error={mockErrorState.empty}
      />
    );
    expect(screen.getByText(mockErrorState.empty)).toBeInTheDocument();
  });
});
