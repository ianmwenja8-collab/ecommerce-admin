import { render, screen } from "@testing-library/react";
import LandingPage from "../Pages/Landingpage.jsx";

describe("LandingPage Component", () => {
    test("renders welcome heading", () => {
        render(<LandingPage />);

        expect(
            screen.getByText(/welcome to ShopAdmin/i)
        ).toBeInTheDocument();
    })
});

test("renders get started button", () => {
    render(<LandingPage />);

    expect(
        screen.getByRole("link", {
            name: /Add a product/i,
        })
    ).toBeInTheDocument();
});