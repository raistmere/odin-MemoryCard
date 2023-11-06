import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import MockCardDisplay from "../Components/CardDisplay.jsx";

global.fetch = vi.fn(() => Promise.resolve({
        json: () => Promise.resolve({name:"Mock Ditto"}),
    })
);

describe("CardDisplay Component", () => {
    // 
    render(<MockCardDisplay />);
    const cardDisplay = screen.getByTestId("cardDisplay");
    // 

    // 
    test("Check if component renders card display", () => {
        expect(cardDisplay.classList.contains("cardDisplay")).toBe(true);
    });

    // 
    // test("Check if we can render 1 pokemon card", () => {
    //     // 
    //     console.log("Child Name: ", cardDisplay.firstChild.textContent);
    //     expect(cardDisplay.childElementCount).toBe(1);
    // });

    test("Check if we can render 15 pokemon cards", () => {
        // 
        expect(cardDisplay.childElementCount).toBe(15);
    });
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

