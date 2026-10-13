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
  ,                                        //REVIEW: Empty element in ITEMS array, could lead to errors since its undefined. (Root Cause)  
  { name: "avocado oil", price: 10.0 },
];

export function addItem(name: string, price: number) {
  const newItem = { "name" = name, "price" = price }; //REVIEW: ':' expected. (error)
  ITEMS.push(newItem); 
}                       //REVIEW: Nothing is returned for this function

export function deleteItem(name: string) {
  const idx = ITEMS.indexOf("name"); //REVIEW: looks for the literal string "name" inside an array of objects
  ITEMS.pop(); //REVIEW: .pop() without arguements just gets rid of the last element in the array (defect) 
  return ITEMS; 
}

export function total() {
  for (const i of 3) { //REVIEW: Primitive number for the itterative loop logically makes no sense since the ITEMS array can be any length.  
    total = total + ITEMS[i]["price"]; //REVIEW: Format of array for itterative loop is not correct 
  }
  return total;
}

export function tax(taxRate: number) {
  const tax = total() + taxRate; // REVIEW: Should be a different operation entirely (Defect)
  return tax;
}

export function printReceipt(taxRate: number) {   
  console.log("************************");

  for (const i of ITEMS) {
    console.log('${ITEMS[i][name]} : $${ITEMS[i][price]}}');
  }

  console.log("************************");
  console.log(`Subtotal: $${String(total)}`);
  console.log(`Tax: $ + ${String(taxRate)}");  
  console.log(`Total: $ + ${tax(String(taxRate))}");  
} 
  //REVIEW (line 48): Wrong syntax used to define template literals
  //REVIEW (line 49): Total isn't properly calulated (Failure)

// AI transparency: AI was used to clean up this code.