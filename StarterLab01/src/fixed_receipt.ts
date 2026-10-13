// Program requirements:
// Items can be added to the grocery list.
// Items can be deleted from the grocery list.
// The subtotal is calculated without tax.
// The total is calculated with tax.
// A receipt can be printed.

export const ITEMS = [   //Note: exported ITEMS to use it in test script
  { name: "paper towels", price: 21.99 },
  { name: "sandwich", price: 8.75 },
  { name: "eggs", price: 6.75 }, 
  { name: "avocado oil", price: 10.0 },
];

export function addItem(name: string, price: number) {
  const newItem = { "name": name, "price": price }; 
  ITEMS.push(newItem); 
  return ITEMS
}                       

export function deleteItem(name: string) {
const idx = ITEMS.findIndex(item => item.name === name);
console.log(idx)
  if (idx !== -1) {
    ITEMS.splice(idx, 1);
  }
  return ITEMS;
}

export function total() {
  const length = ITEMS.length 
  let total = 0
  for (const i of ITEMS) { 
    total += i.price
  }
  return total;
}

export function tax(taxRate: number) {
  const tax = total() * taxRate;
  return tax;
}

export function printReceipt(taxRate: number) {   // REVIEW: Whole function block might change since console.log is unideal for testing with Jest. (Failure) 
  console.log("************************");

  for (const i of ITEMS) {
    console.log('${i.name} : $${i.price}');
  }

  console.log("************************");
  console.log(`Subtotal: $${total()}`);
  console.log(`Tax: $ + $${tax(taxRate)}`);
  console.log(`Total: $${(total()+tax(taxRate))}`);  
} 
