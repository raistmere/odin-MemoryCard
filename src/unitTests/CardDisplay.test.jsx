import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { act, render, screen, waitFor } from "@testing-library/react";
import MockCardDisplay from "../components/CardDisplay.jsx";
import styles from "../styles/CardDisplay.module.css";

const mockFetch = global.fetch = vi.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            name:`Mock Ditto`,
            sprites: {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            }
        }),
    })
);

//variables
let cardDisplay;


describe("CardDisplay Component", () => {
    // 
    beforeEach(async () => {
        // We want to make sure to clear mockFetch before each test to prevent mock calls issues.
        mockFetch.mockClear();
        render(<MockCardDisplay />);
        // There needs to be a delay because of the state change in cardDisplay.
        await new Promise((resolve) => setTimeout(() => {
            resolve();
        }, 100));
        await waitFor(() => { cardDisplay = screen.getByTestId("cardDisplay")});
    });
    // 
    // 
    test("Check if component renders [cardDisplay]", () => {
        expect(cardDisplay.classList.contains("cardDisplay")).toBe(true);
    });
    // 
    test("Check if we have the same # of [cards] as mockFetch calls", () => {
        expect(cardDisplay.childElementCount).toBe(15);
        // mockFetch.mock.calls.length
    });
    //
    test("Check if clicked cards have been clicked before", () => {
        let card = cardDisplay.children[0];
        // We call click to simulate a card getting clicked and check if it's been clicked.
        card.click();
        expect(card.classList.contains("clicked")).toBe(true);
    });
});

