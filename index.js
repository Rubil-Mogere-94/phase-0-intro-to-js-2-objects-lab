// Define the employee object
var employee = {
    name: "John",
    streetAddress: "123 Main St"
  };
  
  // 1. Update employee with a new key and value (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a copy of the employee object and add the new key-value pair
    let newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
  }
  
  // 2. Destructive update of employee (modifies the original employee)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the original employee object directly
    employee[key] = value;
    return employee;
  }
  
  // 3. Delete a key from employee (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    // Create a copy of the employee object and delete the key
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4. Destructive delete of key from employee (modifies the original employee)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the key directly from the original employee object
    delete employee[key];
    return employee;
  }
  
  // Export the functions for testing (if needed)
  module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
  };
  