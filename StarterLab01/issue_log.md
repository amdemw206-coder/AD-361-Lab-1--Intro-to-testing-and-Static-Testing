## Bug 1
Location: receipt.ts, line 12
Issue: Empty element in ITEMS array 
Explanation: Empty elements in array list could lead to errors in functions with iterative loops since its undefined.   
Suggested Fix: Delete the comma om the ITEMS array
Status: Fixed

## Bug 2
Location: receipt.ts, addItem(), line 17
Issue: object push to ITEMS array. 
Explanation: Formatted incorrectly; ':' expected.   
Suggested Fix: Instead of "=", replace with ':'
Status: Fixed

## Bug 3 
Location: receipt.ts, addItem(), line 19
Issue: No return statement 
Explanation: Nothing is being returned from the addItem() function. Might be unclear if the ITEMS array updated or not.    
Suggested Fix: Add a return statement that shows the updated ITEMS array
Status: Fixed

## Bug 4 
Location: receipt.ts, addItem(), line 19
Issue: No return statement 
Explanation: Nothing is being returned from the addItem() function. Might be unclear if the ITEMS array updated or not.    
Suggested Fix: Add a return statement that shows the updated ITEMS array
Status: Fixed

## Bug 5
Location: receipt.ts, deleteItem(), line 22
Issue: ITEMS.indexOf() search
Explanation: Looks for the literal string "name" inside an array of objects. 
Suggested Fix: modify the method so it searches for the name input required for the deleteItem() function
Status: Fixed

## Bug 6
Location: receipt.ts, deleteItem(), line 23
Issue: use of .pop() method
Explanation: .pop() without arguements just gets rid of the last element in the array
Suggested Fix: use a different method that deletes a specific element in the ITEMS array
Status: Fixed

## Bug 7
Location: receipt.ts, total(), line 28
Issue: Condition of for loop
Explanation: Primitive number for the iterative loop logically makes no sense since the ITEMS array can be any length.
Suggested Fix: modify the for loop condition so it iterates for the whole length of the ITEMS array
Status: Fixed 

## Bug 8
Location: receipt.ts, total(), line 29
Issue: Calculation of total 
Explanation: Format of array for itterative loop is not correct, leading to a syntax error during calculation  
Suggested Fix: change the total calculation so it accurately returns the subtotal
Status: Fixed 

## Bug 9
Location: receipt.ts, tax(), line 35
Issue: Calculation of tax
Explanation: Tax calculation shouldn't be a simple addition of the tax rate and the subtotal.  
Suggested Fix: Change the tax calculation so it accurately reflects the tax amount
Status: Fixed

## Bug 10
Location: receipt.ts, printReceipt(), line 48 
Issue: template literal defect
Explanation: Wrong syntax used to define template literals, along with taxRate being shown instead of the actual tax. 
Suggested Fix: Fix the format of the template literal
Status: Fixed

## Bug 11
Location: receipt.ts, printReceipt(), line 49 
Issue: receipt total value
Explanation: Total isn't properly calulated. Nothing is being summed up despite the addition operator being used
Suggested Fix: Fix the line of code so total is properly displayed in console.log
Status: Fixed 