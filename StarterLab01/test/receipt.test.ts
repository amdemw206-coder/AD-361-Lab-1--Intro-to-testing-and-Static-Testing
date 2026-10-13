import {describe, expect, test} from '@jest/globals';
import { addItem, deleteItem, total, tax, printReceipt, ITEMS } from "../src/fixed_receipt";


// Happy-Path Tests
describe("Items can be added to the grocery list.", () => {
    test("Should contain milk and its associated price" , () => {
    addItem("milk", 3.99);
    expect(ITEMS).toContainEqual({name: 'milk', price: 3.99})   
    })
})

describe("Items can be deleted from the grocery list.", () => {
    test("Should delete milk and its associated price from the ITEMS list" , () => {
    const result = deleteItem("milk");
    expect(result).not.toContainEqual({ name: "milk", price: 3.99 }); 
    })
})

describe("The subtotal is calculated without tax.", () => {
    test("Should calculate the subtotal specifically" , () => {
    const result = total();
    expect(result).toBeCloseTo(47.49, 2); // subtotal in ITEMS list
    })
})

describe("The total is calculated with tax.", () => {
    test("Should calculate the subtotal and tax" , () => {
    const rate = .10;
    const result = tax(rate);
    expect(result).toBeCloseTo((47.49 * rate), 2); 
    })
})

describe("A receipt can be printed.", () => {
    test("Should print out the subtotal, tax, and total" , () => {
    const rate = .10;    
    const result = printReceipt(rate);
    expect(result).toBeUndefined();
    
    })
})



// Unhappy-Path Test
describe("Items can be deleted from the grocery list.", () => {
    test("Should handle trying to delete an item that does not exist", () => {
        const result = deleteItem("nonexistent-item");
        expect(result).toBeDefined();
    });
});

// Edge Case Test
describe("Items can be added to the grocery list.", () => {
    test("Should successfully add an item with a price of zero", () => {
        addItem("free sample", 0.00);     
        expect(ITEMS).toContainEqual({ name: "free sample", price: 0.00 });
    });
});
