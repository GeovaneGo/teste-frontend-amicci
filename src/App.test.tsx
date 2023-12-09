import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';
import MainPage from './screens/main-page/mainPage';

describe("Hello guys Test", () => {
  it("render conrrectly", () => {
    render(<MainPage/>)
    expect(screen.getByText("Hello guys")).toBeInTheDocument();
  })
})