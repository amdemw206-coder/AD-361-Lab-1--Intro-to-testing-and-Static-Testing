"use strict";
// Program requirements:
// Items can be added to the grocery list.
// Items can be deleted from the grocery list.
// The subtotal is calculated without tax.
// The total is calculated with tax.
// A receipt can be printed.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITEMS = void 0;
exports.addItem = addItem;
exports.deleteItem = deleteItem;
exports.total = total;
exports.tax = tax;
exports.printReceipt = printReceipt;
exports.ITEMS = [
    { name: "paper towels", price: 21.99 },
    { name: "sandwich", price: 8.75 },
    { name: "eggs", price: 6.75 },
    { name: "avocado oil", price: 10.0 },
];
function addItem(name, price) {
    var newItem = { "name": name, "price": price };
    exports.ITEMS.push(newItem);
    return exports.ITEMS;
}
function deleteItem(name) {
    var idx = exports.ITEMS.findIndex(function (item) { return item.name === name; });
    console.log(idx);
    if (idx !== -1) {
        exports.ITEMS.splice(idx, 1);
    }
    return exports.ITEMS;
}
function total() {
    var length = exports.ITEMS.length;
    var total = 0;
    for (var _i = 0, ITEMS_1 = exports.ITEMS; _i < ITEMS_1.length; _i++) {
        var i = ITEMS_1[_i];
        total += i.price;
    }
    return total;
}
function tax(taxRate) {
    var tax = total() * taxRate;
    return tax;
}
function printReceipt(taxRate) {
    console.log("************************");
    for (var _i = 0, ITEMS_2 = exports.ITEMS; _i < ITEMS_2.length; _i++) {
        var i = ITEMS_2[_i];
        console.log('${i.name} : $${i.price}');
    }
    console.log("************************");
    console.log("Subtotal: $".concat(total()));
    console.log("Tax: $ + $".concat(tax(taxRate)));
    console.log("Total: $".concat((total() + tax(taxRate))));
}
