import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import SuccessPanel from "./SuccessPanel";

afterEach(cleanup);

describe("Success Panel Component", () => {
  test("Render Success Panel", async () => {
    render(<SuccessPanel />);
    expect(screen.queryByText(/Enter your url below/)).toBeNull();
    expect(screen.getByText(/new short link/i)).toBeInTheDocument();
  });
});
