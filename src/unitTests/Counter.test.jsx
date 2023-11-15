import { act, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import MockCounter from "../components/Counter.jsx";
import pubsub from "../pubsub/pubsub.js";

// Variables
let counter;

describe("Counter Compontent", () => {
    // 
    beforeEach(() => {
        render(<MockCounter />);
        counter = screen.getByTestId("counter");
    });
    // 
    test("Check if counter is rendered", () => {
        // 
        expect(counter.textContent).toBe("0");
    });
    // 
    test("Check if counter incremenets", async () => {
        // 
        act(() => {
            pubsub.publish("incrementCounter")
        });
        // 
        expect(counter.textContent).toBe("1");
    });
    // 
    test("Check if counter resets", async () => {
        //
        act(() => {
            pubsub.publish("incrementCounter");  
            pubsub.publish("incrementCounter"); 
            pubsub.publish("resetCounter");
        });
        // 
        expect(counter.textContent).toBe("0");
    });
});