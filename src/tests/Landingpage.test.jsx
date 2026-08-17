import { render, screen } from "@testing-library/react";
import LandingPage from "./pages/LandingPage.jsx";

describe("LandingPage Component", () => {
    test("renders welcome heading", () => {
        render(<LandingPage />);

        expect(
            screen.getByText(/welcome to ShopAdmin/i)
        ).toBeInTheDocument();
    }
});

test("renders get started button", () => {
    render(<LandingPage />);

    expect(
        screen.getByRole("button", {
            name: /Get Started/i,
        })
    ).toBeInTheDocument();
});