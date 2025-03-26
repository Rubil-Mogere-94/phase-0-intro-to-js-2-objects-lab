// Write your solution in this file!

// Define the employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};

// Function to return a new employee object with an updated key-value pair (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to update employee object destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to return a new employee object with a deleted key (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to delete a key from the employee object destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Export the functions and employee object
module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
};

