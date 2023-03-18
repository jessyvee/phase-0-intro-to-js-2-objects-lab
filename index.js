// Write your solution in this file!
    const employee={
        name: "Sam",
        age: 20,
        position: "Software Developer"
    };
      
    function updateEmployeeWithKeyAndValue(employee, key, value) {
        const updatedEmployee = {employee,key,value };
        return updatedEmployee;
    }
      
    const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Senior Software Developer");
    
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
        return employee;
    }
    const updatedEmployee2  = destructivelyUpdateEmployeeWithKeyAndValue(employee, "position", "Marketing");
    
    function deleteFromEmployeeByKey(employee, key) {
        const newEmployee = { ...employee };
        delete newEmployee[key];
       
        return newEmployee;
    }
    const updatedEmployee3 = deleteFromEmployeeByKey(employee, "position");
      
    function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee[key];
        return employee;
    }
    const updatedEmployee4 = destructivelyDeleteFromEmployeeByKey(employee, "position");

    employee;