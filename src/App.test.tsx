import { render, screen } from "@testing-library/react";
import MainPage from "./screens/main-page/mainPage";
import { describe } from "node:test";

describe("Hello guys Test", () => {
  it("render conrrectly", () => {
    render(<MainPage />);
    expect(screen.getByText("Pesquise o clima!")).toBeInTheDocument();
  });
});
