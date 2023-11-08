import { describe, expect, test, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import MockCardDisplay from "../Components/CardDisplay.jsx";
import styles from "../Styles/CardDisplay.module.css";

const mockFetch = global.fetch = vi.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            name:"Mock Ditto",
            sprites: {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            }
        }),
    })
);

// 


describe("CardDisplay Component", async () => {
    // 
    await waitFor(() => render(<MockCardDisplay />));
    const cardDisplay = screen.getByTestId("cardDisplay");
    // 
    test("Check if component renders [cardDisplay]", () => {
        expect(cardDisplay.classList.contains("cardDisplay")).toBe(true);
    });
    // 
    test("Check if we have the same # of [cards] as mockFetch calls", () => {
        expect(cardDisplay.childElementCount).toBe(mockFetch.mock.calls.length);
    });
    //
});









// vi.mock("../Components/CardDisplay.jsx", () => ({
//     default: {
//         __esModule: true,
//         fetchCardData: vi.fn().mockResolvedValue({
//             name: "Test",
//             img: "https://pokeapi.co/api/v2/pokemon/ditto",
//         })
//     }
// }));

// 
// vi.mock("../Components/CardDisplay.jsx");

// 
// MockCardDisplay.fetchCardData = vi.fn().mockResolvedValue(mockObject);

// 
// const mockFetchObject = [
//         {
//             name: "MockPokemon 1",
//             sprites: {
//                 front_default: "https://pokeapi.co/api/v2/pokemon/ditto"
//             }
//         },
//         {
//             name: "MockPokemon 2",
//             sprites: {
//                 front_default: "https://pokeapi.co/api/v2/pokemon/ditto"
//             }
//         },
//         {
//             name: "MockPokemon 3",
//             sprites: {
//                 front_default: "https://pokeapi.co/api/v2/pokemon/ditto"
//             }
//         }
//     ];

