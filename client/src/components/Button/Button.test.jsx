import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

describe("Success Panel Component", () => {
  test("Check that submit button renders correctly", async () => {
    render(<Button copy="snip it" type="submit" dataCy={"btn__submit"} />);
    expect(screen.getByText(/snip/i)).toBeInTheDocument();
  });

  test("Check that copy function is called", async () => {
    const handleCopy = jest.fn();
    render(
      <Button copy="copy" handleFn={handleCopy} dataCy={"btn__copy-link"} />
    );
    userEvent.click(screen.getByText(/copy/i));
    expect(handleCopy).toHaveBeenCalledTimes(1);
  });
});
