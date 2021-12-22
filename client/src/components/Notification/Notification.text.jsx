import React from "react";
import {
  render,
  screen,
  cleanup,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Notification from "./Notification";

afterEach(cleanup);

const mockErrors = {
  empty: "A valid URL is required to proceed",
  inValid:
    'Please make sure your URL is in a valid format. Ex: "http://gatherly.io"',
};

describe("<Notification />", () => {
  const clearError = jest.fn();
  test("Check that notification renders proper message", async () => {
    render(
      <Notification
        clearFn={clearError}
        type="fail"
        message={mockErrors.empty}
      />
    );
    expect(screen.getByText(mockErrors.empty)).toBeInTheDocument();
  });

  test("Check that error clears", async () => {
    const clearError = jest.fn();
    render(
      <Notification
        clearFn={clearError}
        type="fail"
        message={mockErrors.empty}
      />
    );
    await waitForElementToBeRemoved(
      () => screen.queryByText(mockErrors.empty),
      { timeout: 4000 }
    );
  });
});
